import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to ClickCart</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/products" className="cta-button">Click To Cart Products</Link>
      </div>
      <div className="features">
        <div className="feature">
          <h2>Quality Products</h2>
          <p>Curated selection of the best items</p>
        </div>
        <div className="feature">
          <h2>Fast Delivery</h2>
          <p>Quick and reliable shipping</p>
        </div>
        <div className="feature">
          <h2>Best Prices</h2>
          <p>Competitive prices on all items</p>
        </div>
      </div>
    </div>
  );
};

export default Home;