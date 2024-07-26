import { signup, login } from "./actions";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default async function Page() {
  return (
    <form className="flex h-screen w-full flex-col items-center justify-center gap-[1.5rem]">
      <div className="flex flex-col items-center justify-center gap-[0.5rem]">
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
      <div className="flex flex-col items-center justify-center gap-[0.5rem]">
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
      <div className="flex flex-col items-center justify-center gap-[1rem]">
        <Button formAction={login}>Log in</Button>
        <Button formAction={signup}>Sign up</Button>
      </div>
    </form>
  );
}
