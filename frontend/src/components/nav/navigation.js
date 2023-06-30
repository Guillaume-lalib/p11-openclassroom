import React, { useEffect, useState } from 'react';
import Logo from '../../image/argentBankLogo.avif';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setConnectUser } from '../../features/connectUser';

const Navigation = () => {
  const userToken = useSelector((state) => state.userConnect.data);
  const [logout, setLogout] = useState(false);
  const [login, setLogin] = useState(true);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setConnectUser(null));
  };
  useEffect(() => {
    if (!userToken || userToken === null) {
      setLogout(false);
      setLogin(true);
    } else {
      setLogin(false);
      setLogout(true);
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
          <NavLink className="main-nav-item log-out" to={'/profile'}>
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
