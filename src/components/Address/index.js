import React, { useRef, useEffect } from 'react'
import { ReactComponent as Cancel } from '../../global/assets/icons/icon-cancel.svg';
import './Address.scss'

const Address = ({
    id = 1, 
    name = 'Ayush Jaiswal', 
    address = '1418 Riverwood Drive, <br/>Suite 3245 Cottonwood, <br/>DL 110092, India', 
    phone = '+91 9691078419',
    className,
    withRadio = true,
    cancallable = false,
    onCancel
  }) => {
    
  const displayAddress = useRef(null)
  const displayPhone = useRef(null)

  useEffect(()=>{
    displayAddress.current.innerHTML = address;
    displayPhone.current.innerHTML = phone;
  },[address, phone])

  return (
    <div className={`Address w-100-small ${className ? className : ''}`}>
      {
        withRadio ? 
        <span className="display-flex align-flex-start margin-10">
          <input className="width-20 height-20 custom-radio cursor-pointer" type="radio" name="address" value={id}></input>
        </span> : ''
      }
      
      <span className="display-flex flex-1 flex-column">
        <span className="font-bold font-1-25 margin-5 margin-left-5">{name}</span>
        <span className="margin-5" ref={displayAddress}></span>
        <span className="margin-left-5" ref={displayPhone}></span>
      </span>
      {
        cancallable ? <Cancel width="24" height="24" fill="red" className="cursor-pointer" onClick={()=> onCancel ? onCancel(id) : '' } /> : ''
      }
    </div>
  )
}

export default Address;