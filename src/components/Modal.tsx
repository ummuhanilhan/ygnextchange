import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  heading: string;
  children: ReactNode;
}

const Modal = ({
  open,
  handleClose,
  handleSubmit,
  heading,
  children,
}: Props) => {
  return (
    <>
      {open && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-[rgba(0,0,0,0.75)] outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-2 px-4 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-lg font-medium text-[#1273b9] pt-2">
                    {heading}
                  </h3>
                  <div className="mt-1" onClick={handleClose}>
                    <img
                      src="/assets/feedback/icon-x-circle.svg"
                      alt="close"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
                <div className="border border-blue-500" />
                <div className="relative p-6 flex-auto bg-[#f6f6fb]">
                  {children}

                  <div className="flex justify-center mb-2">
                    <button
                      className="p-3 ml-2 rounded-lg text-white flex-center mt-3 w-100 md:w-60 bg-yg-orange"
                      onClick={handleClose}
                    >
                      Vazgeç
                    </button>
                    <button
                      className="p-3 ml-2 rounded-lg text-white flex-center mt-3 w-100 md:w-60 bg-yg-blue"
                      onClick={handleSubmit}
                    >
                      Mesajı Gönder
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default Modal;
