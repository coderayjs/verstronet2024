import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../layout/CustomButton";

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
      <div className="max-w-md w-full space-y-8 bg-black/70 border border-white/15 p-10 rounded-sm shadow-2xl">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo.png"
              alt=""
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-xs tracking-[0.2em] uppercase text-zinc-400">
              Verstronet
            </p>
          </div>
          <h2 className="text-2xl font-semibold text-white">Sign in</h2>
          <p className="text-sm text-zinc-400 mt-2">
            Continue your learning mission.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs tracking-[0.12em] uppercase text-zinc-300 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-zinc-900 border border-white/15 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-white"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="block text-xs tracking-[0.12em] uppercase text-zinc-300 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-zinc-900 border border-white/15 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-white"
              placeholder="Enter password"
            />
          </div>

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
