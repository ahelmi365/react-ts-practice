import { X } from "lucide-react";
import "./index.scss";
import { ReactNode } from "react";
import { AlertType } from "../../types";

interface IProps {
  type: AlertType;
  title: string;
  message: string;
  icon: ReactNode;
}

const Alert = ({ type, title, message, icon }: IProps) => {
  return (
    <div className={`alert alert-${type}`}>
      <div className="head">
        <div className="left">
          {icon}
          <h4> {title}</h4>
        </div>
        {<X className="close" />}
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
