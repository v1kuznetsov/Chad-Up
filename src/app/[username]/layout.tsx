import Link from "next/link";
import { Header } from "@/components/Header";

import { redirect } from "next/navigation";
import { getUser } from "@/lib/getUser";
import { getChats } from "@/lib/getChats";

type Props = {
  params: { username: string };
} & React.PropsWithChildren;

export default async function Page({ children, params }: Props) {
  const userData = await getUser();

  const chatNames = await getChats();

  if (!userData.authUser || !userData.profile) {
    redirect("/signup");
  } else if (params.username !== userData.profile.username) {
    redirect("/error/?message=Wrong username");
  }
  return (
    <>
      <Header username={userData.profile.username}></Header>
      <main className="flex h-[85%] w-full p-[1rem]">
        <div className="flex w-[20rem] flex-col items-start justify-start gap-[1rem] overflow-y-auto rounded-[0.75rem] bg-[#333] p-[1rem] text-[1rem]">
          <div className="flex w-[100%] flex-col gap-[1rem] overflow-y-auto rounded-[0.75rem] bg-[#333] text-[1rem]">
            {chatNames?.map((item) => (
              <Link
                className="w-full rounded-[0.75rem] p-[0.5rem] hover:bg-[#222]"
                key={item.name}
                href={`/${userData.profile?.username}/${item.name}`}
              >
                "{item.name}"
              </Link>
            ))}
          </div>
          <Link
            className="mt-auto w-[100%] rounded-[0.75rem] bg-[#80d0b3] px-4 py-1 text-center hover:underline active:bg-[#63d0b3] active:text-black"
            href={`/${userData.profile.username}`}
          >
            Close chat
          </Link>
        </div>
        {children}
      </main>
    </>
  );
}
