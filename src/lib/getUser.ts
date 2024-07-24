import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getUser();

  const uuid = data.user?.id;
  const profileUserData = await supabase
    .from("profiles")
    .select("username")
    .eq("uuid", uuid);

  return { data, profileUserData };
}
