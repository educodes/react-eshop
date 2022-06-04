import React, { useState, useContext } from 'react'
import Menu from './Menu'
import iconMenu from '@icons/icon_menu2.svg';
import logo from '@logos/logo_2bicstore.svg';
import { AppContext } from '../context/AppContext'
import iconShopCart from '@icons/icon_shopping_cart2.svg';
import { MyOrder } from '../containers/MyOrder'
import '../styles/components/Header.scss'
import { MenuMobile } from './MenuMobile';

const Header = () => {

  const [toggle, setToggle] = useState(false)
  const [toggleMobile, setToggleMobile] = useState(false)
  const [toggleOrders, setToggleOrders] = useState(false)

  const { state } = useContext(AppContext)
  const totalCart = state.cart.length;

  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle)
  }
  const handleToggleMobile = () => {
    setToggleMobile(prevToggle => !prevToggle)
  }

  return (
    <nav>
      <img src={iconMenu} alt="menu" className="menu" onClick={handleToggleMobile} />

      <div className="navbar-left">
        {/* <img src={logo} alt="logo" className="nav-logo" /> */}
        <h2 className="nav-logo">eduStore</h2>
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>2bicstore@example.com</li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={iconShopCart} alt="shopping cart" />
            {totalCart > 0 ? <div>{totalCart}</div> : null}
            {/* <div>{state.cart && state.cart.length}</div> */}
          </li>
        </ul>
      </div>
      {/* { toggle && <Menu /> } */}
      {toggleOrders && <MyOrder />}
      {toggle ? <Menu /> : null }
      {toggleMobile ? <MenuMobile /> : null}
    </nav>
  )
}

export default Header