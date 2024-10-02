import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Features from "./pages/Features";
// import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Routing Section */}

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/features" element={<Features />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
