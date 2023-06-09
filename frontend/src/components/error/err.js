import React from 'react';
import { NavLink } from 'react-router-dom';

const err = () => {
  return (
    <section className="bg-dark">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <p className="error-text">Page not found</p>
        <NavLink className="main-nav-item" to={`/`}>
          Home
        </NavLink>
      </div>
    </section>
  );
};

export default err;
