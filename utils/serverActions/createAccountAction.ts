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

export async function simulateAsyncOperation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("s");
    }, 2000);
  });
}

export const createAccountAction = async (
  prevState: FormState,
  formData: FormData,
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirm-password") as string;

  if (!email) {
    return { message: "", error: "Email is required." };
  }

  if (!password || password !== confirmPassword) {
    return { message: "", error: "Passwords don't match." };
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

  const updateResult = await supabase
    .from("profiles")
    .update({ nickname: generatedNickname })
    .eq("email", data?.user?.email)
    .select();

  const loginResult = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { message: generatedNickname };
};

export const loginAction = async (prevState: FormState, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { message: "", error: error.message };
  }

  redirect("/dashboard");
};
