import React, { useRef, useEffect } from 'react'
import './Address.scss'

const Address = ({
    id = 1, 
    name = 'Ayush Jaiswal', 
    address = '1418 Riverwood Drive, <br/>Suite 3245 Cottonwood, <br/>DL 110092, India', 
    phone = '+91 9691078419',
    className,
    withRadio = true
  }) => {
    
  const displayAddress = useRef(null)
  const displayPhone = useRef(null)

  useEffect(()=>{
    displayAddress.current.innerHTML = address;
    displayPhone.current.innerHTML = phone;
  },[address, phone])

  return (
    <div className={`Address ${className ? className : ''}`}>
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
    </div>
  )
}

export default Address;