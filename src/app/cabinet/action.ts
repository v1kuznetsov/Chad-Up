"use server";

import getDatabase from "@/lib/getDatabase";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

export default async function startChat(formData: FormData) {
  const supabase = getDatabase();
  const userData = await getUser();

  const username = formData.get("username") as string;

  const { error } = await supabase.from("chats").insert([
    {
      name: `${userData.profileUserData.data?.[0].username} with ${username}`,
      users: [userData.profileUserData.data?.[0].username, username],
    },
  ]);
  if (error) {
    console.log(error);
    redirect(`/cabinet?${error.code}`);
  }
  redirect(
    `/chat/${userData.profileUserData.data?.[0].username} with ${username}`,
  );
}
