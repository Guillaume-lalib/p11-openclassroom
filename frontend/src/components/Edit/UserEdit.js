import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserEdit = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [userName, setUserName] = useState();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem('token');
  const form = useRef();
  console.log(firstName, lastName, userName);

  const nav = useNavigate();
  useEffect(() => {
    if (!token) {
      nav('/login');
    }
  });

  const product = { name: 'Axios POST with Bearer Token' };

  Axios.post('http://localhost:3001/api/v1/user/profile', product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((e) => {
    setFirstName(e.data.body.firstName);
    setLastName(e.data.body.lastName);
    setUserName(e.data.body.userName);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userName: e.target[0].value,
    };
    console.log(e.target[0].value.length);
    if (e.target[0].value.length > 0) {
      Axios.put('http://localhost:3001/api/v1/user/profile', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Username update');
    } else {
      alert('Write username please');
    }
  };
  return (
    <section className="edit-profil">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {firstName} {lastName} !
        </h1>
        <button onClick={() => setShow(true)} className="edit-button">
          Edit Name
        </button>
      </div>
      {show && (
        <section className="edit-user-info">
          <h2>Edit user info</h2>
          <div className="user-info">
            <form ref={form} onSubmit={(e) => handleSubmit(e)}>
              <label>
                User name:
                <input
                  className="bg-white"
                  name="user-name"
                  type="text"
                  placeholder={userName}
                ></input>
              </label>
              <label>
                First name:
                <input
                  name="first-name"
                  type="text"
                  placeholder={firstName}
                  disabled
                ></input>
              </label>
              <label>
                Last name:
                <input
                  name="last-name"
                  type="text"
                  placeholder={lastName}
                  disabled
                ></input>
              </label>
              <div className="btn-edit">
                <button type="submit">Save</button>
                <button onClick={() => setShow(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </section>
      )}
    </section>
  );
};

export default UserEdit;
