import { signup, login } from "./actions";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default async function Page() {
  return (
    <form className="flex h-screen w-[full] flex-col items-center justify-center gap-[1.5rem]">
      <p className="text-[3rem]">Log in</p>
      <div className="flex w-[20rem] flex-col gap-[0.5rem]">
        <label htmlFor="email">Email address</label>
        <Input
          className="text-start"
          id="email"
          name="email"
          type="email"
          placeholder="email@example.com"
          required
        ></Input>
      </div>
      <div className="flex w-[20rem] flex-col gap-[0.5rem]">
        <label htmlFor="password">Password</label>
        <Input
          className="text-start"
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
        ></Input>
      </div>
      <div className="flex w-[20rem] flex-col gap-[1rem]">
        <Button formAction={login}>Log in</Button>
      </div>
      <div className="flex w-[20rem] items-center justify-between">
        <p>Haven`t account?</p>
        <Button formAction={signup}>Sign up</Button>
      </div>
    </form>
  );
}
