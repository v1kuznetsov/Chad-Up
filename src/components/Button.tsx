import { cn } from "@/utils/cn";

type Props = {
  id?: string;
  name?: string;
  className?: string;
  formAction?: (formData: FormData) => void;
} & React.PropsWithChildren;

export function Button({ className, ...props }: Props) {
  return (
    <button
      className={cn(
        "rounded-[0.75rem] bg-[#80d0b3] px-4 py-1 hover:underline active:bg-[#63d0b3] active:text-black",
        className,
      )}
      {...props}
    />
  );
}
