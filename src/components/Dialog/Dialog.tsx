import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";
import "./index.css";

interface IProps {
  title: string;
  dialogRef: React.RefObject<HTMLDialogElement>;
  children: ReactNode;
}

const logAfterClose = () => {
  console.log("CLOSED");
};

const Dialog = ({ title, children, dialogRef }: IProps) => {
  // const dialogRef = useRef<HTMLDialogElement>(null);
  const handleCloseDialog = () => {
    dialogRef.current?.close();
  };

  const handleClickOutsideDialog = (event: Event) => {
    if (event.target === dialogRef.current) {
      dialogRef?.current?.close();
    }
  };
  const handleFterCloseDialog = () => {
    dialogRef.current?.addEventListener("close", logAfterClose);
    dialogRef.current?.addEventListener("click", (event) =>
      handleClickOutsideDialog(event)
    );

    return () => {
      console.log("will cal remove event listtner");
      dialogRef.current?.removeEventListener("close", logAfterClose);
    };
  };

  useEffect(() => {
    handleFterCloseDialog();
  }, []);
  return (
    <dialog
      ref={dialogRef}
      open={false}
      className="w-full md:w-[60vw]  h-fit mt-12 rounded-md outline-none"
    >
      <div className="dialog-container p-2">
        <div className="head flex justify-between">
          <h1 className="ps-4 text-xl">{title}</h1>
          <X
            onClick={() => handleCloseDialog()}
            className="cursor-pointer hover:text-red-500"
          />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </dialog>
  );
};

export default Dialog;
