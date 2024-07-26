import Input from "@/components/Input";

import { signup, login } from "./actions";

export default async function Page() {
  return (
    <form className="flex h-screen w-full flex-col items-center justify-center space-y-6">
      <div className="flex flex-col items-center justify-center space-y-2">
        <label htmlFor="email">Email address</label>
        <Input
          className="w-[14rem]"
          id="email"
          name="email"
          type="email"
          placeholder="email@example.com"
          required
        ></Input>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2">
        <label htmlFor="password">Password</label>
        <Input
          className="w-[14rem]"
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
        ></Input>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <button
          className="rounded-[0.75rem] border-2 border-white bg-[#63D0B3] px-4 py-1 hover:underline active:bg-[#3a806d] active:text-black"
          formAction={login}
        >
          Log in
        </button>
        <button
          className="rounded-[0.75rem] border-2 border-white bg-[#63D0B3] px-4 py-1 hover:underline active:bg-[#3a806d] active:text-black"
          formAction={signup}
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
