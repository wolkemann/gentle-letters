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
import Link from "next/link";

export default function LoginForm() {
  const initialState: FormState = {
    message: "",
    error: "",
  };
  const [state, formAction] = useFormState(loginAction, initialState);

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
    <div className="p-3 md:p-5 w-full md:w-[600px]">
      <Window
        title={
          <div className="flex gap-2 items-center">
            <LogInIcon />
            Login
          </div>
        }
        footer={
          <div className="text-sm px-2">
            &#42; If logging for the first time, a random nickname will be
            assigned during the account creation. Learn more{" "}
            <Link href="/about" className="underline font-bold">
              here
            </Link>
            .
          </div>
        }
      >
        <form action={formAction}>
          <Form />
          <div className="text-sm px-2">
            {state.message && state.message}
            {state.error && state.error}
          </div>

          <div className="my-5 mb-3 text-center">
            or login with<span className="text-xs">&#42;</span>
          </div>
        </form>

        <Button className="w-full" size="lg" onClick={signInWithGoogle}>
          Google
        </Button>
      </Window>
    </div>
  );
}

function Form() {
  const { pending } = useFormStatus();
  return (
    <div>
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
        className="mb-2"
      />
      <SubmitButton className="w-full" variant="window">
        Login
      </SubmitButton>
    </div>
  );
}
