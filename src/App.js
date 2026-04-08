import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeSections from "./components/sections/HomeSections";
import Login from "./components/auth/Login";
import ShopPage from "./pages/ShopPage";
import FlicknetSalePage from "./pages/FlicknetSalePage";
import Footer from "./components/layout/Footer";
import { OrderCheckoutProvider } from "./context/OrderCheckoutContext";
import OrderCheckoutPanel from "./components/shop/OrderCheckoutPanel";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <OrderCheckoutProvider>
      <div className="min-h-screen font-sans">
        {showLogin ? (
          <Login onBackToHome={() => setShowLogin(false)} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header onLoginClick={toggleLogin} />
                  <Hero />
                  <HomeSections />
                  <Footer />
                </>
              }
            />
            <Route
              path="/sale"
              element={
                <>
                  <Header onLoginClick={toggleLogin} />
                  <ShopPage />
                  <Footer />
                </>
              }
            />
            <Route
              path="/sale/flicknet"
              element={
                <>
                  <Header onLoginClick={toggleLogin} />
                  <FlicknetSalePage />
                  <Footer />
                </>
              }
            />
          </Routes>
        )}
      </div>
      <OrderCheckoutPanel />
    </OrderCheckoutProvider>
  );
};

export default App;
