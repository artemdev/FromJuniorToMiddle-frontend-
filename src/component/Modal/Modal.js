import { createPortal } from 'react-dom';
import './Modal.scss';

const Modal = ({ children }) => {
  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <div className="modal__backdrop">
      <div className="modal__content">{children}</div>
    </div>,
    modalRoot,
  );
};

export default Modal;
