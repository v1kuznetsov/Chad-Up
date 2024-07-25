"use server";

import getDatabase from "@/lib/getDatabase";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

export default async function startChat(formData: FormData) {
  const supabase = getDatabase();
  const userData = await getUser();

  const userNameOne = `${userData.profileUserData.data?.[0].username}`;
  const userIdOne = `${userData.profileUserData.data?.[0].id}`;
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
