"use server";

import getDatabase from "@/lib/getDatabase";
import { getUser } from "@/lib/getUser";

export default async function sendMessage(formData: FormData) {
  const supabase = getDatabase();

  const message = formData.get("message") as string;
  const chat_id = formData.get("chat_id") as string;
  const user_id = formData.get("user_id") as string;

  const { error } = await supabase.from("messages").insert({
    user_id: user_id,
    chat_id: chat_id,
    content: message,
  });

  if (error) {
    console.log(error);
  }
}
