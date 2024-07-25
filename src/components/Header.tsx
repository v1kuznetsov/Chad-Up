import Link from "next/link";
import { signout } from "./action";

export default async function Header({ username }: { username?: string }) {
  return (
    <header className="mb-auto flex w-[100%] justify-between p-[2%]">
      <form>
        <button formAction={signout}>Sign out</button>
      </form>
      <div className="flex items-center justify-center space-x-2">
        <span>{username}</span>
        <Link href={"/cabinet"}>
          <img className="size-10" src="/images/userIcon.png" />
        </Link>
      </div>
    </header>
  );
}
