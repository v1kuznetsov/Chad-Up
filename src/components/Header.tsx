import Link from "next/link";
import { signout } from "./action";

export default async function Header({ username }: { username?: string }) {
  return (
    <header className="flex w-full justify-between p-[1%] text-[1.5rem]">
      <form className="flex items-center justify-center">
        <button
          className="rounded-[0.75rem] border-2 border-white bg-[#63D0B3] px-4 py-1 hover:underline active:bg-[#3a806d] active:text-black"
          formAction={signout}
        >
          Sign out
        </button>
      </form>
      <div className="flex items-center justify-center space-x-2">
        <p>{username}</p>
        <Link href={"/cabinet"}>
          <img className="size-14" src="/images/userIcon.png" />
        </Link>
      </div>
    </header>
  );
}
