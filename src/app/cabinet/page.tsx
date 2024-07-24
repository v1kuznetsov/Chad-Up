import Link from "next/link";
import Header from "@/components/Header";
import Input from "@/components/Input";

import { redirect } from "next/navigation";
import { getUser } from "@/lib/getUser";
import getDatabase from "@/lib/getDatabase";

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
          <div className="flex flex-col items-center justify-center text-[2rem]">
            <Input
              className="text-center"
              type="text"
              placeholder="@username"
              maxLength={10}
            ></Input>
            <Link className="text-center text-[2rem]" href={""}>
              Start Chatting
            </Link>
            <div className="flex flex-col items-center justify-center text-center text-[1rem]">
              <span>or</span>
              <Link href={"/chats"}>Open my chats</Link>
            </div>
          </div>
        </main>
      </>
    );
  }
}
