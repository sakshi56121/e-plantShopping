import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleContinueShopping = () => {
    window.location.hash = "plants";
  };

  const handleCheckout = () => {
    alert("Checkout functionality coming soon!");
  };

  if (cartItems.length === 0) {
    return (
      <section className="cart-page" id="cart">

        <h1>Shopping Cart</h1>

        <p>Your cart is empty.</p>

        <button onClick={handleContinueShopping}>
          Continue Shopping
        </button>

      </section>
    );
  }

  return (
    <section className="cart-page" id="cart">

      <h1>Shopping Cart</h1>

      <div className="cart-items">

        {cartItems.map((item) => (

          <div
            className="cart-item"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />

            <div className="cart-item-details">

              <h2>{item.name}</h2>

              <p>
                Price: ${item.price}
              </p>

              <div className="quantity-controls">

                <button
                  onClick={() =>
                    handleDecrement(item)
                  }
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    handleIncrement(item)
                  }
                >
                  +
                </button>

              </div>

              <p>
                Subtotal: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() =>
                  handleRemove(item.id)
                }
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>

      <div className="cart-summary">

        <h2>
          Total: ${totalAmount.toFixed(2)}
        </h2>

        <button
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>

        <button
          onClick={handleCheckout}
        >
          Checkout
        </button>

      </div>

    </section>
  );
}

export default CartItem;