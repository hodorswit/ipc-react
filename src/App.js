import React, { Component } from "react";

import "./css/components.css";
import "./css/theme.css";
import "./css/helper.css";
import "./css/override.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Contact />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
