import React from 'react';
import Item from '../components/Product';
import { useParams } from 'react-router-dom';
import { PRODUCT, CURRENCY } from '../constants';
import FetchApi from '../hooks/FetchApi';

const Product = () => {
  const { category = PRODUCT.DEFAULT } = useParams();
  const { error, loading, data } = FetchApi(PRODUCT.All);

  const renderProduct = (products, productCategory) => {
    let productList = products;
    if(productCategory !== PRODUCT.DEFAULT && products) {
      productList = products.filter((val) => val.category.toUpperCase() === productCategory.toUpperCase())
    }

    return productList ? productList.map((value, idx) => {
      return (
        <Item className="margin-10" key={value.id} image={value.image} id={value.id} title={value.title} price={`${CURRENCY.IND} ${value.price}`}></Item>
      );
    }) : 'No Data' ;
  }

  return (
    <>
      <section className="product-list">
        <div className="title-center">{ category }</div>
        {
          !loading ?
          renderProduct(data, category) : 
          error
        }

        <div className="product-pagination">
          <div className="product-prev cursor-pointer">&#8249;&#8249; Prev</div>
          <div className="product-page"><span data-page="1"></span></div>
          <div className="product-next cursor-pointer">Next &#8250;&#8250;</div>
        </div>
      </section>
    </>
  );

}

export default Product;