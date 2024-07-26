import Link from "next/link";
import Header from "@/components/Header";
import Input from "@/components/Input";

import { redirect } from "next/navigation";
import { getUser } from "@/lib/getUser";
import startChat from "./action";
import getChats from "@/lib/getChats";

export default async function Page({ params }: { params: { name: string } }) {
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
        <main className="flex h-[85%] w-full p-[1%]">
          <div className="flex w-[25%] flex-col items-center justify-start space-y-4 overflow-y-auto p-[1%] text-[1rem]">
            {chatNames.data?.map((item) => (
              <Link
                className="hover:underline"
                key={item.name}
                href={`/chat/${item.name}`}
              >
                "{item.name}"
              </Link>
            ))}
          </div>
          <form
            action={startChat}
            className="flex grow flex-col items-center justify-center space-y-4 p-[1%]"
          >
            <button className="text-center">Chat with</button>
            <Input
              className="w-[8rem]"
              id="username"
              name="username"
              type="text"
              placeholder="@username"
              maxLength={10}
              required
            ></Input>
          </form>
        </main>
      </>
    );
  }
}
