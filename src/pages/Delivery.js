import React from 'react'
import { ReactComponent as PlusCircle } from '../global/assets/icons/icon-plus-circle.svg'
import Address from '../components/Address'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'
import withAuthorization from '../components/Session/withAuthorization';
import { connect } from 'react-redux'

const Delivery = (props) => {

  const history = useHistory()
  const selectedAddress = () => {
    const radioButton = document.querySelectorAll('input[type="radio"]')
    let addressID = null;
    radioButton.forEach((target) => {
      if(target.checked){
        addressID = target.value;
      }
    })
    if(addressID) {
      history.push(`/payment/${addressID}`)
    } else {
      alert('Please Select a Address')
    }
  }
  return (
    <>
      <section className="product-list">
      <div className="title-center">Deliver To</div>
        {
          props.address.map((val) => {
            return <Address 
                        name={`${val.fname} ${val.lname}`} address={`${val.address1} <br/>${val.address2} <br/> ${val.state} ${val.pincode}`} 
                        className="margin-10" 
                        key={val.id} 
                        id={val.id}
                        phone={`${val.phone}`}
                      />
          })
        }
        <div className="display-flex margin-10 cursor-pointer" onClick={() => history.push('/add-address')}>
          <span><PlusCircle width="20" height="20" /></span>
          <span className="font-1-25 margin-left-5">Add New Address</span>
        </div>  
        <Button withIcon={false} text="Proceed to Payment" onClick={selectedAddress}/>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  address: state.addressState.address
})

export default connect(mapStateToProps)(withAuthorization(Delivery));