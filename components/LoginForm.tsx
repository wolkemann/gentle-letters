"use client";
import { LogInIcon } from "lucide-react";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Window from "./ui/window";
import {
  FormState,
  loginAction,
} from "@/utils/serverActions/createAccountAction";
import { useFormState, useFormStatus } from "react-dom";

import { SubmitButton } from "./ui/submit-button";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";

export default function LoginForm() {
  const initialState: FormState = {
    message: "",
    error: "",
  };
  const [state, formAction] = useFormState(loginAction, initialState);

  console.log(window.location.origin);

  const signInWithGoogle = async () => {
    const supabase = createClient();

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="p-3 md:p-5 w-full md:w-[500px]">
      <Window
        title={
          <div className="flex gap-2 items-center">
            <LogInIcon />
            Login
          </div>
        }
        footer={
          <form action={formAction}>
            <div className="text-sm px-2">
              If logging for the first time, a random nickname will be assigned.
            </div>
            <SubmitButton className="w-full hidden" variant="window">
              Login
            </SubmitButton>
          </form>
        }
      >
        <div>
          <Button className="w-full" size="lg" onClick={signInWithGoogle}>
            Signin with Google
          </Button>
        </div>

        {state.message && state.message}
        {state.error && state.error}
      </Window>
    </div>
  );
}

function Form() {
  const { pending } = useFormStatus();
  return (
    <div className="mt-3">
      <Label htmlFor="email">
        <strong>Email</strong>
      </Label>
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="Email"
        disabled={pending}
        className="mb-1"
      />
      <Label htmlFor="password">
        <strong>Password</strong>
      </Label>
      <Input
        type="password"
        id="password"
        name="password"
        disabled={pending}
        className="mb-1"
      />
    </div>
  );
}
