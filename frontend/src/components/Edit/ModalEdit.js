import React from 'react';

const ModalEdit = ({ show, setShow }) => {
  const content = show && (
    <section className="edit-user-info">
      <h2>Edit user info</h2>
      <div className="user-info">
        <form action="">
          <label>
            User name:
            <input
              className="bg-white"
              name="user-name"
              type="text"
              placeholder="Tony"
            ></input>
          </label>
          <label>
            First name:
            <input name="first-name" type="text" placeholder="Tony"></input>
          </label>
          <label>
            Last name:
            <input name="last-name" type="text" placeholder="Tony"></input>
          </label>
        </form>
        <div className="btn-edit">
          <button>Save</button>
          <button onClick={() => setShow(false)}>Cancel</button>
        </div>
      </div>
    </section>
  );
  return content;
};
export default ModalEdit;
