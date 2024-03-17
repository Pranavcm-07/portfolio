import "./App.css";
import Skills from "./scenes/skills/Skills";
import About from "./scenes/about/About";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/navbar/Navbar";
import Projects from "./scenes/projects/Projects";
import Footer from "./scenes/footer/Footer";
import Contact from "./scenes/contact/Contact";
import Experience from "./scenes/experience/Experience";
function App() {
  return (
    <div className="app">
      <Navbar />
      <section
        id="Home"
        style={{
          padding: "250px 0 210px 0",
          backgroundColor: "black",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Home />
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
            right: "-140px",
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
            left: "-50px",
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
          padding: "80px 0 130px",
          backgroundColor: "black",
        }}
      >
        <Experience />
      </section>
      <section
        id="Contact"
        style={{
          padding: "80px 0",
          backgroundColor: "black",
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
        }}
      >
        <Footer />
      </section>
    </div>
  );
}

export default App;
