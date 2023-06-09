import React from 'react';

const UserEdit = () => {
  return (
    <section className="edit-profil">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      {/* <section className="edit-user-info">
        <h2>Edit user info</h2>
        <div className="user-info">
          <label>
            User name:
            <input name="user-name" type="text" placeholder="Tony"></input>
          </label>
          <label>
            First name:
            <input name="first-name" type="text" placeholder="Tony"></input>
          </label>
          <label>
            Last name:
            <input name="last-name" type="text" placeholder="Tony"></input>
          </label>
        </div>
        <div className="btn-edit">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </section> */}
    </section>
  );
};

export default UserEdit;
