import React, { useState } from 'react'
// import cerrarMenu from '@icons/icon_close.png'
import '../styles/components/MenuMobile.scss'


export const MenuMobile = () => {


  return (
    <div className="mobile-menu">
      {/* <img src={cerrarMenu}
        className="mobile-menu__close-menu"
        alt="cerrar_menu" /> */}
      <ul>
        <li>
          <a href="/">CATEGORIES</a>
        </li>
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
          <a href="/">Other</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="/">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
      </ul>

      <ul className="ul-mobile-menu">
        <li>
          <a href="/" className="email">email@example.com</a>
        </li>
        <li>
          <a href="/" className="sign-out">Sign out</a>
        </li>
      </ul>
    </div>
  )
}