import React from 'react';
import ImageContainer from '../ImageConatiner';
import { IMAGE_CONTAINER } from '../../constants';
import './Product.scss';

const Product = ({image, title = "Product Name", price = "₹ 1200.00" , className}) => {
  return (
    <div className={`Product ${className}`}>
      <div className="product-image">
        <ImageContainer type={IMAGE_CONTAINER.TYPE.TERTIARY} title="" />
      </div>
      <div className="product-title">
        { title }
      </div>
      <div className="product-price">
        { price }
      </div>
    </div>
  );
}

export default Product;