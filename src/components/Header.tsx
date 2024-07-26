import Link from "next/link";
import { signout } from "./actions";
import { Button } from "./Button";

export async function Header({ username }: { username?: string }) {
  return (
    <header className="flex w-full justify-between p-[1rem] text-[1.5rem]">
      <form className="flex items-center justify-center">
        <Button formAction={signout}>Sign out</Button>
      </form>
      <div className="flex items-center justify-center gap-[1rem]">
        <p>{username}</p>
        <Link href={"/cabinet"}>
          <img className="size-14" src="/images/userIcon.png" />
        </Link>
      </div>
    </header>
  );
}
