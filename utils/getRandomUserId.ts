import { Tables } from "@/types/supabase";

export const getRandomUserId = (users: Tables<"profiles">[] | null) => {
  return users ? users[Math.floor(Math.random() * users.length)] : null;
};
