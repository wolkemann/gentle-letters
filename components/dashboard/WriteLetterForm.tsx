"use client";
import { useFormState } from "react-dom";
import Letter from "../Letter";
import { writeLetterAction } from "@/utils/serverActions/writeLetterAction";
import { FormState } from "@/utils/serverActions/createAccountAction";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";

import Window from "../ui/window";
import { Button } from "../ui/button";
import Link from "next/link";
import { Tables } from "@/types/supabase";

export default function WriteLetterForm({
  profileData,
}: {
  profileData: Tables<"profiles"> | null | undefined;
}) {
  const initialState: FormState = {
    message: "",
    error: "",
  };

  const [state, formAction] = useFormState(writeLetterAction, initialState);

  if (state?.error) {
    toast.error(state.error, { duration: 2000 });
    state.error = "";
  }

  return (
    <div className="flex flex-col">
      {!state.message ? (
        <form action={formAction}>
          <input name="authorId" type="hidden" value={profileData?.id} />
          <Letter author={profileData?.nickname} writeMode />
        </form>
      ) : (
        <Window
          footer={
            <Button asChild className="w-full">
              <Link href="/dashboard">Go to your dashboard</Link>
            </Button>
          }
        >
          <div className="w-full">
            Congratulations! You have sent your Letter! Who knows what answer
            you will receive.
          </div>
        </Window>
      )}
      <Toaster
        toastOptions={{
          unstyled: true,
          classNames: {
            toast:
              "text-sm flex items-center gap-3 md:gap-1 bg-window-innerbg-color p-3 rounded button-shadow border border-button-border-color",
          },
        }}
        position="top-center"
      />
    </div>
  );
}
