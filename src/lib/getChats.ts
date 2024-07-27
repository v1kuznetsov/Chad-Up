import { redirect } from "next/navigation";
import { getDatabase } from "./getDatabase";
import { getUser } from "./getUser";

export async function getChats() {
  const supabase = getDatabase();
  const userData = await getUser();

  if (userData.profile === undefined) {
    redirect("/signup");
  }

  const chatIdsData = await supabase
    .from("chat_members")
    .select("chat_id")
    .eq("user_id", [`${userData.profile.id}`]);

  if (chatIdsData.data?.[0] === undefined) {
    return [];
  }

  const chatIds = chatIdsData.data.map((chat) => chat.chat_id);

  const chatNames = await supabase
    .from("chats")
    .select("name")
    .in("id", [chatIds]);

  return chatNames.data;
}
