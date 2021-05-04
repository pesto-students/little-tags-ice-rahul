import React, { useState, useContext, useEffect } from 'react';
import Button from '../Button';
import { CURRENCY } from '../../constants/index';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import FirebaseContext from '../Firebase/context';
import './ProductDetail.scss';

const ProductDetail = (props) => {
/*
  variant and stock are future variable to be used to sync with inventory
  const { price, name, description, variant, stock, image} = product;
*/
  console.log(props.cartItem, 'Item');
  const { price, name, description, image} = props.product;
  const [qty, setQty] = useState(1);
  const firebase = useContext(FirebaseContext);
  const [isUpdate, setIsUpdate ] = useState(false)
  const [msg, setMsg] = useState('')
  
  const add = () => {
    setQty(qty+1);
  }

  const substract = () => {
    qty>1 ? setQty(qty-1) : setQty(0);
  }

  const addProductToCart = () => {
    if (props.authUser)
    {
      props.addToCart({
        ...props.product,
        qty
      })
      setIsUpdate(true);
    } else {
      alert('Please Login to Add product to cart')
    }
  }

  useEffect(()=>{
    if(isUpdate)
    {
      firebase.cart(props.authUser.uid).set({
        ...props.cartItem,
        roles:{}
      })
      setIsUpdate(false);
      setMsg('Cart Updated Successfully')
    }
  },[firebase, props.authUser?.uid, props.cartItem, isUpdate])

  return (
    <section className="ProductDetail">
      <div className="product-image">
        <div className="sliding-image" style={{backgroundImage: image ? `url('${image[0].url}')` : ''}}></div>
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
          <span className="cursor-pointer" onClick={substract}>-</span>
          <p className="product-qty">{ qty }</p>
          <span className="cursor-pointer" onClick={add}>+</span>
        </span>
        <Button onClick={addProductToCart}/>
        { msg }
      </div>
    </section>
  );
}

const mapStateToProps = (state) =>({
  authUser: state.sessionState.authUser,
  cartItem: state.cartState.cartItem
})

export default connect(mapStateToProps, { addToCart })(ProductDetail);