import { useState } from "react";
import "./App.css";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="landing-page">

      <nav className="navbar">

        <h2>🌿 Paradise Nursery</h2>

        <div className="nav-links">

          <a href="#home">Home</a>

          <a href="#about">About Us</a>

          <a href="#plants">Plants</a>

          <a href="#cart">Cart</a>

        </div>

      </nav>

      {!showProductList && (
        <>
          <section id="home" className="hero">

            <div className="hero-content">

              <h1>Welcome to Paradise Nursery</h1>

              <p>
                Discover beautiful plants and create your own
                peaceful green paradise.
              </p>

              <button onClick={handleGetStartedClick}>
                Get Started
              </button>

            </div>

          </section>

          <section id="about">
            <AboutUs />
          </section>
        </>
      )}

      {showProductList && (
        <section id="plants">
          <ProductList />
        </section>
      )}

      <section id="cart">
        <CartItem />
      </section>

    </div>
  );
}

export default App;