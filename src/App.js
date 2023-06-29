import logo from "./logo.svg";
import Navigation from "./components/navigation";
import React from "react-bootstrap";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Pricing from "./routes/Pricing";
import Booking from "./routes/Booking";
import "../src/Styles/Navbar.css";
import "./App.css";
import Reviews from "./routes/Reviews";
import Vendors from "./routes/Vendors";
import LandingPage from "./components/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />{" "}
        <Route path="pricing" element={<Pricing />} />
        <Route path="booking" element={<Booking />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vendors" element={<Vendors />} />
        <Route path="personalProjects" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
