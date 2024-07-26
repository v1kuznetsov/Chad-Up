import { getDatabase } from "@/lib/getDatabase";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = getDatabase();

  const userData = await getUser();

  if (userData.authUser === null) {
    redirect("/signup");
  } else {
    if (userData.profile === undefined) {
      await supabase.from("profiles").insert({ uuid: userData.authUser.id });
    }
    redirect(`/${userData.profile?.username}`);
  }
}
