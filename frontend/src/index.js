import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import './index.css';
import Home from './Pages/Home/home';
import Error from './Pages/Error/error';
import Login from './Pages/Login/login';
import Profile from './Pages/Profile/profile';
import SignUp from './Pages/SignUp/profilSingUp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
