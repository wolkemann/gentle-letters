"use client";
import { useFormState } from "react-dom";
import Letter from "../Letter";
import { writeLetterAction } from "@/utils/serverActions/writeLetterAction";
import { FormState } from "@/utils/serverActions/createAccountAction";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";
import { SubmitButton } from "../ui/submit-button";
import { ProfileData } from "@/types/profileData";
import Window from "../ui/window";
import { Button } from "../ui/button";
import Link from "next/link";

export default function WriteLetterForm({
  profileData,
}: {
  profileData: ProfileData;
}) {
  const initialState: FormState = {
    message: "",
    error: "",
  };

  const [state, formAction] = useFormState(writeLetterAction, initialState);

  if (state?.error) {
    toast.error(state.error, { duration: 2000 });
  }

  return (
    <div className="flex flex-col w-[350px] h-[510px]">
      {!state.message ? (
        <form action={formAction}>
          <input name="authorId" type="hidden" value={profileData.id} />
          <Letter author={profileData.nickname} writeMode />
          <SubmitButton className="w-full">Send</SubmitButton>
        </form>
      ) : (
        <Window
          footer={
            <Button asChild className="w-full">
              <Link href="/">Go to your dashboard</Link>
            </Button>
          }
        >
          <div className="w-full">
            Congratulations! You have sent your Letter! Who knows what answer
            you will receive.
          </div>
        </Window>
      )}
      <Toaster position="top-center" />
    </div>
  );
}
