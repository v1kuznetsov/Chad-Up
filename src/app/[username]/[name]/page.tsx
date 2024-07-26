import { Input } from "@/components/Input";
import { getDatabase } from "@/lib/getDatabase";
import { getUser } from "@/lib/getUser";
import { sendMessage } from "../actions";
import { Button } from "@/components/Button";

export default async function Page({ params }: { params: { name: string } }) {
  const supabase = getDatabase();
  const userData = await getUser();

  const chatName = decodeURIComponent(params.name);
  const chatId = await supabase.from("chats").select("id").eq("name", chatName);

  const messages = await supabase
    .from("messages")
    .select("content")
    .eq("chat_id", chatId.data?.[0].id);

  // await new Promise((resolve) => {
  //   setTimeout(resolve, 50000);
  // });

  return (
    <div className="flex grow flex-col items-center justify-end">
      <div className="w-full p-[1rem] text-center">
        {messages.data?.map((item, index) => <p key={index}>{item.content}</p>)}
      </div>
      <form
        action={sendMessage}
        className="flex w-full items-center justify-center gap-[1rem] px-[1rem]"
      >
        <Input
          id="message"
          className="border-2 border-black"
          name="message"
          placeholder="Write a message..."
          type="text"
          required
        />
        <input
          type="hidden"
          name="url"
          value={decodeURIComponent(params.name)}
        />
        <input type="hidden" name="chat_id" value={chatId.data?.[0].id} />
        <input type="hidden" name="user_id" value={userData.profile?.id} />
        <Button>Send</Button>
      </form>
    </div>
  );
}
