import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopHub</h1>
          <p>Discover amazing products at unbeatable prices</p>
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/products" className="view-all-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            <Link to="/products" className="category-card">
              <div className="category-icon">💻</div>
              <h3>Electronics</h3>
            </Link>
            <Link to="/products" className="category-card">
              <div className="category-icon">👕</div>
              <h3>Clothing</h3>
            </Link>
            <Link to="/products" className="category-card">
              <div className="category-icon">🏃</div>
              <h3>Sports</h3>
            </Link>
            <Link to="/products" className="category-card">
              <div className="category-icon">🎒</div>
              <h3>Accessories</h3>
            </Link>
            <Link to="/products" className="category-card">
              <div className="category-icon">🏠</div>
              <h3>Home</h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
