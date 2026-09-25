import "./App.css";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";

function App() {
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

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Bring Nature Home</h1>

          <p>
            Discover beautiful plants and create your own
            peaceful green paradise.
          </p>

          <button>Get Started</button>
        </div>
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="plants">
        <ProductList />
      </section>

      <section id="cart">
        <CartItem />
      </section>

    </div>
  );
}

export default App;