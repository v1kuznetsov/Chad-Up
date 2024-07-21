import Input from "@/components/Input";
import Link from "next/link";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { signup, login } from "./actions";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  return (
    <main className="flex w-[15vw] flex-col items-center justify-center rounded-[0.75rem] border-2 border-black p-[2%]">
      <form className="flex flex-col items-center justify-center space-y-4">
        <label htmlFor="email">Email address</label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        ></Input>
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          required
        ></Input>
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </main>
  );
}
