"use server";

import getDatabase from "@/lib/getDatabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signout() {
  const supabase = getDatabase();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect(`/error?${error.message}`);
  }
  revalidatePath("/", "layout");
  redirect("/");
}
