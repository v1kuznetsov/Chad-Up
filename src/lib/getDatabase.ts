import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default function getDatabase() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  return supabase;
}
