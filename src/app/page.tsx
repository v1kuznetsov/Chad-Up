import Link from "next/link";

export default function Page() {
  return (
    <div className="flex grow flex-col items-center justify-center space-y-8 text-[3rem]">
      <Link
        className="rounded-[0.75rem] border-2 border-black bg-[#ff9999] px-2 py-1 active:bg-[#c97777]"
        href={"/signup"}
      >
        Sign up
      </Link>
    </div>
  );
}
