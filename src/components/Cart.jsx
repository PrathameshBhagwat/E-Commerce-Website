import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/cartSlice';

const Cart = () => {
  const { cart, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  if (cart.length === 0) {
    return (
      <div className="empty-cart-page">
        <h2>Your cart is empty</h2>
        <Link to="/products" className="continue-shopping">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <button onClick={() => dispatch(clearCart())} className="clear-cart-btn">
        Clear Cart
      </button>
      <div className="cart-container">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="remove-item-btn"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <p className="cart-total">Total: ₹{totalPrice}</p>
        <button className="checkout-btn">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;