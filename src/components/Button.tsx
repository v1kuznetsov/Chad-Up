import { cn } from "@/utils/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonRef?: React.RefObject<HTMLButtonElement>;
};

export function Button({ buttonRef, className, ...props }: Props) {
  return (
    <button
      className={cn(
        "rounded-[0.75rem] border-2 border-[#80d0b3] bg-transparent px-4 py-1 text-[#80d0b3] hover:underline active:bg-[#80d0b3] active:text-[#ffffff]",
        className,
      )}
      ref={buttonRef}
      {...props}
    />
  );
}
