import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfos } from '../../features/userInfos';

const UserEdit = () => {
  const firstName = useSelector((state) => state.userInfos.data.firstName);
  const lastName = useSelector((state) => state.userInfos.data.lastName);
  const userName = useSelector((state) => state.userInfos.data.userName);
  const [show, setShow] = useState(false);
  const token = useSelector((state) => state.userConnect.data);
  const form = useRef();
  const dis = useDispatch();
  dis(
    setUserInfos({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
    })
  );
  const nav = useNavigate();
  useEffect(() => {
    if (!token || token === null) {
      nav('/');
    } else {
      userData();
    }
  });

  const userData = () => {
    Axios.post('http://localhost:3001/api/v1/user/profile', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((e) => {
      console.log(e.data.body);
      dis(setUserInfos(e.data.body));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      userName: e.target[0].value,
    };
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
