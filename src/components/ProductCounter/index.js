import React, { useState } from 'react';
import './ProductCounter.scss';

const ProductCounter = ({onChange, quantity = 1}) => {
  const [qty, setQty] = useState(quantity);

  const add = () => {
    onChange(qty+1);
    setQty(qty+1);
  }

  const substract = () => {
    onChange(qty>1 ? qty-1 : 0);
    qty>1 ? setQty(qty-1) : setQty(0);
  }

  return (
    <div className="ProductCounter">
      <span className="product-quantity">
        <span className="cursor-pointer" onClick={substract}>-</span>
        <p className="product-qty">{ qty }</p>
        <span className="cursor-pointer" onClick={add}>+</span>
      </span>
    </div>
  )
}

export default ProductCounter;