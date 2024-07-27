import { cn } from "@/utils/cn";

type Props = {
  id?: string;
  name?: string;
  className?: string;
  type: string;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
};

export function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "w-full rounded-[0.75rem] border-2 border-[#80d0b3] px-4 py-1 text-center text-[#000000] placeholder:text-[#777777]",
        className,
      )}
      {...props}
    />
  );
}
