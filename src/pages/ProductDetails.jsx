import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-details-page">
        <div className="container">
          <div className="product-not-found">
            <h2>Product Not Found</h2>
            <Link to="/products" className="back-button">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/cart');
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="product-details-page">
      <div className="container">
        <Link to="/products" className="back-link">
          ← Back to Products
        </Link>

        <div className="product-details">
          <div className="product-image-large">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-info-large">
            <span className="product-category-large">{product.category}</span>
            <h1 className="product-name-large">{product.name}</h1>

            <div className="product-rating-large">
              {'★'.repeat(Math.floor(product.rating))}
              <span className="rating-number">({product.rating})</span>
            </div>

            <p className="product-price-large">${product.price.toFixed(2)}</p>

            <p className="product-description">{product.description}</p>

            <div className="quantity-selector">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="quantity-btn-large"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="quantity-value-large">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="quantity-btn-large"
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>

            <button onClick={handleAddToCart} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
