import { cn } from "@/utils/cn";

export default function Input({
  className,
  type,
  placeholder,
  maxLength,
}: {
  className?: string;
  type: string;
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <input
      className={cn(
        "m-[1rem] w-full rounded-[0.75rem] bg-[#eee] px-4 py-1",
        className,
      )}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
}
