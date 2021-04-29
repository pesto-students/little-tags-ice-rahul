import React from 'react';
import Button from '../Button';
import './ProductDetail.scss';

const ProductDetail = ({product}) => {
  let { price, name, description, variant, stock, image} = product;

  image = [
    {
      url:'https://www.google.com'
    },
    {
      url:'https://www.google.com'
    },
    {
      url:'https://www.google.com'
    },
    {
      url:'https://www.google.com'
    }
  ];

  return (
    <section className="ProductDetail">
      <div className="product-image">
        <div className="sliding-image">
          
        </div>
        <div className="sliding-dots">
        {
          image.map(({url}, idx) => {
            return (
              <span className={idx===0 ? "bg-black" : ''} key={`${url}${idx}`}></span>
            )
          })
        }
        </div>
      </div>
      <div className="product-details">
        <span className="product-title">Faux Leather Jacket</span>
        <span className="product-price">₹ 1200.00</span>
        <span className="product-description">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        </span>
        <span className="product-size">Size</span>
        <span className="mb-10">
          <span className="mr-10 cursor-pointer">XS</span>
          <span className="mr-10 cursor-pointer">S</span>
          <span className="mr-10 cursor-pointer">M</span>
          <span className="mr-10 cursor-pointer">L</span>
          <span className="mr-10 cursor-pointer">XL</span>
        </span>
        <span className="product-size">Quantity</span>
        <span className="product-quantity">
          <span className="cursor-pointer">-</span>
          <p className="product-qty">1</p>
          <span className="cursor-pointer">+</span>
        </span>
        <Button />
      </div>
    </section>
  );

}

export default ProductDetail;