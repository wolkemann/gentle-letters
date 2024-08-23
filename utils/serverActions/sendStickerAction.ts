"use server";
import { revalidatePath } from "next/cache";
import { createClient } from "../supabase/client";
import { FormState } from "./createAccountAction";

export const sendStickerAction = async (
  prevState: FormState,
  formData: FormData,
) => {
  const sticker = formData.get("sticker") as string;
  const stickerSender = formData.get("sticker-sender") as string;
  const stickerObtainer = formData.get("sticker-obtainer") as string;
  const replyId = formData.get("reply-id") as string;

  const supabase = createClient();

  const { error } = await supabase
    .from("user_stickers")
    .insert({
      url: sticker,
      given_by: stickerSender,
      obtained_by: stickerObtainer,
      reply_id: replyId,
    });

  if (error) {
    return { message: "", error: error.message };
  }

  const { error: updateReplyError } = await supabase
    .from("replies")
    .update({ sticker_sent: true })
    .eq("id", replyId);

  if (updateReplyError) {
    return { message: "", error: updateReplyError.message };
  }

  return {
    message:
      "The sticker was sent. We hope that you and your correspondent have shared something special!",
  };
};
