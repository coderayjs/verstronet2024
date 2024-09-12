import React, { useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import Login from "./components/auth/Login"

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 font-sans text-gray-100">
      <div className="bg-black bg-opacity-30 min-h-screen">
        {showLogin ? (
          <Login onBackToHome={() => setShowLogin(false)} />
        ) : (
          <>
            <Header onLoginClick={toggleLogin} />
            <Hero />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
