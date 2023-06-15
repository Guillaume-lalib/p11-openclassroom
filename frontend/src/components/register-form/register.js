import React, { useState, useRef } from 'react';
import Modal from './ModalRegister';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { setAddUserData } from '../../features/addUserSlice';

const Register = () => {
  const [show, setShow] = useState(false);
  const form = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userName: e.target[0].value,
      email: e.target[1].value,
      firstName: e.target[2].value,
      lastName: e.target[3].value,
      password: e.target[4].value,
    };
    console.log(data);
    Axios.post('http://localhost:3001/api/v1/user/signup', data).then(() => {
      dispatch(setAddUserData(data));
    });
    setShow(true);
  };
  return (
    <section className="main-login bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Register</h1>
        <form ref={form} onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="user-name">User name</label>
            <input
              type="text"
              placeholder="User name"
              id="user-name"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="Email">Email</label>
            <input type="text" placeholder="Email" id="Email" required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="first-name">First name</label>
            <input
              type="text"
              placeholder="First name"
              id="first-name"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="last-name">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              id="last-name"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="paswword">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="paswword"
              required
            />
          </div>
          <button type="submit" className="sign-in-button register">
            Register
          </button>
        </form>
      </div>
      <Modal className="modal-register" show={show} setShow={setShow} />
    </section>
  );
};

export default Register;
