# ShopHub - Modern E-Commerce Website

A fully functional, responsive e-commerce website built with React.js and Vite. This project demonstrates modern frontend development practices including React Hooks, Context API for state management, React Router for navigation, and localStorage for data persistence.

![ShopHub E-Commerce](https://img.shields.io/badge/React-18.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0.0-purple) ![React Router](https://img.shields.io/badge/React_Router-6.20.0-red)

## 🌟 Features

### Core Functionality
- **Product Browsing**: View products in a responsive grid layout with images, names, categories, prices, and ratings
- **Advanced Search**: Search products by name with real-time filtering
- **Category Filtering**: Filter products by category (Electronics, Clothing, Sports, Accessories, Home)
- **Price Sorting**: Sort products by price (low to high, high to low) and rating
- **Product Details**: Detailed product view with large images, descriptions, and specifications
- **Shopping Cart**: Add products to cart, adjust quantities, remove items
- **Cart Persistence**: Shopping cart data persists using localStorage
- **Responsive Design**: Mobile-first approach with optimal viewing on all devices
- **Professional UI**: Modern, clean interface with smooth animations and transitions

### User Experience
- **Intuitive Navigation**: Clear navigation bar with cart item counter
- **Empty State Handling**: User-friendly messages when no products match search criteria
- **Loading States**: Smooth transitions and loading indicators
- **Accessibility**: Semantic HTML and accessible button labels
- **Performance**: Optimized rendering with React functional components and hooks

## 🛠️ Technology Stack

- **Frontend Framework**: React.js 18.2.0 with functional components and hooks
- **Build Tool**: Vite 5.0.0 for fast development and optimized builds
- **Routing**: React Router DOM 6.20.0 for client-side navigation
- **State Management**: React Context API for global cart state
- **Data Persistence**: localStorage API for cart data
- **Styling**: CSS3 with modern features (Flexbox, Grid, CSS Variables)
- **Language**: JavaScript ES6+

## 📁 Project Structure

```
ecommerce-website/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/              # Static assets (images, icons)
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.jsx       # Navigation bar with cart badge
│   │   ├── Navbar.css       # Navbar styling
│   │   ├── Footer.jsx       # Footer section
│   │   ├── Footer.css       # Footer styling
│   │   ├── ProductCard.jsx  # Product display card
│   │   ├── ProductCard.css  # Product card styling
│   │   ├── SearchBar.jsx    # Search input component
│   │   ├── SearchBar.css    # Search bar styling
│   │   ├── CartItem.jsx     # Individual cart item
│   │   └── CartItem.css     # Cart item styling
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing page with hero section
│   │   ├── Home.css         # Home page styling
│   │   ├── Products.jsx     # Product listing with filters
│   │   ├── Products.css     # Products page styling
│   │   ├── ProductDetails.jsx # Single product view
│   │   ├── ProductDetails.css # Product details styling
│   │   ├── Cart.jsx         # Shopping cart page
│   │   └── Cart.css         # Cart page styling
│   ├── context/             # React Context providers
│   │   └── CartContext.jsx  # Cart state management
│   ├── data/                # Static data
│   │   └── products.js      # Product data array (15 products)
│   ├── App.jsx              # Main app component with routes
│   ├── App.css              # Global app styles
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global CSS reset
├── package.json
├── vite.config.js
├── index.html
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd ecommerce-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📖 Usage

### Running the Application

**Development Mode:**
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

**Production Build:**
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

**Preview Production Build:**
```bash
npm run preview
```
Serves the production build locally for testing.

### Testing Features

#### 1. Home Page
- View the hero section with promotional message
- Browse featured products (6 items)
- Explore product categories
- Click "Shop Now" to view all products

#### 2. Product Listing
- **Search**: Type in the search bar to filter products by name
- **Filter**: Use the category dropdown to filter by product type
- **Sort**: Use the sort dropdown to order by price or rating
- **View Details**: Click on any product card to see detailed information

#### 3. Product Details
- View large product image
- Read product description and specifications
- Adjust quantity using +/- buttons
- Click "Add to Cart" to add items (redirects to cart)

#### 4. Shopping Cart
- View all added products with quantities
- Increase/decrease item quantities
- Remove individual items
- View subtotal and total
- Click "Proceed to Checkout" for demo checkout
- Cart persists across browser sessions (localStorage)

#### 5. Navigation
- Use the navbar to navigate between Home, Products, and Cart
- Cart badge shows total number of items
- Click cart items count to view cart

## 🎨 Design Highlights

- **Color Scheme**: Dark navbar (#1a1a2e) with accent color (#e94560)
- **Typography**: Clean, modern font family (Segoe UI)
- **Responsive Grid**: Adapts from mobile (1 column) to desktop (4 columns)
- **Hover Effects**: Smooth transitions on cards and buttons
- **Mobile-First**: Optimized for mobile devices with touch-friendly interfaces
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation support

## 🔧 Configuration

### Vite Configuration
The project uses the default Vite configuration with React plugin. No additional configuration is required for basic functionality.

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Future Improvements

- **Backend Integration**: Connect to a real API for product data and user authentication
- **User Authentication**: Add login/register functionality with user profiles
- **Payment Integration**: Integrate payment gateways (Stripe, PayPal)
- **Wishlist Feature**: Allow users to save favorite products
- **Product Reviews**: Add customer review and rating system
- **Advanced Filtering**: Price range slider, multiple category selection
- **Search Autocomplete**: Implement intelligent search suggestions
- **Order History**: Track past orders and order status
- **Admin Panel**: Add dashboard for product management
- **Performance Optimization**: Implement code splitting and lazy loading
- **Testing**: Add unit tests with Jest and React Testing Library
- **TypeScript**: Migrate to TypeScript for better type safety

## 🤝 Contributing

This is a portfolio project. Feel free to fork and customize it for your own use.

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Built as a portfolio project demonstrating modern React development skills.

## 🙏 Acknowledgments

- Product images from Unsplash
- Icons and design inspiration from modern e-commerce platforms
- Built with React and Vite communities

---

**Note**: This is a frontend-only demo project. No real payments or data processing occur. All data is stored locally in the browser.
