import React from 'react';
import Chat from '../../image/icon-chat.png';
import Money from '../../image/icon-money.png';
import Security from '../../image/icon-security.png';
const feet = () => {
  const dataHomePage = [
    {
      id: 1,
      title: 'You are our #1 priority',
      content:
        'Need to talk a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
      image: Chat,
    },
    {
      id: 2,
      title: 'More savings means higher rates',
      content:
        'The more you save with us, the higher your interest rate will be!',
      image: Money,
    },
    {
      id: 3,
      title: 'Security you can trust',
      content:
        'We use top of the line encryption to make sure your data and money is always safe.',
      image: Security,
    },
  ];
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {dataHomePage.map((data) => (
        <div key={data.id} className="feature-item">
          <img src={data.image} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{data.title}</h3>
          <p>{data.content}</p>
        </div>
      ))}
    </section>
  );
};

export default feet;
