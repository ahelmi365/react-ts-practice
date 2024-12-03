interface IProps {
  text: string;
}

const ErrorMessage = ({ text }: IProps) => {
  return text ? <p className="text-red-900 text-sm">{text}</p> : null;
};

export default ErrorMessage;
