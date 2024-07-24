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

  if (data.user === null) {
    redirect("/signup");
  } else {
    if (userProfile.data?.[0] == null) {
      await supabase.from("profiles").insert({ uuid: data.user?.id });
    }
    redirect(`/cabinet?${userProfile.data?.[0].username}`);
  }
}
