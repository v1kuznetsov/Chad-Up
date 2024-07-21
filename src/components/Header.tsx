import { signout } from "./action";

export default async function Header({ username }: { username: string }) {
  return (
    <header className="flex w-[100%] justify-between p-[1rem]">
      <form>
        <button formAction={signout}>Sign out</button>
      </form>
      <div className="flex items-center justify-center space-x-2">
        <span>{username}</span>
        <img className="size-10" src="/images/userIcon.png" />
      </div>
    </header>
  );
}
