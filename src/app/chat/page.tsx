import { Input } from "@/components/Input";
import { startChat } from "./actions";

export default function Page() {
  return (
    <form
      action={startChat}
      className="mx-[10rem] flex grow flex-col items-center justify-center rounded-[0.75rem] bg-[#333] p-[1rem] text-[2rem]"
    >
      <button className="p-[1rem] text-center">Chat with</button>
      <Input
        className="w-[14rem]"
        id="username"
        name="username"
        type="text"
        placeholder="@username"
        maxLength={10}
        required
      />
    </form>
  );
}
