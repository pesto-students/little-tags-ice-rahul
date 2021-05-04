import React, { useState, useEffect } from 'react';
// import withAuthorization from '../components/Session/withAuthorization';
import { useParams } from 'react-router-dom';
import useFetchApi from '../hooks/FetchApi';
import { PRODUCT } from '../constants/index';
import ItemDetail from '../components/ProductDetail';

const initialState = {
  price: '', 
  name: '', 
  description: '', 
  variant: '', 
  stock: '', 
  image: null
}

const ProductDetail = () => {
  const { error, loading, data } = useFetchApi(PRODUCT.All);
  const [product , setProduct] = useState(initialState);
  const { id } = useParams();

  useEffect(() => {
    if(!loading && data) {
      const productDetail = data.filter((val) => val.id === parseInt(id))[0]
      setProduct({
        ...initialState,
        id:productDetail.id,
        price: productDetail.price,
        name: productDetail.title,
        description: productDetail.description,
        image: [{
          url: productDetail.image
        }]
      })
    }
  }, [loading, data, id])

  return (
    <>
      {
        loading ? <div style={{display: 'flex', justifyContent: 'center' }}>Loading Details</div> : <ItemDetail product={product}/>
      }
      {error}
    </>
  );

}

//export default withAuthorization(ProductDetail);
export default ProductDetail;