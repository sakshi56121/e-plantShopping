import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

const plantCategories = [
  {
    category: "Indoor Plants",
    plants: [
      {
        id: 1,
        name: "Snake Plant",
        price: 25,
        image: "/plants/snake-plant.jpg",
      },
      {
        id: 2,
        name: "Peace Lily",
        price: 30,
        image: "/plants/peace-lily.jpg",
      },
      {
        id: 4,
        name: "Money Plant",
        price: 15,
        image: "/plants/money-plant.jpg",
      },
    ],
  },

  {
    category: "Medicinal Plants",
    plants: [
      {
        id: 3,
        name: "Aloe Vera",
        price: 20,
        image: "/plants/aloe-vera.jpg",
      },
      {
        id: 7,
        name: "Tulsi",
        price: 12,
        image: "/plants/tulsi.jpg",
      },
    ],
  },

  {
    category: "Flowering Plants",
    plants: [
      {
        id: 5,
        name: "Rose Plant",
        price: 18,
        image: "/plants/rose.jpg",
      },
      {
        id: 8,
        name: "Hibiscus",
        price: 24,
        image: "/plants/hibiscus.jpg",
      },
    ],
  },

  {
    category: "Succulents",
    plants: [
      {
        id: 6,
        name: "Jade Plant",
        price: 22,
        image: "/plants/jade.jpg",
      },
      {
        id: 9,
        name: "Echeveria",
        price: 20,
        image: "/plants/echeveria.jpg",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.items || []
  );

  const getCartQuantity = (id) => {
    const item = cartItems.find(
      (item) => item.id === id
    );

    return item ? item.quantity : 0;
  };

  return (
    <section className="product-list">

      <h1>Our Plants</h1>

      {plantCategories.map((category) => (

        <div
          className="plant-category"
          key={category.category}
        >

          <h2>{category.category}</h2>

          <div className="products-grid">

            {category.plants.map((product) => {

              const quantity =
                getCartQuantity(product.id);

              return (
                <div
                  className="product-card"
                  key={product.id}
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <h2>{product.name}</h2>

                  <h3>${product.price}</h3>

                  <button
                    onClick={() =>
                      dispatch(addItem(product))
                    }
                    disabled={quantity > 0}
                  >
                    {quantity > 0
                      ? "Added to Cart"
                      : "Add to Cart"}
                  </button>

                </div>
              );
            })}

          </div>

        </div>
      ))}

    </section>
  );
}

export default ProductList;