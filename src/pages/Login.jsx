import React, { useEffect, useRef } from "react";
// import logoLogin from '@logos/'
import "../styles/Login.scss";


const Login = () => {

  const form = useRef(null)


  const refInputForm = useRef(null)
  console.log(form);

  useEffect(() => {
    setTimeout(() => {
      refInputForm.current.focus()
    }, 1000)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current)
    const data = {
      userName: formData.get('email'),
      password: formData.get('password')
    }
    console.log(form);
    // console.log(formData);
    console.log(data);
  }

  return (
    <div className="Login">
      <div className="Login-container">
        {/* <img src={logoLogin} alt="logo" className="logo-login" /> */}

        <form action="/" className="Login__form" ref={form}>

          <label htmlFor="email" className="Login__label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="email@example.cm"
            className="Login__input input-email"
            ref={refInputForm}
          />
          <label htmlFor="password" className="Login__label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="* * * * * * * * *"
            className="Login__input input-password"
          />
          <button
            type="submit"
            className="primary-button login-button"
            onClick={handleSubmit}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
