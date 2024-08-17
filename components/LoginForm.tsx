"use client";
import { LogInIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Window from "./ui/window";
import {
  FormState,
  loginAction,
} from "@/utils/serverActions/createAccountAction";
import { useFormState } from "react-dom";
import Link from "next/link";

export default function LoginForm() {
  const initialState: FormState = {
    message: "",
    error: "",
  };

  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <div className=" lg:w-[500px]">
      <form action={formAction}>
        <Window
          title={"Login"}
          footer={
            <Button type="submit" className="w-full">
              {"Login"}
              <LogInIcon className="mr-2 h-4 w-4" />
            </Button>
          }
        >
          <Label htmlFor="email">
            <strong>Email</strong>
          </Label>
          <Input type="email" id="email" name="email" placeholder="Email" />
          <Label htmlFor="password">
            <strong>Password</strong>
          </Label>
          <Input type="password" id="password" name="password" placeholder="" />

          <Link href={"/register"}>{"Create account"}</Link>
          {state.message && state.message}
          {state.error && state.error}
        </Window>
      </form>
    </div>
  );
}
