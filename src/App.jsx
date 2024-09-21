import React from "react";
import { Navbar, Header, Footer } from "./components";
import "./App.css";
import {
  Home,
  About,
  AllServicePage,
  VirtualCommission,
  SoftwareTesting,
} from "./pages";

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
          <Route path="/services" element={<AllServicePage />} />
          <Route path="/services/virtualcom" element={<VirtualCommission />} />
          <Route path="/services/softwaretest" element={<SoftwareTesting />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
