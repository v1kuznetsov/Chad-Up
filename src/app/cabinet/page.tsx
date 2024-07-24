import Link from "next/link";
import Header from "@/components/Header";
import Input from "@/components/Input";

import { redirect } from "next/navigation";
import { getUser } from "@/lib/getUser";
import getDatabase from "@/lib/getDatabase";
import startChat from "./action";

export default async function Page() {
  const supabase = getDatabase();
  const userData = await getUser();

  const chats = await supabase
    .from("chats")
    .select("name")
    .contains("users", [`${userData.profileUserData.data?.[0].username}`]);

  if (
    userData.data.user === null ||
    userData.profileUserData.data?.[0] === undefined
  ) {
    redirect("/signup");
  } else {
    return (
      <>
        <Header username={userData.profileUserData.data?.[0].username}></Header>
        <main className="flex grow flex-col justify-center p-[2%]">
          <div className="flex items-center justify-center">
            <div className="">
              {chats.data?.map((item) => (
                <Link key={item.name} href={`/chat/${item.name}`}>
                  {item.name}
                </Link>
              ))}
            </div>
            <form className="flex items-center justify-center">
              <button
                className="text-center text-[2rem]"
                formAction={startChat}
              >
                Start Chatting with
              </button>
              <Input
                className="w-[25%]"
                id="username"
                name="username"
                type="text"
                placeholder="@username"
                maxLength={10}
              ></Input>
            </form>
          </div>
        </main>
      </>
    );
  }
}
