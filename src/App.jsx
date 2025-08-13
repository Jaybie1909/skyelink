import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Partners from "./pages/Partners";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
