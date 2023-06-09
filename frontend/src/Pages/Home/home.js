import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/nav/navigation';
import Header from '../../components/header-home/header';
import Features from '../../components/features/feet';

const home = () => {
  return (
    <main>
      <Nav />
      <Header />
      <Features />
      <Footer />
    </main>
  );
};

export default home;
