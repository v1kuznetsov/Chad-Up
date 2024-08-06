import Link from "next/link";
import { signout } from "./actions";
import { Button } from "./Button";
import { getUser } from "@/lib/getUser";
import { getChats } from "@/lib/getChats";
import { DropDownMenu } from "./DropDownMenu";
import { redirect } from "next/navigation";

export async function Header({ username }: { username?: string }) {
  const userData = await getUser();
  const chatNames = await getChats();
  if (userData.authUser === null || username === undefined) {
    redirect("/error");
  }
  return (
    <header className="grid w-full grid-cols-2 p-[1rem] text-[1.5rem]">
      <DropDownMenu
        buttonName="Chats"
        className="mr-auto"
        leftRight="left-[0rem]"
        translateX={2}
      >
        {chatNames?.map((item) => (
          <li className="m-[0rem] w-[100%] list-none rounded-[0.75rem] p-[1rem] hover:underline">
            <Link
              key={item.name}
              href={`/${userData.profile?.username}/${item.name}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </DropDownMenu>
      <div className="ml-auto flex items-center justify-center gap-[1rem]">
        <Link href={`/${userData.profile?.username}`}>
          <img className="size-14" src="/images/userIcon.png" />
        </Link>
        <DropDownMenu
          buttonName={username}
          className="ml-auto"
          leftRight="right-[0rem]"
          translateX={-2}
        >
          <form className="flex items-center justify-center">
            <Button formAction={signout}>Sign out</Button>
          </form>
        </DropDownMenu>
      </div>
    </header>
  );
}
