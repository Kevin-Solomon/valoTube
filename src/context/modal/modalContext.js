import { createContext, useContext, useReducer } from 'react';
import { modalReducer, initialModalState } from '../../reducer';
const ModalContext = createContext(false);

const ModalProvider = ({ children }) => {
  const [modalContent, modalContentDispatch] = useReducer(
    modalReducer,
    initialModalState
  );

  return (
    <ModalContext.Provider value={{ modalContent, modalContentDispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
const useModal = () => useContext(ModalContext);

export { useModal, ModalProvider };
