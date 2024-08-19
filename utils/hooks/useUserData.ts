import { createClient } from "../supabase/server";

export const useUserData = async () => {
  const supabase = createClient();
  const authData = await supabase.auth.getUser();

  const profileData = await supabase.from("profiles").select("*");

  const lettersToReply = await supabase
    .from("letters")
    .select("*")
    .eq("recipientId", authData.data.user?.id);

  return {
    authData: authData.data,
    profiles: profileData.data,
    profileData: profileData.data
      ? profileData.data.find(
          (profile) => (profile.id = authData.data.user?.id),
        )
      : {},
    lettersToReply: lettersToReply.data ? lettersToReply.data : [],
  };
};
