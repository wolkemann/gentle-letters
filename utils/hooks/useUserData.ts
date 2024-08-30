import { createClient } from "../supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Tables } from "@/types/supabase";
import { decryptString } from "../encryption-decryption";

export const useUserData = async () => {
  const supabase = createClient();
  const authData = await supabase.auth.getUser();

  const { data: profileData }: PostgrestSingleResponse<Tables<"profiles">[]> =
    await supabase.from("profiles").select("id, nickname, email");

  const userData = profileData
    ? profileData.find((profile) => profile.id === authData.data.user?.id)
    : null;

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
    profiles: profileData || [],
    profileData: userData,
    lettersToReply:
      lettersToReply?.map((letter) => ({
        ...letter,
        text: decryptString(letter.text || ""),
      })) || [],
    repliesWithoutSticker:
      repliesWithoutSticker?.map((reply) => ({
        ...reply,
        text: decryptString(reply.text || ""),
      })) || [],
    user_stickers: user_stickers || [],
    isAdmin:
      userData?.email !== undefined &&
      userData?.email !== null &&
      process.env.ADMIN_USER === userData?.email,
  };
};
