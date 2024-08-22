import { createClient } from "../supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Tables } from "@/types/supabase";

export const useUserData = async () => {
  const supabase = createClient();
  const authData = await supabase.auth.getUser();

  const { data: profileData }: PostgrestSingleResponse<Tables<"profiles">[]> =
    await supabase.from("profiles").select("*");

  const { data: lettersToReply }: PostgrestSingleResponse<Tables<"letters">[]> =
    await supabase.from("letters").select("*");

  const {
    data: repliesWithoutSticker,
  }: PostgrestSingleResponse<Tables<"replies">[]> = await supabase
    .from("replies")
    .select("*")
    .eq("recipientId", authData.data.user?.id);

  return {
    authData: authData.data,
    profiles: profileData,
    profileData: profileData
      ? profileData.find((profile) => profile.id === authData.data.user?.id)
      : null,
    lettersToReply: lettersToReply ? lettersToReply : [],
    repliesWithoutSticker: repliesWithoutSticker ? repliesWithoutSticker : [],
  };
};
