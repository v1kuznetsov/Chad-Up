import Link from "next/link";
import Header from "@/components/Header";
import Input from "@/components/Input";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();

  const uuid = data.user?.id;
  const UserData = await supabase
    .from("profiles")
    .select("username")
    .eq("uuid", uuid);

  if (data.user === null) {
    redirect("/signup");
  } else {
    return (
      <>
        <Header username={UserData.data?.[0].username}></Header>
        <main className="flex w-[30vw] grow flex-col justify-center p-[3rem]">
          <div className="flex flex-col items-center justify-center text-[3rem]">
            <Input
              className="text-center"
              type="text"
              placeholder="@username"
              maxLength={10}
            ></Input>
            <Link className="text-[3rem]" href={""}>
              Start Chatting
            </Link>
            <div className="flex flex-col items-center justify-center text-[1.5rem]">
              <span>or</span>
              <Link href={"/chats"}>Open my chats</Link>
            </div>
          </div>
        </main>
      </>
    );
  }
}
