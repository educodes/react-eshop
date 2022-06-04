import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'
import iconClose from '@icons/icon_close.png'

import '../styles/components/OrderItem.scss';

const OrderItem = ({ productOrder }) => {
  const { images, title, price } = productOrder
  const { removeFromCart } = useContext(AppContext)

  return (
    <div className="OrderItem">
      <figure>
        <img src={images[0]} alt={title} />
      </figure>
      <p>{title}</p>
      <p>{price}</p>
      <img onClick={() => removeFromCart(productOrder)} src={iconClose} alt="close" />
    </div>
  );
}

export default OrderItem;
