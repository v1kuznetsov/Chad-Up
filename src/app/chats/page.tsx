import Header from "@/components/Header";
import { getUser } from "@/lib/getUser";

export default async function Page() {
  const userData = await getUser();
  return (
    <>
      <Header username={userData.profileUserData.data?.[0].username}></Header>
      <main className="flex w-[30%] grow flex-col items-center justify-center">
        <div className="text-center text-[2rem]"></div>
      </main>
    </>
  );
}
