import React, { useState } from 'react';
import Modal from './ModalEdit';

const UserEdit = () => {
  const [show, setShow] = useState(false);
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
