import React, { useEffect } from 'react';
import { useModal } from '../../context/modal/modalContext';

import './Modal.css';
function Modal() {
  const { modalContentDispatch } = useModal();
  return (
    <>
      <div
        onClick={() => modalContentDispatch({ type: 'CLOSE_MODAL' })}
        style={{ height: document.body.scrollHeight }}
        className="modal-wrapper"
      ></div>
      <div className="modal-content">Modal Content</div>
    </>
  );
}

export default Modal;
