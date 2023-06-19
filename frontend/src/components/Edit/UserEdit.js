import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './ModalEdit';
import Axios from 'axios';
import { setmodifUserInfos } from '../../features/modifUserInfos';

const UserEdit = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch;

  const token = useSelector((state) => state.userConnect.data);
  const addTokenLocalStorage = localStorage.setItem('token', token);
  const tokenUser = localStorage.getItem('token');
  const product = { name: 'Axios POST with Bearer Token' };
  const headers = { Authorization: `Bearer ${token}` };
  Axios.post('http://localhost:3001/api/v1/user/profile', product, {
    headers,
  }).then((e) => {
    const data = e.data.body;
    dispatch(setmodifUserInfos(data));
    console.log(data);
  });

  return (
    <section className="edit-profil">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button onClick={() => setShow(true)} className="edit-button">
          Edit Name
        </button>
      </div>
      <Modal show={show} setShow={setShow} />
    </section>
  );
};

export default UserEdit;
