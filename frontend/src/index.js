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
import Transactions from './Pages/Transaction/transaction';
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
          <Route path="/profile/:id" element={<Profile />} />
          <Route
            path="/profile/:id/transactions/:account"
            element={<Transactions />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
