import Header from "@/components/Header";
import Input from "@/components/Input";
import getDatabase from "@/lib/getDatabase";
import { getUser } from "@/lib/getUser";
import Link from "next/link";
import sendMessage from "./action";
import { getURL } from "next/dist/shared/lib/utils";

export default async function Page({ params }: { params: { name: string } }) {
  const supabase = getDatabase();
  const userData = await getUser();

  const messages = await supabase.from("chats").select("messages");
  return (
    <>
      <Header username={userData.profileUserData.data?.[0].username}></Header>
      <main className="flex w-[30%] grow flex-col items-center justify-center">
        <div className="text-center text-[2rem]">
          {messages.data?.map((item, index) => (
            <p key={index}>{item.messages}</p>
          ))}
        </div>
        <form>
          <Input id="message" name="message" type="text" required></Input>
          <input
            type="hidden"
            name="url"
            value={decodeURIComponent(params.name)}
          />
          <button formAction={sendMessage}>Send</button>
        </form>
      </main>
    </>
  );
}
