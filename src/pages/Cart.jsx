import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, X, Trash2 } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, totalPrice, removeFromCart, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="empty-cart-page">
        <ShoppingBag className="empty-cart-icon" />
        <p>Your cart is empty</p>
        <Link to="/products" className="continue-shopping">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <button onClick={clearCart} className="clear-cart-btn">
            <Trash2 className="trash-icon" /> Clear Cart
          </button>
        </div>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="remove-item-btn"
              >
                <X />
              </button>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <p className="cart-total">Total: ₹{totalPrice}</p>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;