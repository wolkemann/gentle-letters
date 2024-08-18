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

export default function LoginForm() {
  const initialState: FormState = {
    message: "",
    error: "",
  };

  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <div className="p-3 md:p-5 w-full md:w-[500px]">
      <form action={formAction}>
        <Window
          title={
            <div className="flex gap-2 items-center">
              <LogInIcon />
              Login
            </div>
          }
          footer={<SubmitButton text="Login" />}
        >
          <Form />
          {state.message && state.message}
          {state.error && state.error}
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
    </>
  );
}
