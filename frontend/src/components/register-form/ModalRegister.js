import React from 'react';
import { NavLink } from 'react-router-dom';
const Modal = ({ show, setShow }) => {
  const content = show && (
    <div className="bg-modal">
      <div className="modal-secces">
        <h1>Register successful</h1>
        <NavLink className="sign-in-button" to={`/login `}>
          Redirect to login page
        </NavLink>
      </div>
    </div>
  );
  return content;
};
export default Modal;
