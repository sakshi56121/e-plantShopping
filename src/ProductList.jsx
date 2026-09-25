import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 25,
    category: "Indoor Plants",
    image: "/plants/snake-plant.jpg",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 30,
    category: "Indoor Plants",
    image: "/plants/peace-lily.jpg",
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 20,
    category: "Medicinal Plants",
    image: "/plants/aloe-vera.jpg",
  },
  {
    id: 4,
    name: "Money Plant",
    price: 15,
    category: "Indoor Plants",
    image: "/plants/money-plant.jpg",
  },
  {
    id: 5,
    name: "Rose Plant",
    price: 18,
    category: "Flowering Plants",
    image: "/plants/rose.jpg",
  },
  {
    id: 6,
    name: "Jade Plant",
    price: 22,
    category: "Succulents",
    image: "/plants/jade.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.items || []);

  const getCartQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <section className="product-list">
      <h1>Our Plants</h1>

      <div className="products-grid">
        {products.map((product) => {
          const quantity = getCartQuantity(product.id);

          return (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <h2>{product.name}</h2>

              <p>{product.category}</p>

              <h3>${product.price}</h3>

              <button
                onClick={() => dispatch(addItem(product))}
                disabled={quantity > 0}
              >
                {quantity > 0 ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProductList;