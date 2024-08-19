export const getNicknameById = (profiles: any[] | null, id: string) => {
  const profilesFiltered = profiles?.find((profile) => profile.id === id);

  return profilesFiltered?.nickname;
};
