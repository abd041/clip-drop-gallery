import React, { useEffect } from "react";
import "./App.css";
import NavigationBar from "./components/Navbar/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import GetStarted from "./pages/GetStarted";
import FAQs from "./pages/FAQs";
import RoundImage from "./pages/RoundImage";
import PricingPage from "./pages/Pricing";
import IndustryDetail from "./pages/IndustryDetail";
import LandingPage from "./pages/LandingPage";
import Industries from "./pages/Industries";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GetStarted" element={<GetStarted />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/RoundImage" element={<RoundImage />} />
        <Route path="/Pricing" element={<PricingPage />} />
        <Route path="/IndustryDetail" element={<IndustryDetail />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/industry" element={<Industries />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
