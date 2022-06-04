import React from 'react';
import icon_logo from '@logos/logo_2bicstore.svg'
import '../styles/NewPassword.scss';

const NewPassword = () => {
  return (
    <div className="NewPassword">
      <div className="NewPassword-container">
        <img src={icon_logo} alt="logo" className="NewPassword__logo" />
        <h2 className="title">Create a new password</h2>
        <p className="subtitle">Enter a new password</p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />
          <label htmlFor="new-password" className="label">Password</label>
          <input type="password" id="new-password" placeholder="*********" className="input input-password" />
          <input type="submit" value="Confirm" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
}

export default NewPassword;
