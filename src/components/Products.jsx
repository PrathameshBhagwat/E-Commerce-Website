import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const products = [
  // Product data remains the same
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price}</p>
              <button
                onClick={() => dispatch(addToCart(product))}
                className="add-to-cart-btn"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;    