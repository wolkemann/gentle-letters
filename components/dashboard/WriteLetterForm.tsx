"use client";
import { useFormState } from "react-dom";
import Letter from "../Letter";
import { writeLetterAction } from "@/utils/serverActions/writeLetterAction";
import { FormState } from "@/utils/serverActions/createAccountAction";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";
import { SubmitButton } from "../ui/submit-button";
import { ProfileData } from "@/types/profileData";

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
      <form action={formAction}>
        <input name="authorId" type="hidden" value={profileData.id} />
        <Letter author={profileData.nickname} writeMode />
        <SubmitButton className="w-full">Send</SubmitButton>
      </form>
      <Toaster position="top-center" />
    </div>
  );
}
