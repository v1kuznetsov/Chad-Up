import Link from "next/link";
import { signout } from "./actions";
import { Button } from "./Button";
import { getUser } from "@/lib/getUser";

export async function Header({ username }: { username?: string }) {
  const userData = await getUser();
  return (
    <header className="flex w-full justify-between p-[1rem] text-[1.5rem]">
      <form className="flex items-center justify-center">
        <Button formAction={signout}>Sign out</Button>
      </form>
      <div className="flex items-center justify-center gap-[1rem]">
        <p>{username}</p>
        <Link href={`/${userData.profile?.username}`}>
          <img className="size-14" src="/images/userIcon.png" />
        </Link>
      </div>
    </header>
  );
}
