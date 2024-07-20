import Link from "next/link";
import Header from "@/components/Header";
import Input from "@/components/Input";

export default function Page() {
  return (
    <>
      <Header></Header>
      <main className="flex w-[30vw] grow flex-col justify-center p-[2%]">
        <div className="flex flex-col items-center justify-center text-[3rem]">
          <Input
            className="text-center"
            type="text"
            placeholder="@username"
            maxLength={10}
          ></Input>
          <Link className="text-[3rem]" href={""}>
            Start Chatting
          </Link>
          <div className="flex flex-col items-center justify-center text-[1.5rem]">
            <span>or</span>
            <Link href={"/chats"}>Open my chats</Link>
          </div>
        </div>
      </main>
    </>
  );
}
