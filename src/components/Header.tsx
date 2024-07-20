import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-[100%] justify-between p-[2%]">
      <Link className="" href={"/"}>
        Log out
      </Link>
      <div className="flex items-center justify-center space-x-4">
        <img src="" alt="(" />
        <span>UserName</span>
      </div>
    </header>
  );
}
