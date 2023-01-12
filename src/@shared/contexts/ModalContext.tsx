import {createContext, FC, ReactNode, useContext, useState,useMemo,} from "react";
interface ContextType {
  show: boolean;
  setShow: (show: boolean) => void;
}

const ModalContext = createContext<ContextType>({
  show: false,
  setShow: () => {},
});

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [show, setShow] = useState(false);

  const contextValue: ContextType = useMemo(() => {
    return {
      show: show,
      setShow: setShow,
    };
  }, [show]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
