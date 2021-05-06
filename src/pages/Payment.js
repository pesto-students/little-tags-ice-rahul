import React, {useState, useEffect, useContext} from 'react'
import Address from '../components/Address'
import withAuthorization from '../components/Session/withAuthorization';
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { placeOrder, clearCart } from '../actions'
import FirebaseContext from '../components/Firebase/context'

const Payment = (props) => {
  const { id } = useParams();
  const history = useHistory();
  const [selectedAddress, setSelectedAddress ] = useState(null);
  const [updateDatabase, setUpdateDatabase] = useState(false);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    setSelectedAddress(props.address.filter((val)=> parseInt(val.id) === parseInt(id))[0])
  },[id, props.address])

  useEffect(() => {
    if(updateDatabase){
      firebase.order(props.authUser.uid).set(props.order)
      firebase.cart(props.authUser.uid).set(props.cart)
      setUpdateDatabase(false);
      history.push('/thanks');
    }
  },[firebase, history, props.authUser.uid, props.cart, props.order, updateDatabase])

  const showAddress = () => {
    const getAddress = selectedAddress;
    return getAddress ? <Address 
                            withRadio={false} 
                            className="margin-10 padding-left-20" 
                            name={`${getAddress.fname} ${getAddress.lname}`} address={`${getAddress.address1} <br/>${getAddress.address2} <br/> ${getAddress.state} ${getAddress.pincode}`} 
                            key={getAddress.id} 
                            id={getAddress.id}
                            phone={`${getAddress.phone}`}  
                          /> : '';
  }

  const placeMyOrder = () => {
    const paymentMethod = document.querySelectorAll('input[type=radio]');
    let selectedPaymentMethod = null;
    paymentMethod.forEach((val) => {
      if(val.checked) {
        selectedPaymentMethod = val.value
      }
    })
    if(!selectedPaymentMethod){
      alert('Please Select a Payment Method')
      return
    }
    props.placeOrder({orderDetail: props.cart, deliveryAddress: selectedAddress, paymentMethod:selectedPaymentMethod})
    props.clearCart()
    setUpdateDatabase(true)
  }

  return (
    <>
      <section className="product-list">
        <div className="title-center">Delivering To</div>
        {
          showAddress()
        }
        <div className="title-center">Method of Payment</div>
        <ul className="padding-0 margin-0 width-30-p list-none font-1-25">
          <li className="display-flex align-flex-end gap-10 margin-10">
            <input type="radio" name="payment" className="width-20 height-20 custom-radio cursor-pointer" value="RazorPay" /><span>RazorPay</span>
          </li>
          <li className="display-flex align-flex-end gap-10 margin-10">
            <input type="radio" name="payment" className="width-20 height-20 custom-radio cursor-pointer" value="VISA/MASTERCARD/UPI" /><span>Visa / MasterCard / UPI</span>
          </li>
          <li className="display-flex align-flex-end gap-10 margin-10">
            <input type="radio" name="payment" className="width-20 height-20 custom-radio cursor-pointer" value="PayPal" /><span>PayPal</span>
          </li>
        </ul>
        <Button withIcon={false} text="Proceed to Payment" onClick={placeMyOrder}/>
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  address: state.addressState.address,
  order: state.orderState.order,
  cart: state.cartState.cartItem,
  authUser: state.sessionState.authUser
})

export default connect(mapStateToProps, { placeOrder, clearCart })(withAuthorization(Payment))