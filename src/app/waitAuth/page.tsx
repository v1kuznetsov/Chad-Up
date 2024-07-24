import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  return (
    <main className="flex w-[30%] grow flex-col items-center justify-center">
      <div className="text-center text-[2rem]">
        Check your email and verificate your account
      </div>
    </main>
  );
}
