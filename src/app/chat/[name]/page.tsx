import Header from "@/components/Header";
import Input from "@/components/Input";
import getDatabase from "@/lib/getDatabase";
import { getUser } from "@/lib/getUser";
import sendMessage from "./action";

export default async function Page({ params }: { params: { name: string } }) {
  const supabase = getDatabase();
  const userData = await getUser();

  const chatName = decodeURIComponent(params.name);
  const chatId = await supabase.from("chats").select("id").eq("name", chatName);

  const messages = await supabase
    .from("messages")
    .select("content")
    .eq("chat_id", chatId.data?.[0].id);

  return (
    <>
      <Header username={userData.profileUserData.data?.[0].username}></Header>
      <div className="w-full p-[5%] text-center">
        {messages.data?.map((item, index) => <p key={index}>{item.content}</p>)}
      </div>
      <form
        action={sendMessage}
        className="mt-auto flex w-full items-center justify-center space-x-4 p-[5%]"
      >
        <Input
          id="message"
          className="border-2 border-black"
          name="message"
          placeholder="Write a message..."
          type="text"
          required
        ></Input>
        <input
          type="hidden"
          name="url"
          value={decodeURIComponent(params.name)}
        />
        <input type="hidden" name="chat_id" value={chatId.data?.[0].id} />
        <input
          type="hidden"
          name="user_id"
          value={userData.profileUserData.data?.[0].id}
        />
        <button className="rounded-[0.75rem] border-2 border-black bg-[#d4d4d4] px-4 py-1 active:bg-[#999999]">
          Send
        </button>
      </form>
    </>
  );
}
