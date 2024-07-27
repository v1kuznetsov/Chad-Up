import { getDatabase } from "./getDatabase";

export async function getMessages(chatName: string) {
  const supabase = getDatabase();
  const chatId = await supabase.from("chats").select("id").eq("name", chatName);
  const messages = await supabase
    .from("messages")
    .select("content, user_id")
    .eq("chat_id", chatId.data?.[0].id);

  return { messages: messages.data, chatId: chatId.data?.[0].id };
}
