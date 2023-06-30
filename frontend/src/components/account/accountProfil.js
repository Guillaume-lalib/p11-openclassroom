import React from 'react';

const accountProfil = () => {
  const dataAccount = [
    {
      id: 1,
      account: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance',
    },
    {
      id: 2,
      account: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance',
    },
    {
      id: 3,
      account: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance',
    },
  ];
  return (
    <section className="account-profil">
      <h2 className="sr-only">Accounts</h2>
      {dataAccount.map((data) => (
        <div key={data.id} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{data.account}</h3>
            <p className="account-amount">{data.amount}</p>
            <p className="account-amount-description">{data.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default accountProfil;
