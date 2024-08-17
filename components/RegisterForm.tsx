"use client";
import { LoaderCircle, LoaderCircleIcon, LogInIcon } from "lucide-react";
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

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className={`w-full ${pending ? "opacity-70" : "opacity-100"}`}
    >
      {pending && <LoaderCircleIcon />}
      {"Create Account"}
      <LogInIcon className="mr-2 h-4 w-4" />
    </Button>
  );
}

export default function RegisterForm() {
  const initialState: FormState = {
    message: "",
    error: "",
  };

  const [state, formAction] = useFormState(createAccountAction, initialState);

  return (
    <div className=" lg:w-[500px]">
      <form action={formAction}>
        <Window title="Create Account" footer={<SubmitButton />}>
          <Label htmlFor="email">
            <strong>Email</strong>
          </Label>
          <Input type="email" id="email" name="email" placeholder="Email" />
          <Label htmlFor="password">
            <strong>Password</strong>
          </Label>
          <Input type="password" id="password" name="password" placeholder="" />
          <Label htmlFor="confirm-password">
            <strong>Confirm Password</strong>
          </Label>
          <Input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder=""
          />

          <div>
            <Link href="/">Login</Link>
          </div>
          {state.message && <div>{state.message}</div>}
          {state.error && <div>{state.error}</div>}
        </Window>
      </form>
    </div>
  );
}
