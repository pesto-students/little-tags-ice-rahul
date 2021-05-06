import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../global/assets/icons/icon-shopping-cart.svg';
import './Button.scss';

const Button = ({onClick, withIcon = true, text = "Add to Cart", variant = "btn-dark" }) => {
  return (
    <div className={`Button cursor-pointer ${variant !== "btn-dark" ? 'btn-light' : ''}`} onClick={onClick} style={{padding: withIcon ? '' : '10px 25px 10px 25px'}}>
      {
        withIcon ? 
        <ShoppingIcon className="shopping-icon" /> : ''
      }
      <span style={{userSelect: 'none'}}>{text}</span>
    </div>
  );
}

export default Button;