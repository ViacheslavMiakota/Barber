import React from "react";
import "./styles/main.scss";

import About from "./components/About";
import Prices from "./components/Prices";
import Benefits from "./components/Benefits";
import Masters from "./components/Masters";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <MainPage />
      <About />
      <Prices />
      <Benefits />
      <Masters />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
