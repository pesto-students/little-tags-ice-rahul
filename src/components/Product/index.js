import React from 'react';
import ImageContainer from '../ImageConatiner';
import { Link } from 'react-router-dom';
import { IMAGE_CONTAINER } from '../../constants';
import './Product.scss';

const Product = ({image, id = 1, title = "Product Name", price = "1200.00" , className, linkable = true, children}) => {

  price = typeof(price) === 'string' && price.includes(" ") ? `${price.split(" ")[0]} ${Math.round(parseFloat(price.split(" ")[1])*100)/100}` : price;

  const ProductRow = () => {
    return (
      <>
        <div className="product-image">
          <ImageContainer type={IMAGE_CONTAINER.TYPE.TERTIARY} title="" link={image} />
        </div>
        <div className="product-title">
          { title }
          {
            children
          }
        </div>
        <div className="product-price">
          { price }
        </div>
      </>
    );
  }

  return (
    <div className={`Product ${className ? className : ''}`}>
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