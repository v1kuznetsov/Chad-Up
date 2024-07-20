import Input from "@/components/Input";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex w-[15vw] flex-col items-center justify-center rounded-[0.75rem] border-2 border-black p-[2%]">
      <span>Email address</span>
      <Input type="text" placeholder="you@example.com"></Input>
      <span>Password</span>
      <Input type="password" placeholder="********"></Input>
      <Link
        className="flex w-full items-center justify-center rounded-[0.75rem] border-2 border-black bg-[#ff9999] px-2 py-1 active:bg-[#c97777]"
        href={"/cabinet"}
      >
        Sign up
      </Link>
    </main>
  );
}
