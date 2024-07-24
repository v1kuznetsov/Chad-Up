import Input from "@/components/Input";

import { signup, login } from "./actions";

export default async function Page() {
  return (
    <main className="flex min-w-[25%] flex-col items-center justify-center rounded-[0.75rem] border-2 border-black py-[1rem]">
      <form className="flex w-[80%] flex-col items-center justify-center space-y-4">
        <label htmlFor="email">Email address</label>
        <Input
          className="text-center"
          id="email"
          name="email"
          type="email"
          placeholder="email@example.com"
          required
        ></Input>
        <label htmlFor="password">Password</label>
        <Input
          className="text-center"
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
        ></Input>
        <div className="flex flex-col items-center justify-center space-y-4">
          <button
            className="rounded-[0.75rem] border-2 border-black bg-[#d4d4d4] px-4 py-1 active:bg-[#999999]"
            formAction={login}
          >
            Log in
          </button>
          <button
            className="rounded-[0.75rem] border-2 border-black bg-[#ff9999] px-4 py-1 active:bg-[#ff8989]"
            formAction={signup}
          >
            Sign up
          </button>
        </div>
      </form>
    </main>
  );
}
