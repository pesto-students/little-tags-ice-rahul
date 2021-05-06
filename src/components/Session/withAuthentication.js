import React, { useEffect, useContext } from 'react'
import { connect } from 'react-redux';
import { setAuthUser, addToCart, clearCart, addAddress, clearAddress, clearOrder, placeOrder } from '../../actions';
import FirebaseContext from '../Firebase/context'

const withAuthentication = (Component) => {
  const NewComponent = (props) => {
    const firebase = useContext(FirebaseContext);

    const saveToLocalStorage = (authUser) => {
      localStorage.setItem('authUser', JSON.stringify(authUser));
    }

    const fallback = () => {
      localStorage.removeItem('authUser');
      props.setAuthUser(null);
    }

    const next = (authUser, cart, address, order) => {
      saveToLocalStorage(authUser);
      props.setAuthUser(authUser);
      props.clearCart();
      if(cart)
      {
        cart.forEach((val) => {
          props.addToCart(val);
        })
      }
      props.clearAddress();
      if(address){
        address.forEach((val) => {
          props.addAddress(val)
        })
      }
      props.clearOrder();
      if(order){
        order.forEach((val) => {
          props.placeOrder(val)
        })
      }
    }

    useEffect(()=>{
      const user = JSON.parse(localStorage.getItem('authUser'));
      props.setAuthUser(user);
      firebase.onAuthChangeListener(next, fallback)
    })
    return <Component {...props} />
  }
  return connect(null, { setAuthUser, addToCart, clearCart, addAddress, clearAddress, clearOrder, placeOrder })(NewComponent);
}

export default withAuthentication;