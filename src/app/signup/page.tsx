import Input from "@/components/Input";

import { signup, login } from "./actions";

export default async function Page() {
  return (
    <main className="flex w-[15vw] flex-col items-center justify-center rounded-[0.75rem] border-2 border-black p-[2%]">
      <form className="flex flex-col items-center justify-center space-y-4">
        {/* <label htmlFor="display_name">Username</label>
        <Input
          className="text-center"
          id="display_name"
          name="display_name"
          type="text"
          placeholder="MyUserName"
          required
        ></Input> */}
        <label htmlFor="email">Email address</label>
        <Input
          className="text-center"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        ></Input>
        <label htmlFor="password">Password</label>
        <Input
          className="text-center"
          id="password"
          name="password"
          type="password"
          placeholder="********"
          required
        ></Input>
        <div className="flex flex-col items-center justify-center space-y-4">
          <button formAction={login}>Log in</button>
          <button formAction={signup}>Sign up</button>
        </div>
      </form>
    </main>
  );
}
