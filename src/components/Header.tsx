import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { signout } from "./action";

export default async function Header() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.from("users").select("username");
  const username = data?.[0]?.username;

  return (
    <header className="flex w-[100%] justify-between p-[1rem]">
      <form>
        <button formAction={signout}>Sign out</button>
      </form>
      <div className="flex items-center justify-center space-x-2">
        <img className="size-10" src="/images/userIcon.png" />
        <span>{username}</span>
      </div>
    </header>
  );
}
