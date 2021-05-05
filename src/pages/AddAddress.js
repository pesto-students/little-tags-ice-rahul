import React, { useReducer, useContext, useEffect, useState } from 'react'
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'
import Input from '../components/Input'
import withAuthorization from '../components/Session/withAuthorization';
import { connect } from 'react-redux'
import FirebaseContext from '../components/Firebase/context'
import useAddAddressReducer from '../reducers/useAddAddressReducer'
import { addAddress, addAddressState } from '../actions'

const initialState = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  state: '',
  pincode: ''
}

const AddAddress = (props) => {

  const history = useHistory();
  const firebase = useContext(FirebaseContext);
  const [updateDatabase, setUpdateDatabase] = useState(false);
  const [ { fname, lname, email, phone, address1, address2, state, pincode } , dispatch ] = useReducer(useAddAddressReducer , initialState)
  const addInformation = () => {
    var id = new Date();
    props.addAddress({fname, lname, email, phone, address1, address2, state, pincode, id: id.getTime()})
    setUpdateDatabase(true);
  }

  useEffect(()=>{
    if(updateDatabase)
    {
      firebase.address(props.authUser.uid).set(props.address)
      history.push('/delivery')
    }
  }, [firebase, history, props.address, props.authUser.uid, updateDatabase])

  const modifyState = (value) => {
    return dispatch(addAddressState(value))
  }

  return (
    <>
      <section className="product-list">
        <div className="title-center">Deliver To</div>
          <div className="display-flex w-70 justify-between gap-20 flex-direction-column-small gap-0-small">
            <div className="flex-1">
              <Input name="fname" label="First Name" placeholder="" onChange={(val) => modifyState({fname: val})} className="margin-10"/>
              <Input name="lname" label="Last Name" placeholder="" onChange={(val) => modifyState({lname: val})} className="margin-10"/>
              <Input name="email" label="Email Id" placeholder="" onChange={(val) => modifyState({email: val})} className="margin-10"/>
              <Input name="phone" label="Phone Number" placeholder="" onChange={(val) => modifyState({phone: val})} className="margin-10"/>
            </div>
            <div className="flex-1">
              <Input name="address1" label="Address Line 1" placeholder="" onChange={(val) => modifyState({address1: val})} className="margin-10"/>
              <Input name="address2" label="Address Line 2" placeholder="" onChange={(val) => modifyState({address2: val})} className="margin-10"/>
              <Input name="state" label="State" placeholder="" onChange={(val) => modifyState({state: val})} className="margin-10"/>
              <Input name="pincode" label="Pincode" placeholder="" onChange={(val) => modifyState({pincode: val})} className="margin-10"/>
            </div>
          </div>
        <Button withIcon={false} text="Add Informations" onClick={addInformation}/>
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
  address: state.addressState.address
})

export default connect(mapStateToProps, { addAddress })(withAuthorization(AddAddress))