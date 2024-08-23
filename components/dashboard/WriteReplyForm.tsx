"use client";
import Letter from "../Letter";
import { Tables } from "@/types/supabase";
import { getNicknameById } from "@/utils/getNicknameById";
import { useState } from "react";
import { useFormState } from "react-dom";
import { writeReplyAction } from "@/utils/serverActions/writeReplyAction";
import { FormState } from "@/utils/serverActions/createAccountAction";
import { SubmitButton } from "../ui/submit-button";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";
import Window from "../ui/window";
import { Button } from "../ui/button";
import Link from "next/link";

type WriteReplyFormProps = {
  profiles: Tables<"profiles">[] | null;
  letter: Tables<"letters">;
  profileData: Tables<"profiles"> | null | undefined;
};

export default function WriteReplyFrom({
  profiles,
  letter,
  profileData,
}: WriteReplyFormProps) {
  const initialState: FormState = {
    message: "",
    error: "",
  };
  const [zIndex, setZIndex] = useState<string>("z-[40]");

  const [state, formAction] = useFormState(writeReplyAction, initialState);

  if (state?.error) {
    toast.error(state.error, { duration: 2000 });
    state.error = "";
  }

  if (state.message) {
    return (
      <Window
        footer={
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to your dashboard</Link>
          </Button>
        }
      >
        {state.message}
      </Window>
    );
  }

  return (
    <form action={formAction}>
      <div className="flex justify-center w-screen relative">
        <input name="replierId" type="hidden" value={profileData?.id} />
        <input name="recipientId" type="hidden" value={letter.authorId} />
        <input name="letterRepliedId" type="hidden" value={letter.id} />
        <Letter
          author={getNicknameById(profiles, profileData?.id)}
          isReply
          writeMode
          placeholder="Write a reply to this letter..."
          onClick={() => setZIndex("z-[20]")}
          className={`absolute bottom-10 md:mr-10 z-[30]`}
        />
        <Letter
          author={getNicknameById(profiles, letter.authorId)}
          onClick={() => setZIndex("z-[40]")}
          className={`${zIndex}`}
        >
          {letter.text}
        </Letter>
        <SubmitButton className={`z-[30] absolute bottom-[-5px]`}>
          Send reply
        </SubmitButton>
      </div>
      <Toaster position="top-center" />
    </form>
  );
}
