import React, { useEffect, useState } from 'react';
import Logo from '../../image/argentBankLogo.png';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const userToken = localStorage.getItem('token');
  const [logout, setLogout] = useState(false);
  const [login, setLogin] = useState(true);

  const logOut = (e) => {
    localStorage.removeItem('token');
  };
  useEffect(() => {
    if (!userToken || userToken === null) {
      setLogin(true);
      setLogout(false);
    } else {
      setLogout(true);
      setLogin(false);
    }
  });
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to={`/`}>
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {login && (
          <NavLink className="main-nav-item" to={`/login`}>
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
        {logout && (
          <NavLink className="main-nav-item log-out" to={'/profile/:id'}>
            Account
          </NavLink>
        )}
        {logout && (
          <NavLink onClick={logOut} className="main-nav-item log-out" to={'/'}>
            <i className="fa fa-user-circle"></i>
            Sign out
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
