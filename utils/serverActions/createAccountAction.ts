"use server";
import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

export type FormState = {
  message: string;
  error?: string;
};

export const createAccountAction = async (
  prevState: FormState,
  formData: FormData,
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;

  if (password !== confirmPassword) {
    return { message: "", error: "Password is different" };
  }

  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return { message: "", error: error.message };
  }

  const generatedNickname = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    length: 3,
  });

  const result = await supabase
    .from("profiles")
    .update({ nickname: generatedNickname })
    .eq("email", data?.user?.email)
    .select();

  console.log(result);

  return { message: "account will be created" };
};

export const loginAction = async (prevState: FormState, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { message: "login success", error: "" };
};
