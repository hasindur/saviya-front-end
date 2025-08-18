import React, { useState } from "react";
import Footer from "../components/Footer";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signed in as ${formData.email}`);
    // 🔐 Connect to backend here
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center p-4">
        <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden">
          {/* Left Panel */}
          <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-700 to-pink-500 text-white flex-col justify-center items-center text-center p-8">
            <img
              src="./src/assets/logo.png"
              alt="Saviya Logo"
              className="w-20 h-20 rounded-2xl shadow-lg mb-4"
            />
            <h1 className="text-3xl font-bold mb-4">SAVIYA</h1>
            <h2 className="text-xl mb-2">Welcome Back!</h2>
            <p className="max-w-sm text-sm mb-6">
              Your compassion makes a difference. Log in to continue your journey
              of helping those in need.
            </p>
            <div className="bg-white/20 rounded-lg p-4 max-w-sm text-sm italic">
              <p>
                “Saviya has helped our children’s home connect with sponsors who
                truly care. It’s changed everything for us.”
              </p>
              <span className="block mt-2 font-semibold">
                – Nirmala D., Hope Children’s Home
              </span>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10 bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold">Sign In</h2>
                <p className="text-gray-500 text-sm">
                  Enter your credentials to access your account
                </p>

                {/* Email */}
                <div>
                  <label className="block font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block font-medium mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="w-4 h-4 accent-purple-600"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-purple-600 hover:underline">
                    Forgot password?
                  </a>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-800 transition"
                >
                  Sign In
                </button>

                {/* Signup link */}
                <p className="text-center text-sm">
                  Don’t have an account?{" "}
                  <a
                    href="/signUp"
                    className="text-purple-600 font-medium hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Signin;
