import { Tables } from "@/types/supabase";

export const getNicknameById = (
  profiles: Tables<"profiles">[] | null,
  id: string | undefined | null
) => {
  const profilesFiltered = profiles?.find((profile) => profile.id === id);

  return profilesFiltered?.nickname;
};
