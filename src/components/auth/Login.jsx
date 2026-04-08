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
    } catch (error) {
      console.error("Login failed:", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-sm border border-zinc-200 bg-white px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none dark:border-white/15 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-sm border border-zinc-200/90 bg-white/90 p-10 shadow-xl dark:border-white/15 dark:bg-black/70 dark:shadow-2xl">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt=""
              className="h-10 w-auto object-contain dark:brightness-0 dark:invert"
            />
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-400">
              Verstronet
            </p>
          </div>
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            Sign in
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Continue your learning mission.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-zinc-600 dark:text-zinc-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClass}
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.12em] text-zinc-600 dark:text-zinc-300">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={inputClass}
              placeholder="Enter password"
            />
          </div>

          {error && <div className="text-sm text-red-600 dark:text-red-500">{error}</div>}

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
