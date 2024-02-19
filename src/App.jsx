import "./App.css";
import About from "./scenes/about/About";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/navbar/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="Home" style={{ padding: "250px 0 150px 0" }}>
        <Home />
      </section>
      <section
        id="About"
        style={{ padding: "70px 0", backgroundColor: "#eee" }}
      >
        <About />
      </section>
    </div>
  );
}

export default App;
