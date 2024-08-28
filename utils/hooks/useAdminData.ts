import { createClient } from "../supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { Tables } from "@/types/supabase";
import { redirect } from "next/navigation";

export const useAdminData = async () => {
  const supabase = createClient();
  const { data: admin } = await supabase.auth.getUser();

  if (
    admin.user?.email === undefined ||
    admin.user.email === null ||
    admin.user.email !== process.env.ADMIN_USER
  ) {
    redirect("/");
  }

  const { data: profiles }: PostgrestSingleResponse<Tables<"profiles">[]> =
    await supabase.from("profiles").select("*");

  const adminData = profiles
    ? profiles.find((profile) => profile.id === admin.user?.id)
    : null;

  const { data: letters }: PostgrestSingleResponse<Tables<"letters">[]> =
    await supabase.from("letters").select("*");

  const { data: replies }: PostgrestSingleResponse<Tables<"replies">[]> =
    await supabase.from("replies").select("*");

  const { data: stickers }: PostgrestSingleResponse<Tables<"user_stickers">[]> =
    await supabase.from("user_stickers").select("*");

  return {
    admin: adminData,
    profiles: profiles || [],
    letters: letters || [],
    replies: replies || [],
    stickers: stickers || [],
  };
};
