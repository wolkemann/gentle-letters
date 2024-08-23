"use client";
import { Tables } from "@/types/supabase";
import Letter from "../Letter";
import { getNicknameById } from "@/utils/getNicknameById";
import { useState } from "react";
import LetterSticker from "../LetterSticker";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Window from "../ui/window";
import { StickersArray } from "@/utils/stickersArray";
import { MessageCircleHeart } from "lucide-react";
import { SubmitButton } from "../ui/submit-button";
import { FormState } from "@/utils/serverActions/createAccountAction";
import { useFormState } from "react-dom";
import { sendStickerAction } from "@/utils/serverActions/sendStickerAction";
import { Button } from "../ui/button";
import Link from "next/link";

type SendStickerFormProps = {
  letter: Tables<"letters">;
  reply: Tables<"replies">;
  profiles: Tables<"profiles">[] | null;
};

export default function SendStickerForm({
  letter,
  reply,
  profiles,
}: SendStickerFormProps) {
  const initialState: FormState = {
    message: "",
    error: "",
  };
  const [zIndex, setZIndex] = useState<string>("z-[40]");
  const [selectedSticker, setSelectedSticker] = useState<string>("");
  const [state, formAction] = useFormState(sendStickerAction, initialState);

  if (state.message) {
    return (
      <div className="flex items-center justify-center w-screen h-[525px] relative">
        <Window
          title="Success!"
          footer={
            <Button asChild className="w-full">
              <Link href="/dashboard">Go to your dashboard</Link>
            </Button>
          }
        >
          {state.message}
        </Window>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-screen h-[525px] relative">
      <Letter
        author={getNicknameById(profiles, letter.authorId)}
        onClick={() => setZIndex("z-[40]")}
        className={`${zIndex}`}
      >
        {letter.text}
      </Letter>
      <Letter
        isReply
        author={getNicknameById(profiles, reply.authorId)}
        onClick={() => setZIndex("z-[20]")}
        className="absolute md:ml-5 mt-9 z-[30]"
      >
        {reply.text}
        <Dialog>
          <DialogTrigger asChild>
            <LetterSticker
              image={selectedSticker}
              className="bottom-1 right-1 absolute"
            />
          </DialogTrigger>
          <DialogContent className="p-0 md:w-[500px] bg-transparent border-0">
            <DialogHeader className="hidden">
              <DialogTitle>Choose a stricker</DialogTitle>
              <DialogDescription>Choose a sticker to send.</DialogDescription>
            </DialogHeader>
            <form action={formAction}>
              <input type="hidden" name="sticker" value={selectedSticker} />
              <input
                type="hidden"
                name="sticker-sender"
                value={letter.authorId}
              />
              <input
                type="hidden"
                name="sticker-obtainer"
                value={reply.authorId || ""}
              />
              <input type="hidden" name="reply-id" value={reply.id} />
              <Window
                title="Choose a sticker"
                footer={
                  selectedSticker && (
                    <>
                      <div className="flex gap-2 p-2">
                        <MessageCircleHeart className="w-[90px]" />
                        <div className="text-sm">
                          When you send a Sticker the correspondence between you
                          and your misterious helper is concluded and will be
                          deleted from your inbox. You can go to your archive to
                          review the conversation.
                          {state.error && state.error}
                        </div>
                      </div>
                      <SubmitButton className="w-full">
                        Send sticker
                      </SubmitButton>
                    </>
                  )
                }
                className="md:w-[500px]"
              >
                <div className="flex justify-center flex-wrap gap-5">
                  {StickersArray.map((sticker) => {
                    return (
                      <LetterSticker
                        onClick={() =>
                          setSelectedSticker(
                            sticker.url === selectedSticker ? "" : sticker.url,
                          )
                        }
                        selected={selectedSticker === sticker.url}
                        size={80}
                        key={sticker.id}
                        image={sticker.url}
                      />
                    );
                  })}
                </div>
              </Window>
            </form>
          </DialogContent>
        </Dialog>
      </Letter>
    </div>
  );
}
