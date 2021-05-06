import React, { useContext, useEffect, useState } from 'react'
import { ReactComponent as PlusCircle } from '../global/assets/icons/icon-plus-circle.svg'
import Address from '../components/Address'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'
import withAuthorization from '../components/Session/withAuthorization';
import { connect } from 'react-redux'
import { removeAddress } from '../actions'
import FirebaseContext from '../components/Firebase/context'

const Delivery = (props) => {

  const firebase = useContext(FirebaseContext);
  const [ updateDatabase, setUpdateDatabase ] = useState(false);
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

  const removeSelectedAddress = (id) => {
    props.removeAddress({id})
    setUpdateDatabase(true)
  }

  useEffect(()=> {
    if(updateDatabase)
    {
      firebase.address(props.authUser.uid).set(props.address)
      setUpdateDatabase(false)
    }
  },[firebase, props.address, props.authUser.uid, updateDatabase])

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
                        cancallable={true}
                        onCancel={(addressID) => removeSelectedAddress(addressID)}
                      />
          })
        }
        <div className="display-flex margin-10 cursor-pointer" onClick={() => history.push('/add-address')}>
          <span><PlusCircle width="20" height="20" /></span>
          <span className="font-1-25 margin-left-5">Add New Address</span>
        </div>  
        <Button withIcon={false} text="Confirm Your Address" onClick={selectedAddress}/>
      </section>
    </>
  );
}

const mapStateToProps = (state) => ({
  address: state.addressState.address,
  authUser: state.sessionState.authUser
})

export default connect(mapStateToProps, { removeAddress })(withAuthorization(Delivery));