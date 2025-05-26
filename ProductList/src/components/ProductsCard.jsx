import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card h-50 background-light shadow-sm">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">Price: ₹{product.price}</p>
        <p className="card-text">Category: {product.category}</p>
        <p className="card-text">Rating: {product.rating} ⭐</p>
        <button
          className="btn btn-primary mt-auto"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
