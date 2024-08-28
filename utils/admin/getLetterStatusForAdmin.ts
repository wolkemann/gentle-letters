import { Tables } from "@/types/supabase";
import { isReplyTimePassed } from "../dateFormatters";

export const getLetterStatusForAdmin = (letter: Tables<"letters">) => {
  if (!letter?.recipientId) {
    return "Letter has no recipient";
  }

  if (isReplyTimePassed(letter?.created_at)) {
    return "No reply after 7 days";
  }

  return "";
};
