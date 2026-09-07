import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://api.anilkumarpatnana.online";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
const [mousePosition, setMousePosition] = useState({
  x: 50,
  y: 50,
});

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/login`, {
        username,
        password,
      });

      if (response.data.success === true) {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/", { replace: true });
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login error:", err);

      setError(
        err.response?.data?.detail ||
          "Unable to connect to the login server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050816] flex items-center justify-center px-4 py-10">

      {/* Background glow */}
      <div className="absolute top-[-180px] left-[-180px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />

<div className="absolute bottom-[-180px] right-[-180px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />


      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-md">

        {/* Branding */}
        <div className="text-center mb-8">

          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20 mb-5">
            <span className="text-white text-xl font-bold">
              AK
            </span>
          </div>

          <h1 className="text-3xl font-bold text-white tracking-tight">
            Anil Kumar
          </h1>

          <p className="text-gray-400 mt-2">
            DevOps-Portfolio-website
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white/[0.07] backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

          <div className="mb-7">
            <h2 className="text-2xl font-semibold text-white">
              Welcome back
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Sign in to access the portfolio.
            </p>
          </div>

          <form onSubmit={handleLogin}>

            {/* Username */}
            <div className="mb-5">

              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  👤
                </span>

                <input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  className="w-full bg-black/20 border border-white/10 text-white placeholder-gray-500 rounded-xl py-3.5 pl-11 pr-4 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  required
                />

              </div>
            </div>

            {/* Password */}
            <div className="mb-5">

              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>

              <div className="relative">

                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  🔒
                </span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full bg-black/20 border border-white/10 text-white placeholder-gray-500 rounded-xl py-3.5 pl-11 pr-12 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3">
                <p className="text-red-400 text-sm">
                  {error}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-3.5 text-white font-semibold shadow-lg shadow-blue-500/20 transition-all duration-200 hover:scale-[1.01] hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Sign In
                  <span>→</span>
                </span>
              )}
            </button>

                   </form>

          {/* Create Account */}
          <div className="mt-5 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/register";
                }}
                className="font-semibold text-blue-400 hover:text-purple-400 transition-colors"
              >
                Create Account
              </button>
            </p>
          </div>

          {/* Security */}

          <div className="flex items-center justify-center gap-2 mt-7 text-gray-500 text-xs">
            <span>🔐</span>
            <span>Secure portfolio access</span>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-xs mt-7">
          © 2026 Anil Kumar · All rights reserved
        </p>

      </div>
    </div>
  );
}

export default Login;

