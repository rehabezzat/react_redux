import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartIcon() {
  const items = useSelector(state => state.cart.items);
  const cartCount = items.length;

  return (
    <div className="cart-icon-container">
      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
}

export default CartIcon;
