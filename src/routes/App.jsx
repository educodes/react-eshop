import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import PasswordRecovery from "../pages/PasswordRecovery";
import MyAccount from "../pages/MyAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import NotFound from "../pages/NotFound";
import CreateAcount from "../pages/CreateAccount";
import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState"
import "../styles/global.scss";

const App = () => {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path="/password-recovery" element={<PasswordRecovery />} />
            <Route exact path="/send-email" element={<SendEmail />} />
            <Route exact path="/new-password" element={<NewPassword />} />
            <Route exact path="/account" element={<MyAccount />} />
            <Route exact path="/singup" element={<CreateAcount />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
