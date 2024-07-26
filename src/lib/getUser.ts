import { getDatabase } from "./getDatabase";

export async function getUser() {
  const supabase = getDatabase();

  const { data } = await supabase.auth.getUser();

  const uuid = data.user?.id;

  const profileUserData = await supabase
    .from("profiles")
    .select("id, username")
    .eq("uuid", uuid);

  return { data, profileUserData };
}
