"use server";

import { redirect } from "next/navigation";

import getDatabase from "@/lib/getDatabase";

export async function login(formData: FormData) {
  const supabase = getDatabase();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error?.message === "Email not confirmed") {
    redirect("/waitAuth");
  } else if (error) {
    redirect(`/signup?${error.code}`);
  }

  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = getDatabase();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect(`/signup?${error.code}`);
  }

  redirect("/waitAuth");
}
