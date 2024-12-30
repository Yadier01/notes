import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export const buttonVariants = cva("w-full transition-all rounded-lg ", {
  variants: {
    variant: {
      default: "border text-left border-[#C5C6D0] hover:bg-[#f4f5f9]",
      blue: "bg-[#325bfd] text-white ",
      listBttn: "hover:bg-[#f4f5f9] my-2  ",
      delete: "hover:bg-red-500 bg-red-500     text-left",
      none: "",
    },
    text: {
      sm: "text-md",
    },
    size: {
      default: "p-3",
      sm: "py-1 px-2",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
const Button = ({ className, size, variant, text, ...props }: Props) => {
  return (
    <button
      className={clsx(buttonVariants({ size, variant, text }), className)}
      {...props}
    />
  );
};

export default Button;
