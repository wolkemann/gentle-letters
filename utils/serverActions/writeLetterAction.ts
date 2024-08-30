"use server";
import { FormState } from "./createAccountAction";
import { createClient } from "../supabase/server";
import { revalidatePath } from "next/cache";
import { encryptString } from "../encryption-decryption";

export const writeLetterAction = async (
  prevState: FormState,
  formData: FormData,
) => {
  const letterText = formData.get("letter-textarea") as string;
  const authorId = formData.get("authorId") as string;

  if (letterText.trim().length < 150) {
    return {
      message: "",
      error: "The text of the letter must be at least 150 long.",
    };
  }

  const supabase = createClient();

  const { data: recipients, error: recipientsError } = await supabase
    .from("profiles")
    .select("id")
    .neq("id", authorId);

  if (recipientsError) {
    return { message: "", error: recipientsError.message };
  }

  const recipient = recipients
    ? recipients[Math.floor(Math.random() * recipients.length)]
    : null;

  const { error } = await supabase.from("letters").insert({
    text: encryptString(letterText),
    authorId,
    recipientId: recipient?.id,
  });

  if (error) {
    return { message: "", error: error.message };
  }

  revalidatePath("/dashboard");

  return { message: "success", error: "" };
};
