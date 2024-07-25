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
    .select("message, user")
    .eq("chat", chatId.data?.[0].id);

  console.log(messages);

  return (
    <>
      <Header username={userData.profileUserData.data?.[0].username}></Header>
      <main className="flex w-full grow flex-col items-center justify-center">
        <div className="w-full p-[5%] text-center">
          {messages.data?.map((item, index) => (
            <p key={index}>
              {item.message} "{item.user}"
            </p>
          ))}
        </div>
        <form className="mt-auto flex w-full items-center justify-center space-x-4 p-[5%]">
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
          <button
            className="rounded-[0.75rem] border-2 border-black bg-[#d4d4d4] px-4 py-1 active:bg-[#999999]"
            formAction={sendMessage}
          >
            Send
          </button>
        </form>
      </main>
    </>
  );
}
