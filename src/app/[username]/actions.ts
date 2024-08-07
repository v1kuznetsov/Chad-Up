"use server";

import { getDatabase } from "@/lib/getDatabase";
import { getMessages } from "@/lib/getMessages";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

export async function sendMessage(formData: FormData) {
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

export async function startChat(formData: FormData) {
  const supabase = getDatabase();
  const userData = await getUser();

  const userNameOne = `${userData.profile?.username}`;
  const userIdOne = `${userData.profile?.id}`;
  const userNameTwo = formData.get("username") as string;

  const userTwoIdData = await supabase
    .from("profiles")
    .select("id")
    .eq("username", userNameTwo);

  const userIdTwo = userTwoIdData.data?.[0].id;

  const chatName = `${userNameOne} with ${userNameTwo}`;

  const createdChatId = await supabase
    .from("chats")
    .insert({
      name: chatName,
    })
    .select();

  const { error: errorAddMemberOne } = await supabase
    .from("chat_members")
    .insert([{ chat_id: createdChatId.data?.[0].id, user_id: userIdOne }]);

  const { error: errorAddMemberTwo } = await supabase
    .from("chat_members")
    .insert([{ chat_id: createdChatId.data?.[0].id, user_id: userIdTwo }]);

  if (errorAddMemberOne || errorAddMemberTwo) {
    console.log(errorAddMemberOne, errorAddMemberTwo);
    const error = errorAddMemberOne || errorAddMemberTwo;
    redirect(`/cabinet?${error?.code}`);
  }
  redirect(`/chat/${chatName}`);
}

export async function chatWorker(formData: FormData) {
  const chatName = formData.get("chatName") as string;
  await sendMessage(formData);
  const messages = await getMessages(chatName);
  return messages;
}
