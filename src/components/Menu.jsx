import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Menu.scss';

const Menu = () => {
  return (
    <div className='Menu'>
      <ul>
        <li>
          <a href="/" className="title">My orders</a>
        </li>
        <li>
          <a href="/">My account</a>
        </li>
        <li>
          {/* <Link to='/Login'>
          Sign out
          </Link> */}
          <a  href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
