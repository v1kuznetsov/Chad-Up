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
  }
  // else if (params.username !== userData.profile.username) {
  //   redirect("/error/?message=Wrong username");
  // }
  return (
    <>
      <Header username={userData.profile.username}></Header>
      <main className="flex h-[85%] w-full gap-[1rem] p-[1rem]">
        {children}
      </main>
    </>
  );
}
