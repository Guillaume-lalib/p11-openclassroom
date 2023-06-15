import React from 'react';
import { NavLink } from 'react-router-dom';

const login = () => {
  return (
    <section className="main-login bg-dark">
      <div className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
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
          <NavLink className="sign-in-button" to={`/profile/:id`}>
            Sign In
          </NavLink>
        </form>
        <NavLink className="sign-in-button" to={`/signup`}>
          New member ! Register now
        </NavLink>
      </div>
    </section>
  );
};

export default login;
