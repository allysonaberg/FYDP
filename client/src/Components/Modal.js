import React from 'react';

//Design & functionality inspired by https://github.com/akmamun/react-modal-overlay
const Modal = (props) => (
  <div className="modal" style={{ display: props.show ? 'block' : 'none' }}>
    <div className="modalOverlay" onClick={props.close} />
    <div className="modalContent">
      <span className="modalClose" onClick={props.close}>
        &times;
      </span>
      {props.children}
    </div>
  </div>
)

export default Modal
