import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { signout } from "./action";

export default async function Header() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  const email = data.user?.email;

  // const uuid = data.user?.id;
  // const UserData = await supabase
  //   .from("profiles")
  //   .select("username")
  //   .eq("user_id", uuid);
  // const username = UserData.data?.[0].username;

  return (
    <header className="flex w-[100%] justify-between p-[1rem]">
      <form>
        <button formAction={signout}>Sign out</button>
      </form>
      <div className="flex items-center justify-center space-x-2">
        <span>{email}</span>
        <img className="size-10" src="/images/userIcon.png" />
      </div>
    </header>
  );
}
