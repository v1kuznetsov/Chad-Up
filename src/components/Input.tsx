import { cn } from "@/utils/cn";

export default function Input({
  id,
  name,
  className,
  type,
  placeholder,
  maxLength,
  required,
}: {
  id?: string;
  name?: string;
  className?: string;
  type: string;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
}) {
  return (
    <input
      id={id}
      name={name}
      className={cn(
        "w-full rounded-[0.75rem] bg-[#eeeeee] px-4 py-1 text-center text-black placeholder:text-[#777]",
        className,
      )}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      required={required}
    />
  );
}
