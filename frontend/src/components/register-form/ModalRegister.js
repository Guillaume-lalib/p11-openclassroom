import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Modal = ({ show, setShow }) => {
  const firstName = useSelector((state) => state.addUserData.data.firstName);
  const lastName = useSelector((state) => state.addUserData.data.lastName);
  const content = show && (
    <div className="bg-modal">
      <div className="modal-secces">
        <h1>Register successful</h1>
        <h2>
          Welcome <br /> {lastName} {firstName}
        </h2>
        <NavLink className="sign-in-button" to={`/login `}>
          Redirect to login page
        </NavLink>
      </div>
    </div>
  );
  return content;
};
export default Modal;
