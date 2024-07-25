import Link from "next/link";
import Header from "@/components/Header";
import Input from "@/components/Input";

import { redirect } from "next/navigation";
import { getUser } from "@/lib/getUser";
import startChat from "./action";
import getChats from "@/lib/getChats";

export default async function Page() {
  const userData = await getUser();

  const chatNames = await getChats();

  if (
    userData.data.user === null ||
    userData.profileUserData.data?.[0] === undefined
  ) {
    redirect("/signup");
  } else {
    return (
      <>
        <Header username={userData.profileUserData.data?.[0].username}></Header>
        <main className="flex w-full items-center justify-center p-[2%]">
          <div className="flex flex-col items-center justify-center space-y-3">
            {chatNames.data?.map((item) => (
              <Link key={item.name} href={`/chat/${item.name}`}>
                {item.name}
              </Link>
            ))}
          </div>
          <form className="flex items-center justify-center">
            <button
              className="text-center text-[1.5rem]"
              formAction={startChat}
            >
              Start Chatting with
            </button>
            <Input
              className="max-w-[25%] text-[1.5rem]"
              id="username"
              name="username"
              type="text"
              placeholder="@username"
              maxLength={10}
            ></Input>
          </form>
        </main>
      </>
    );
  }
}
