import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export const inputVariants = cva("w-full transition-all rounded-lg ", {
  variants: {
    variant: {
      default: "border text-left border-[#C5C6D0] hover:bg-[#f4f5f9]",
      blue: "bg-[#325bfd] text-white ",
      listBttn: "hover:bg-[#f4f5f9] my-2  ",
      delete: "hover:bg-red-500  border border-[#C5C6D0] text-left",
      none: "",
    },
    text: {
      sm: "text-md",
    },
    sizeI: {
      default: "p-3",
      sm: "py-1 px-2",
    },
  },
  defaultVariants: {
    variant: "default",
    sizeI: "default",
  },
});
interface Props
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}
export const Input = ({ className, sizeI, variant, text, ...props }: Props) => {
  return (
    <input
      className={clsx(inputVariants({ sizeI, variant, text }), className)}
      {...props}
    />
  );
};
