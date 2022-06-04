import React from 'react';
import '../styles/MyAccount.scss';

const MyAccount = () => {
  return (
    <div className="MyAccount">
      <div className="MyAccount-container">
        <h2 className="title">My Account</h2>
        <form action="/" className="form">
          <div>
            <label htmlFor="name" className="label">Name</label>
            <p className="value">2bic store</p>
            <label htmlFor="email" className="label">Email</label>
            <p className="value">2bicstore@gmail.com</p>
            <label htmlFor="password" className="label">Password</label>
            <p className="value">* * * * * * * * *</p>
          </div>
          <input type="submit" value="Edit" className="secondary-button login-button" />
        </form>
      </div>
    </div>
  );
}

export default MyAccount;
