import React from 'react';
import ImageContainer from '../ImageConatiner';
import { Link } from 'react-router-dom';
import { IMAGE_CONTAINER } from '../../constants';
import './Product.scss';

const Product = ({image, id = 1, title = "Product Name", price = "₹ 1200.00" , className}) => {
  return (
    <div className={`Product ${className}`}>
      <Link to={`/product-detail/${id}`} className="cursor-pointer display-flex decoration-none flex-1">
        <div className="product-image">
          <ImageContainer type={IMAGE_CONTAINER.TYPE.TERTIARY} title="" link={image} />
        </div>
        <div className="product-title">
          { title }
        </div>
        <div className="product-price">
          { price }
        </div>
      </Link>
    </div>
  );
}

export default Product;