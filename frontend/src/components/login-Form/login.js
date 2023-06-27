import Axios from 'axios';
import React, { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { setConnectUser } from '../../features/connectUser';
import { useDispatch } from 'react-redux';

const Login = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataUser = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    Axios.post('http://localhost:3001/api/v1/user/login', dataUser)
      .then((data) => {
        if (data.data.status === 200) {
          dispatch(setConnectUser(data.data.body.token));
          nav('/profile');
        }
      })
      .catch((error) => {
        alert('Email or password invalid');
        console.error(error);
      });
  };

  return (
    <section className="main-login bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form ref={form} onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrapper">
            <label htmlFor="Email">Email</label>
            <input placeholder="Email" type="mail" id="Email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input placeholder="Password" type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label placeholder="remember me" htmlFor="remember-me">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="sign-in-button"
            // to={`/profile/:id`}
          >
            Sign In
          </button>
          <NavLink className="signup-button" to={`/signup`}>
            New member ! Register now
          </NavLink>
        </form>
      </div>
    </section>
  );
};

export default Login;
