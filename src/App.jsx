import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import About from "./pages/About";

import Contact from "./pages/Contact";
import Products from "./pages/Products";

import Footer from "./components/Footer";
import Services from "./pages/Services";
import ProductDetails from "./pages/ProductDetails";

import product1 from "./assets/product1.webp";
import product2 from "./assets/product2.webp";
import product3 from "./assets/product3.webp";
import product4 from "./assets/product4.webp";

function App() {
  const products = [
    {
      id: 1,
      name: "IO Coffee Table",
      price: "$695–$850",
      image: product1,
      description: "Solid in construction, simple in form",
      colorsAvailable: "3 colors available",
      labels: ["SALE", "NEW"],
    },
    {
      id: 2,
      name: "Ramila Arm Chair",
      price: "$350",
      image: product2,
      description: "Solid in construction, simple in form",
      colorsAvailable: "2 colors available",
    },
    {
      id: 3,
      name: "Glass Coffee Table",
      price: "$1,050–$1,250",
      image: product3,
      description: "Solid in construction, simple in form",
      colorsAvailable: "2 sizes available",
    },
    {
      id: 4,
      name: "Miruna Floor Lamp",
      price: "$895",
      image: product4,
      description: "Solid in construction, simple in form",
      colorsAvailable: "4 colors available",
    },
    {
      id: 5,
      name: "IO Coffee Table",
      price: "$695–$850",
      image: product1,
      description: "Solid in construction, simple in form",
      colorsAvailable: "3 colors available",
      labels: ["SALE", "NEW"],
    },
    {
      id: 6,
      name: "Ramila Arm Chair",
      price: "$350",
      image: product2,
      description: "Solid in construction, simple in form",
      colorsAvailable: "2 colors available",
    },
    {
      id: 7,
      name: "Glass Coffee Table",
      price: "$1,050–$1,250",
      image: product3,
      description: "Solid in construction, simple in form",
      colorsAvailable: "2 sizes available",
    },
    {
      id: 8,
      name: "Miruna Floor Lamp",
      price: "$895",
      image: product4,
      description: "Solid in construction, simple in form",
      colorsAvailable: "4 colors available",
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        {/* Routing ------------------------Section */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="/product/:productId"
            element={<ProductDetails products={products} />}
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
