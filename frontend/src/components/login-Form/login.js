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
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <NavLink className="sign-in-button" to={`/profile/:id`}>
            Sign In
          </NavLink>
        </form>
      </div>
    </section>
  );
};

export default login;
