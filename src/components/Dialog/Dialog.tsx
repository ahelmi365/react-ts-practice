import { X } from "lucide-react";
import "./index.css";
import { ReactNode, useEffect } from "react";

interface IProps {
  title: string;
  children: ReactNode;
}

const logAfterClose = () => {
  console.log("CLOSED");
};

const handleClickOutsideDialog = (event: Event, dialog: HTMLDialogElement) => {
  if (event.target === dialog) {
    dialog.close();
  }
};
const handleFterCloseDialog = () => {
  const dialog = document.querySelector("dialog");
  dialog?.addEventListener("close", logAfterClose);
  dialog?.addEventListener("click", (event) =>
    handleClickOutsideDialog(event, dialog)
  );

  return () => {
    console.log("will cal remove event listtner");
    dialog?.removeEventListener("close", logAfterClose);
  };
};

const Dialog = ({ title, children }: IProps) => {
  const handleCloseDialog = () => {
    const dialog = document.querySelector("dialog");
    dialog?.close();
  };

  useEffect(() => {
    handleFterCloseDialog();
  }, []);
  return (
    <dialog
      open={false}
      className="w-full md:w-[60vw]  h-fit mt-12 rounded-md outline-none"
    >
      <div className="dialog-container p-2">
        <div className="head flex justify-between">
          <h1 className="ps-4 text-xl">{title}</h1>
          <X onClick={() => handleCloseDialog()} className="cursor-pointer hover:text-red-500" />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </dialog>
  );
};

export default Dialog;
