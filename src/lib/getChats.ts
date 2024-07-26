import { redirect } from "next/navigation";
import { getDatabase } from "./getDatabase";
import { getUser } from "./getUser";

export async function getChats() {
  const supabase = getDatabase();
  const userData = await getUser();

  if (userData.profileUserData.data?.[0] === undefined) {
    redirect("/signup");
  }

  const chats_id = await supabase
    .from("chat_members")
    .select("chat_id")
    .eq("user_id", [`${userData.profileUserData.data?.[0].id}`]);

  if (chats_id.data?.[0] === undefined) {
    return { data: [] };
  }

  const chatNames = await supabase
    .from("chats")
    .select("name")
    .eq("id", chats_id.data?.[0].chat_id);

  return chatNames;
}