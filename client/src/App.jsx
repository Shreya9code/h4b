import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AppProvider } from "./context/AppContext";

import "./App.css";
import HomePage from "./pages/HomePage";
import DiseaseDetectionPage from "./pages/DiseaseDetectionPage";
import WeatherForecastPage from "./pages/WeatherForecastPage";
import CommunityPage from "./pages/CommunityPage";
import Marketplace from "./pages/MarketPlace";
import SellerDashboard from "./pages/SellerDashboard";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/disease-detection" element={<DiseaseDetectionPage />} />
          <Route path="/weather-forecast" element={<WeatherForecastPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/marketplace/product/:id" element={<ProductDetail />} />
          <Route path="/marketplace/seller" element={<SellerDashboard />} />
          <Route path="/marketplace/add-product" element={<AddProduct />} />
          <Route path="/marketplace/cart" element={<Cart />} />
          <Route path="/marketplace/checkout" element={<Checkout />} />
          {/* Add other routes */}
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
