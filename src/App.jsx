import "./App.css";
import Skills from "./scenes/skills/Skills";
import About from "./scenes/about/About";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/navbar/Navbar";
import Projects from "./scenes/projects/Projects";
import Footer from "./scenes/footer/Footer";
import Contact from "./scenes/contact/Contact";
import Experience from "./scenes/experience/Experience";
import ParticlesBackground from "./components/ParticlesBackground";
import { useMediaQuery } from "@mui/material";

function App() {
  const isSmallMobile = useMediaQuery("(max-width:450px)");
  const isMobile = useMediaQuery("(max-width:750px)");
  const isTablet = useMediaQuery("(max-width:900px)");

  return (
    <div className="app">
      <Navbar />

      <section
        id="Home"
        style={{
          padding: isMobile
            ? "100px 0"
            : isTablet
            ? "200px 0"
            : "250px 0 210px 0",
          backgroundColor: "black",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Home />
        <ParticlesBackground />
      </section>
      <section
        id="About"
        style={{
          padding: "70px 0 20px",
          backgroundColor: "black",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "150px",
            border: "5px solid #ffc107",
            borderRadius: "20px",
            right: isSmallMobile ? "-160px" : "-140px",
            top: "100px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "80px",
            height: "150px",
            backgroundColor: "#ffc107",
            borderRadius: "20px",
            left: isSmallMobile ? "-60px" : "-50px",
            bottom: "40%",
          }}
        />
        <About />
      </section>
      <section
        id="Skills"
        style={{
          padding: "80px 0",
          backgroundColor: "black",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Skills />
      </section>
      <section
        id="Projects"
        style={{
          padding: "80px 0",
          backgroundColor: "black",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Projects />
      </section>
      <section
        id="Experience"
        style={{
          padding: "50px 0 50px",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <Experience />
      </section>
      <section
        id="Contact"
        style={{
          padding: "80px 0",
          backgroundColor: "black",
          position: "relative",
        }}
      >
        <Contact />
      </section>
      <section
        id="Footer"
        style={{
          padding: "20px 0 10px",
          backgroundColor: "black",
          color: "white",
          position: "relative",
        }}
      >
        <Footer />
      </section>
    </div>
  );
}

export default App;
