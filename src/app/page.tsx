import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data } = await supabase.auth.getUser();

  const userProfile = await supabase
    .from("profiles")
    .select("username")
    .eq("uuid", `${data.user?.id}`);
  const username = userProfile.data?.[0];

  if (data.user === null) {
    redirect("/signup");
  } else {
    if (username == null) {
      const { data: newProfile } = await supabase
        .from("profiles")
        .insert({ uuid: data.user?.id });
    }
    redirect("/cabinet");
  }
}
