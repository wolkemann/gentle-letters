"use client";
import { UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Window from "./ui/window";
import {
  createAccountAction,
  FormState,
} from "@/utils/serverActions/createAccountAction";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { SubmitButton } from "./ui/submit-button";
import { createClient } from "@/utils/supabase/client";

export default function RegisterForm() {
  const initialState: FormState = {
    message: "",
    error: "",
  };

  const [state, formAction] = useFormState(createAccountAction, initialState);

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
            <UserPlus />
            Create Account
          </div>
        }
        footer={
          !state.message && (
            <div className="text-sm px-2">
              When you create a new account, a random nickname will be assigned
              during the creation. Learn more{" "}
              <Link href="/about" className="underline font-bold">
                here
              </Link>
              .
            </div>
          )
        }
      >
        {state.message ? (
          <>
            <p>
              You successfully created an account, congratulations! Inside the
              community you will be known as <strong>{state.message}</strong>.
            </p>
            <p className="mt-2">
              Maybe it is funny, maybe weird, maybe even horrible! But we would
              like you to keep this nickname secret. Whatever you choose is up
              to you.
            </p>
            <Button asChild className="w-full">
              <Link href="/">Go to your dashboard</Link>
            </Button>
          </>
        ) : (
          <>
            <form action={formAction}>
              <Form />
              <SubmitButton className="w-full" variant="window">
                Create Account
              </SubmitButton>
              {state.error && (
                <div className="text-sm px-2 mt-1">{state.error}</div>
              )}
            </form>

            <div className="my-5 mb-3 text-center">or register with</div>

            <Button className="w-full" size="lg" onClick={signInWithGoogle}>
              Google
            </Button>
          </>
        )}
      </Window>
    </div>
  );
}

function Form() {
  const { pending } = useFormStatus();
  return (
    <div className="mb-2">
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
      <Label htmlFor="confirm-password">
        <strong>Confirm Password</strong>
      </Label>
      <Input
        type="password"
        id="confirm-password"
        name="confirm-password"
        disabled={pending}
        className="mb-1"
      />
    </div>
  );
}
