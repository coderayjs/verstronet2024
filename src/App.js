import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeSections from "./components/sections/HomeSections";
import Login from "./components/auth/Login";
import FlicknetSalePage from "./pages/FlicknetSalePage";
import Footer from "./components/layout/Footer";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="min-h-screen bg-[#060606] text-zinc-100 font-sans">
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
                <FlicknetSalePage />
                <Footer />
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
