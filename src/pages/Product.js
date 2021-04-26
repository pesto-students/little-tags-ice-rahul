import React from 'react';
import Item from '../components/Product';

const Product = () => {
  return (
    <>
      <section className="product-list">
        <div className="title-center">All Products</div>
        <Item className="margin-10"></Item>
        <Item className="margin-10"></Item>
        <Item className="margin-10"></Item>
        <Item className="margin-10"></Item>
        <div className="product-pagination">
          <div className="product-prev cursor-pointer">&#8249;&#8249; Prev</div>
          <div className="product-page"><span data-page="1"></span><span data-page="2"></span><span data-page="3"></span></div>
          <div className="product-next cursor-pointer">Next &#8250;&#8250;</div>
        </div>
      </section>
    </>
  );

}

export default Product;