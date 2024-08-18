import { createClient } from "../supabase/server";

export const useUserData = async () => {
  const supabase = createClient();
  const authData = await supabase.auth.getUser();

  const profileData = await supabase
    .from("profiles")
    .select("*")
    .eq("email", authData.data.user?.email);

  return { authData: authData.data, profileData: profileData.data };
};
