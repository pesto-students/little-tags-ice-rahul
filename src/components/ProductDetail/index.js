import React from 'react';
import Button from '../Button';
import { CURRENCY } from '../../constants/index';
import './ProductDetail.scss';

const ProductDetail = ({product}) => {
/*
  variant and stock are future variable to be used to sync with inventory
  const { price, name, description, variant, stock, image} = product;
*/
  const { price, name, description, image} = product;

  return (
    <section className="ProductDetail">
      <div className="product-image">
        <div className="sliding-image" style={{backgroundImage: image ? `url('${image[0].url}')` : ''}}>
          
        </div>
        <div className="sliding-dots">
        {
          image ? 
          image.map(({url}, idx) => {
            return (
              <span className={idx===0 ? "bg-black" : ''} key={`${url}${idx}`}></span>
            )
          }) : ''
        }
        </div>
      </div>
      <div className="product-details">
        <span className="product-title">{name}</span>
        <span className="product-price">{`${CURRENCY.IND} ${price}`}</span>
        <span className="product-description">
        {description}
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