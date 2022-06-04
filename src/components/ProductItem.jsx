import React, { useContext } from 'react';
import addToCartImg from '@icons/bt_add_to_cart.svg'
import { AppContext } from '../context/AppContext';
import '../styles/components/ProductItem.scss';

const ProductItem = ({ products }) => {
  // const [ cart , setCart] = useState('')
  const { addToCart } = useContext(AppContext)
  const { images, title, price } = products;

  const handleClick = item => {
    addToCart(item)
  }

  return (
    <div className="ProductItem">
      <img src={images[0]} alt={title} />
      <div className="product-info">
        <div>
          <p>{price}</p>
          <p>{title}</p>
        </div>
        <figure onClick={() => { handleClick(products) }}>
          <img src={addToCartImg} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default ProductItem;
