import { ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorCode: string;
}

const CircleColor = ({ colorCode, ...rest }: IProps) => {

  return (
    <div
      className={`w-5 h-5 rounded-full border`}
      style={{ backgroundColor: colorCode }}
    ></div>
  );
};

export default CircleColor;
