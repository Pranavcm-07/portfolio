import "./App.css";
import Skills from "./scenes/skills/Skills";
import About from "./scenes/about/About";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/navbar/Navbar";
import Projects from "./scenes/projects/Projects";
function App() {
  return (
    <div className="app">
      <Navbar />
      <section
        id="Home"
        style={{
          padding: "250px 0 150px 0",
          backgroundColor: "rgba(255, 255, 255, 0.2)", // Background color with opacity
          backgroundBlendMode: "overlay", // Blend mode to apply the gradient over the background color
          backgroundImage: `
    linear-gradient(30deg, #f8f8f8 12%, transparent 12.5%, transparent 87%, #f8f8f8 87.5%, #f8f8f8),
    linear-gradient(150deg, #f8f8f8 12%, transparent 12.5%, transparent 87%, #f8f8f8 87.5%, #f8f8f8),
    linear-gradient(30deg, #f8f8f8 12%, transparent 12.5%, transparent 87%, #f8f8f8 87.5%, #f8f8f8),
    linear-gradient(150deg, #f8f8f8 12%, transparent 12.5%, transparent 87%, #f8f8f8 87.5%, #f8f8f8),
    linear-gradient(60deg, #f8f8f877 25%, transparent 25.5%, transparent 75%, #f8f8f877 75%, #f8f8f877),
    linear-gradient(60deg, #f8f8f877 25%, transparent 25.5%, transparent 75%, #f8f8f877 75%, #f8f8f877)
  `,
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px",
        }}
      >
        <Home />
      </section>
      <section style={{ position: "relative" }}>
        <section
          id="About"
          style={{
            padding: "70px 0",
          }}
        >
          <About />
        </section>
        <section
          id="Skills"
          style={{
            padding: "80px 0",
          }}
        >
          <Skills />
        </section>
      </section>
      <section
        id="Projects"
        style={{
          padding: "80px 0",
        }}
      >
        <Projects />
      </section>
    </div>
  );
}

export default App;
