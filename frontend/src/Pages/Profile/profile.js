import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/nav/navigation';
import Edit from '../../components/Edit/UserEdit';
import Account from '../../components/account/accountProfil';

const Profil = () => {
  return (
    <main>
      <Nav />
      <div className="main bg-dark profil">
        <Edit />
        <Account />
      </div>
      <Footer />
    </main>
  );
};

export default Profil;
