"use server";

import getDatabase from "@/lib/getDatabase";
import { getUser } from "@/lib/getUser";

export default async function sendMessage(formData: FormData) {
  const supabase = getDatabase();
  const userData = await getUser();
  const message = formData.get("message") as string;
  const chatName = formData.get("url") as string;

  const chatId = await supabase
    .from("chats")
    .select("id")
    .eq("name", `${chatName}`);

  // console.log(message, chatName, chatId);

  await supabase.from("messages").insert({
    message: message,
    user: userData.profileUserData.data?.[0].username,
    chat: chatId.data?.[0].id,
  });

  const { error } = await supabase
    .from("chats")
    .update({ messages: [6] })
    .eq("id", 5);
  4;
  if (error) {
    console.log(error);
  }
}
