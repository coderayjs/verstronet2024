import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../layout/CustomButton";
import verstronet from "../../assets/verstronet.png";

const Login = ({ onBackToHome }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-10 rounded-xl shadow-lg">
        {/* ... (rest of the JSX remains the same) ... */}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* ... (form inputs remain the same) ... */}

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <div>
            <CustomButton
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isLoading}>
              {isLoading ? "Signing in..." : "Sign in"}
            </CustomButton>
          </div>
        </form>
        <div className="mt-4">
          <CustomButton
            onClick={onBackToHome}
            variant="secondary"
            className="w-full"
            disabled={isLoading}>
            Back to Home
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
