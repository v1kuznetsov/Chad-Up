import { getDatabase } from "./getDatabase";

export async function getUser() {
  const supabase = getDatabase();

  const { data } = await supabase.auth.getUser();

  const uuid = data.user?.id;

  const profile = await supabase
    .from("profiles")
    .select("id, username")
    .eq("uuid", uuid);

  return { authUser: data.user, profile: profile.data?.[0] };
}
