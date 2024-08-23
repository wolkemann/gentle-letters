"use server";
import { FormState } from "./createAccountAction";
import { createClient } from "../supabase/server";
import { revalidatePath } from "next/cache";

export const writeReplyAction = async (
  prevState: FormState,
  formData: FormData,
) => {
  const letterText = formData.get("letter-textarea") as string;
  const recipientId = formData.get("recipientId") as string;
  const replierId = formData.get("replierId") as string;
  const letterRepliedId = formData.get("letterRepliedId") as string;

  if (letterText.trim().length < 150) {
    return {
      message: "",
      error: "The text of the letter must be at least 150 long.",
    };
  }

  const supabase = createClient();

  const { data, error } = await supabase
    .from("replies")
    .insert({
      text: letterText,
      authorId: replierId,
      recipientId,
      letterRepliedId,
    })
    .select();

  if (error) {
    return { message: "", error: error.message };
  }

  const { error: letterUpdateError } = await supabase
    .from("letters")
    .update({ replied: true, replyId: data[0].id })
    .eq("id", letterRepliedId);

  if (letterUpdateError) {
    return { message: "", error: letterUpdateError.message };
  }

  return {
    message:
      "Reply sent! You have potentially made someone's life better. Congratulations!",
    error: "",
  };
};
