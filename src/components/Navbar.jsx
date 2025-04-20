import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { itemCount } = useSelector(state => state.cart);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">ClickCart</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;