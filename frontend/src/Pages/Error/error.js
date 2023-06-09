import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/nav/navigation';
import Err from '../../components/error/err';

const error = () => {
  return (
    <main>
      <Nav />
      <Err />
      <Footer />
    </main>
  );
};

export default error;
