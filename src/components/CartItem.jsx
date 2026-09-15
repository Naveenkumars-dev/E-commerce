import './CartItem.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="quantity-btn"
        >
          -
        </button>
        <span className="quantity-value">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="quantity-btn"
        >
          +
        </button>
      </div>
      <div className="cart-item-total">
        <p>${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="cart-item-remove"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
