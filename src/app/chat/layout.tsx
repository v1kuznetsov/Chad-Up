import Link from "next/link";
import { Header } from "@/components/Header";

import { redirect } from "next/navigation";
import { getUser } from "@/lib/getUser";
import { getChats } from "@/lib/getChats";

export default async function Page({ children }: React.PropsWithChildren) {
  const userData = await getUser();

  const chatNames = await getChats();

  const user = userData.profileUserData.data?.[0];

  if (!userData.data.user || !user) {
    redirect("/signup");
  }
  return (
    <>
      <Header username={user.username}></Header>
      <main className="flex h-[85%] w-full p-[1rem]">
        <div className="flex w-[20rem] flex-col items-start justify-start gap-[1rem] overflow-y-auto rounded-[0.75rem] bg-[#333] p-[1rem] text-[1rem]">
          {chatNames.data?.map((item) => (
            <Link
              className="w-full rounded-[0.75rem] p-[0.5rem] hover:bg-[#222]"
              key={item.name}
              href={`/chat/${item.name}`}
            >
              "{item.name}"
            </Link>
          ))}
        </div>
        {children}
      </main>
    </>
  );
}
