import React, { useEffect, useState, useContext } from 'react';
import withAuthorization from '../components/Session/withAuthorization';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FirebaseContext from '../components/Firebase/context'
import Product from '../components/Product'
import ProductCounter from '../components/ProductCounter';
import Button from '../components/Button';
import { addToCart, removeFromCart } from '../actions'
import { CURRENCY } from '../constants';

const Cart = (props) => {
  const history = useHistory();
  const firebase = useContext(FirebaseContext)
  const [updateDatabase, setUpdateDatabase] = useState(false);
  const modifyCart = (quantity, id) => {
    const selectProduct = props.cart.filter((val) => val.id === id)[0];
    props.addToCart({
      ...selectProduct,
      qty: quantity
    })
    setUpdateDatabase(true);
  }
  const removeProduct = (val) => {
    props.removeFromCart(val)
    setUpdateDatabase(true);
  }
  const getTotal = () => {
      let total = 0;
      props.cart.forEach(element => {
        total += Math.round(parseFloat(element.price)*100) / 100 * parseFloat(element.qty)
        console.log(element.price)
      });
      return total
  }
  useEffect(()=>{
    if(updateDatabase){
      firebase.cart(props.authUser.uid).set({
        ...props.cart,
        roles:{}
      })
      setUpdateDatabase(false)
    }
  },[firebase, props.authUser.uid, props.cart, updateDatabase])
  return (
    <>
    <section className="product-list">
      <div className="title-center">My Cart</div>
      {
        props.cart.map(val => {
          return <Product 
                    image={val.image[0].url} 
                    id={val.id} 
                    title={val.name} 
                    price={`${CURRENCY.IND} ${val.price * val.qty}`} 
                    key={val.id} 
                    linkable={false} 
                  >
                    <div className="display-flex align-center">
                      <ProductCounter onChange={(quantity) => modifyCart(quantity, val.id)} quantity={val.qty}/>
                      <span className="margin-10 cursor-pointer" onClick={() => removeProduct(val)}>Remove</span>
                    </div>
                  </Product>
        })
      }
      <div className="display-flex justify-flex-end w-70 padding-10 gap-10 font-1-25 align-flex-end">
        <span>Total:</span>
        <span>{CURRENCY.IND} {getTotal()}</span>
      </div>
      <Button withIcon={false} text="Proceed to Checkout" onClick={() => history.push('/delivery') }/>
    </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser ,
  cart: state.cartState.cartItem
})

export default connect(mapStateToProps, { addToCart, removeFromCart })(withAuthorization(Cart));