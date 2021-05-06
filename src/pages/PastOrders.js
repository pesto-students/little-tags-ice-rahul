import React from 'react'
import { connect } from 'react-redux'
import Product from '../components/Product'
import { CURRENCY } from '../constants'

const PastOrders = (props) => {
  console.log(props.order,"order")
  return (
    <>
      <section className="product-list">
        <div className="title-center">Past Orders</div>
        {
          props.order.map((val, orderId)=> {
            const addressId = val.deliveryAddress.id;
            return val.orderDetail.map((products, productId) => {
                return <Product 
                          key={`${orderId}-product-${productId}-address-${addressId}`}
                          image={products.image[0].url}
                          id={products.id}
                          title={products.name}
                          price={`${CURRENCY.IND} ${products.price}`}
                        />
              })
          })
        }
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  order: state.orderState.order
})

export default connect(mapStateToProps)(PastOrders);