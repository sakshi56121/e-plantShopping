import "./App.css";
import AboutUs from "./AboutUs";

function App() {
  return (
    <div className="landing-page">
      
      <nav className="navbar">
        <h2>🌿 Paradise Nursery</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#plants">Plants</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Bring Nature Home</h1>

          <p>
            Discover beautiful plants and create your own
            peaceful green paradise.
          </p>

          <button>Explore Plants</button>
        </div>
      </section>

      <section id="about">
        <AboutUs />
      </section>

    </div>
  );
}

export default App;
