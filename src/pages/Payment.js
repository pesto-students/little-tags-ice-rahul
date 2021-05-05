import React from 'react'
import Address from '../components/Address'
import withAuthorization from '../components/Session/withAuthorization';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

const Payment = (props) => {
  const { id } = useParams();
  const showAddress = () => {
    const getAddress = props.address.filter((val)=> parseInt(val.id) === parseInt(id))[0];
    return getAddress ? <Address 
                            withRadio={false} 
                            className="margin-10 padding-left-20" 
                            name={`${getAddress.fname} ${getAddress.lname}`} address={`${getAddress.address1} <br/>${getAddress.address2} <br/> ${getAddress.state} ${getAddress.pincode}`} 
                            key={getAddress.id} 
                            id={getAddress.id}
                            phone={`${getAddress.phone}`}  
                          /> : '';
  }
  return (
    <>
      <section className="product-list">
        <div className="title-center">Delivering To</div>
        {
          showAddress()
        }
        <div className="title-center">Method of Payment</div>
        <span>RazorPay</span>
        <span>Visa / MasterCard / UPI</span>
        <span>PayPal</span>
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  address: state.addressState.address
})

export default connect(mapStateToProps)(withAuthorization(Payment))