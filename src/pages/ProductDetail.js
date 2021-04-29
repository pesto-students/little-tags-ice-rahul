import React from 'react';
import ItemDetail from '../components/ProductDetail';

const ProductDetail = () => {

  const product = {
    price: '', 
    name: '', 
    description: '', 
    variant: '', 
    stock: '', 
    image: null
  }

  return (
    <>
      <ItemDetail product={product}/>
    </>
  );

}

export default ProductDetail;