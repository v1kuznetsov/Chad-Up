import Link from "next/link";
import { getUser } from "@/lib/getUser";
import { getChats } from "@/lib/getChats";
import { DropDownChatsMenu } from "./DropDownChatsMenu";
import { DropDownUserMenu } from "./DropDownUserMenu";
import { redirect } from "next/navigation";

export async function Header({ username }: { username?: string }) {
  const userData = await getUser();
  const chatNames = await getChats();

  if (userData.authUser === null || username === undefined) {
    redirect("/error");
  }

  return (
    <header className="relative grid w-full grid-cols-2 p-[1rem] text-[1.5rem]">
      <DropDownChatsMenu>
        {chatNames?.map((item, index) => (
          <li className="hover:underline">
            <Link
              key={item.name + index}
              href={`/${userData.profile?.username}/${item.name}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </DropDownChatsMenu>
      <DropDownUserMenu username={username}>
        <li className="hover:underline">
          <Link href={""}>Account</Link>
        </li>
        <li className="hover:underline">
          <Link href={""}>Settings</Link>
        </li>
      </DropDownUserMenu>
    </header>
  );
}
