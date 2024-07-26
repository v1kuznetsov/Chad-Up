import { getDatabase } from "@/lib/getDatabase";
import { getUser } from "@/lib/getUser";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = getDatabase();

  const userData = await getUser();

  if (userData.data.user === null) {
    redirect("/signup");
  } else {
    if (userData.profileUserData.data?.[0] === undefined) {
      await supabase.from("profiles").insert({ uuid: userData.data.user?.id });
    }
    redirect(`/cabinet/${userData.profileUserData.data?.[0].username}`);
  }
}
