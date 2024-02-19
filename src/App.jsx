import "./App.css";
import Intro from "./scenes/intro/Intro";
import Navbar from "./scenes/navbar/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <section style={{ padding: "250px 0" }}>
        <Intro />
      </section>
    </div>
  );
}

export default App;
