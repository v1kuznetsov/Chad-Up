type Props = {
  id?: string;
  name?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
};

export function TextArea({ className, ...props }: Props) {
  return (
    <textarea
      className="w-full resize-none rounded-[0.75rem] border-2 border-black bg-[#a0d0b3] px-4 py-1 text-start text-black placeholder:text-[#777]"
      {...props}
    />
  );
}
