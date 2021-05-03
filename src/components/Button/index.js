import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../global/assets/icons/icon-shopping-cart.svg';
import './Button.scss';

const Button = () => {
  return (
    <div className="Button cursor-pointer">
      <ShoppingIcon className="shopping-icon" />
      <span style={{userSelect: 'none'}}>Add to Cart</span>
    </div>
  );
}

export default Button;