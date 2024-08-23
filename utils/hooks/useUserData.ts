import { createClient } from "../supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Tables } from "@/types/supabase";

export const useUserData = async () => {
  const supabase = createClient();
  const authData = await supabase.auth.getUser();

  const { data: profileData }: PostgrestSingleResponse<Tables<"profiles">[]> =
    await supabase.from("profiles").select("id, nickname");

  const { data: lettersToReply }: PostgrestSingleResponse<Tables<"letters">[]> =
    await supabase
      .from("letters")
      .select("*")
      .or(
        `recipientId.eq.${authData.data.user?.id}, authorId.eq.${authData.data.user?.id}`,
      );

  const {
    data: repliesWithoutSticker,
  }: PostgrestSingleResponse<Tables<"replies">[]> = await supabase
    .from("replies")
    .select("*")
    .or(
      `recipientId.eq.${authData.data.user?.id}, authorId.eq.${authData.data.user?.id}`,
    );

  const {
    data: user_stickers,
  }: PostgrestSingleResponse<Tables<"user_stickers">[]> = await supabase
    .from("user_stickers")
    .select("*")
    .or(
      `obtained_by.eq.${authData.data.user?.id}, given_by.eq.${authData.data.user?.id}`,
    );

  return {
    authData: authData.data,
    profiles: profileData,
    profileData: profileData
      ? profileData.find((profile) => profile.id === authData.data.user?.id)
      : null,
    lettersToReply: lettersToReply ? lettersToReply : [],
    repliesWithoutSticker: repliesWithoutSticker ? repliesWithoutSticker : [],
    user_stickers: user_stickers,
  };
};
