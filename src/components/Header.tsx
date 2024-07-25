import Link from "next/link";
import { signout } from "./action";

export default async function Header({ username }: { username?: string }) {
  return (
    <header className="mb-auto flex w-[100%] justify-between rounded-[0.75rem] border-2 border-white p-[1%]">
      <form className="flex items-center justify-center">
        <button formAction={signout}>Sign out</button>
      </form>
      <div className="flex items-center justify-center space-x-2">
        <p>{username}</p>
        <Link href={"/cabinet"}>
          <img className="size-10" src="/images/userIcon.png" />
        </Link>
      </div>
    </header>
  );
}
