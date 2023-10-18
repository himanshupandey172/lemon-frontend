import React from "react";
import { Navbar, Header, Footer } from "./components";
import "./App.css";
import { Home, About, ServicePage, MaterialHandling } from "./pages";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicePage />} />
          <Route
            path="/services/materialHandling"
            element={<MaterialHandling />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
