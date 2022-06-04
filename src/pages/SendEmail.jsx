import React from 'react';
import icon_email from '@icons/email.svg'
import icon_logo from '@logos/logo_2bicstore.svg'
import '../styles/SendEmail.scss';

const SendEmail = () => {
  return (
    <div className="SendEmail">
      <div className="SendEmail__form-container">
        <img src={icon_logo} alt="logo" className="SendEmail__logo" />
        <h2 className="title">Email has been sent!</h2>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-image">
          <img src={icon_email} alt="email" />
        </div>
        <button className="primary-button login-button">Login</button>
        <p className="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  );
}

export default SendEmail;