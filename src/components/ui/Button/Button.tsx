import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}
const Button = ({ children, className, width = "w-fit", ...rest }: IProps) => {
  return (
    <button
      className={`rounded-md outline-none border-2 flex-1 ${width} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
