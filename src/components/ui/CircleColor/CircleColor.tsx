import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorCode: string;
}

const CircleColor = ({ colorCode, ...rest }: IProps) => {
  return (
    <button
      className={`w-5 h-5 rounded-full border`}
      style={{ backgroundColor: colorCode }}
      type="button"
      {...rest}
    ></button>
  );
};

export default CircleColor;
