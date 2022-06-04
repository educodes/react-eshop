import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'
import OrderItem from '../components/OrderItem';
import iconFlechita from '@icons/flechita.svg'
import '../styles/MyOrder.scss';

const MyOrder = () => {
  const { state } = useContext(AppContext)
  const stateCart = state.cart

  const sumTotalProducts = () => {

    const reducer = (acomulador, currentValue) => {
      return acomulador + currentValue.price
    }
    const sum = state.cart.reduce(reducer, 0)
    return sum
    
  }

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={iconFlechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {stateCart.map(productOrder => (
          <OrderItem productOrder={productOrder} key={`product-Order-${productOrder.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$ {sumTotalProducts()}</p>
        </div>
        <button className="primary-button">
          Checkout
				</button>
      </div>
    </aside>
  );
}

export { MyOrder };
