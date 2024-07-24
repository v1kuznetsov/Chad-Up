import { getUser } from "@/lib/getUser";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const userData = await getUser();

  if (userData.data.user === null) {
    redirect("/signup");
  } else {
    if (userData.data.user.user_metadata.email_verified === false) {
      redirect("/waitAuth");
    }

    if (userData.profileUserData.data?.[0] === undefined) {
      await supabase.from("profiles").insert({ uuid: userData.data.user?.id });
    }
    redirect("/cabinet");
  }
}
