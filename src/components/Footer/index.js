import React from 'react';
import { ReactComponent as AmazonIcon } from '../../global/assets/icons/payment_amazon.svg';
import { ReactComponent as JCBIcon } from '../../global/assets/icons/payment_jcb.svg';
import { ReactComponent as MastercardIcon } from '../../global/assets/icons/payment_mastercard.svg';
import { ReactComponent as PaypalIcon } from '../../global/assets/icons/payment_paypal.svg';
import { ReactComponent as VisaIcon } from '../../global/assets/icons/payment_visa.svg';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footerContent">
        <div className="contactInfo">
          <p className="title">Contact Info</p>  
          <span><strong>Phone:</strong>	<span className="display-inline-block padding-0">(+91) 9876 543 210</span> </span>
          <span>
            <strong>Address: </strong>  
            <span className="display-inline-block padding-0"> 1418 Riverwood Drive,</span> <br />
            Suite 3245 Cottonwood, <br />
            CA 96052, United State 
          </span>
        </div>
        <div className="categoryInfo">
          <p className="title">Categories</p>
          <span><Link to="/product/Men's Clothing" className="cursor-pointer display-flex decoration-none flex-1">Men's Clothing</Link></span>
          <span><Link to="/product/Jewelery" className="cursor-pointer display-flex decoration-none flex-1">Jewelery</Link></span>
          <span><Link to="/product/Women's Clothing" className="cursor-pointer display-flex decoration-none flex-1">Women's Clothing</Link></span>
          <span><Link to="/product/Electronics" className="cursor-pointer display-flex decoration-none flex-1">Electronic Gadgets</Link></span>
        </div>
        <div className="subscribeInfo">
          <p className="title">Lets Stay in Touch</p>
          <span className="subscribeForm">
            <input type="text" className="subscribeInput" name="subscribe" placeholder="Your Email Address" />
            <button type="button" className="subscribeButton">Subscribe</button>
          </span>
          <span>Keep up to date with our latest news and special offers.</span>
        </div>
      </div>
      <div className="footerPayment">
        <span>We accept: </span>
        <div>
          <span className="icon"><AmazonIcon width="24" /></span> 
          <span className="icon"><JCBIcon width="24" /></span>
          <span className="icon"><MastercardIcon width="24" /></span>
          <span className="icon"><PaypalIcon width="24" /></span>
          <span className="icon"><VisaIcon width="24" /></span>
        </div>
      </div>
      <hr />
      <div className="footerCopyright">
        <span>© 2020, Little Tags Website</span>
        <span>All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer;