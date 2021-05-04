import React from 'react';
import ImageContainer from '../ImageConatiner';
import { Link } from 'react-router-dom';
import { IMAGE_CONTAINER } from '../../constants';
import ProductCounter from '../ProductCounter';
import './Product.scss';

const Product = ({image, id = 1, title = "Product Name", price = "₹ 1200.00" , className, linkable = true, productCounter = false, quantity = 1, onChange}) => {

  const ProductRow = () => {
    return (
      <>
        <div className="product-image">
          <ImageContainer type={IMAGE_CONTAINER.TYPE.TERTIARY} title="" link={image} />
        </div>
        <div className="product-title">
          { title }
          {
            productCounter ?
            <ProductCounter onChange={onChange ? (val) => onChange(val) : () => {}} quantity={quantity}/> : ''
          }
        </div>
        <div className="product-price">
          { price }
        </div>
      </>
    );
  }

  return (
    <div className={`Product ${className}`}>
      {
        linkable ?
        <Link to={`/product-detail/${id}`} className="cursor-pointer display-flex decoration-none flex-1">
          {
            ProductRow()
          }
        </Link> :
        ProductRow()
      }
    </div>
  );
}

export default Product;