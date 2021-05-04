import React, { useEffect, useState, useContext } from 'react';
import withAuthorization from '../components/Session/withAuthorization';
import { connect } from 'react-redux'
import FirebaseContext from '../components/Firebase/context'
import Product from '../components/Product'
import { addToCart } from '../actions'
import { CURRENCY } from '../constants';

const Cart = (props) => {
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
                    productCounter={true} 
                    quantity={val.qty}
                    onChange={(quantity) => { modifyCart(quantity, val.id) }}
                  />
        })
      }
    </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser ,
  cart: state.cartState.cartItem
})

export default connect(mapStateToProps, { addToCart })(withAuthorization(Cart));