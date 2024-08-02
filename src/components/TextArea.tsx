import { Button } from "./Button";

type Props = {
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
};

export function TextArea({ className, ...props }: Props) {
  return (
    <>
      <textarea
        className="w-full resize-none rounded-[0.75rem] border-2 border-[#80d0b3] px-4 py-1 text-[#000000] placeholder:text-[#777777]"
        {...props}
      />
      <Button className="absolute right-[2rem] border-none p-0 active:bg-transparent">
        <img className="size-8" src="/images/sendIcon.png" />
      </Button>
    </>
  );
}
