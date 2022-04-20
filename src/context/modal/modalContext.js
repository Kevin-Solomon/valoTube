import { createContext, useContext, useState } from 'react';

const ModalContext = createContext(false);

const ModalProvider = ({ children }) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  return (
    <ModalContext.Provider value={{ modalDisplay, setModalDisplay }}>
      {children}
    </ModalContext.Provider>
  );
};
const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
