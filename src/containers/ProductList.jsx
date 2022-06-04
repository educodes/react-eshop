import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts'
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';


const ProductList = () => {

  const products = useGetProducts(API)

  const correctProducts = products.filter(produ => {
    return produ.images[0] !== ""
  })

  const productItemList = correctProducts.map(product => (
    
    <ProductItem products={product} key={`product-list-${product.id}`} />
  ))

  return (
    <section className="main-container">
      <div className="ProductList">
        {productItemList}
      </div>
    </section>
  );
}

export default ProductList;
