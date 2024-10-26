import { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

const InputField = ({ ...rest }: IProps) => {
  return (
    <input
      {...rest}
      className="border-2 outline-none p-1.5 rounded-md w-full mb-3 shadow-md focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300"
    />
  );
};

export default InputField;
