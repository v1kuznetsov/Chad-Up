import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export function getDatabase() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  return supabase;
}
