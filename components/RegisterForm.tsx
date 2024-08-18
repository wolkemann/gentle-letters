"use client";
import { LoaderCircle, UserPlus } from "lucide-react";
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

export default function RegisterForm() {
  const initialState: FormState = {
    message: "",
    error: "",
  };

  const [state, formAction] = useFormState(createAccountAction, initialState);

  return (
    <div className="p-3 md:p-5 w-full md:w-[600px]">
      <form action={formAction}>
        <Window
          title={
            <div className="flex gap-2 items-center">
              <UserPlus />
              Create Account
            </div>
          }
          footer={
            !state.message ? (
              <SubmitButton text="Create Account" />
            ) : (
              <Button asChild className="w-full">
                <Link href="/">Go to your dashboard</Link>
              </Button>
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
                Maybe it is funny, maybe weird, maybe even horrible! But we
                would like you to keep this nickname secret. Whatever you choose
                is up to you.
              </p>
            </>
          ) : (
            <Form />
          )}

          {state.error && <div className="mt-1">{state.error}</div>}
        </Window>
      </form>
    </div>
  );
}

function Form() {
  const { pending } = useFormStatus();
  return (
    <>
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
    </>
  );
}
