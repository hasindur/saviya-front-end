import React, { useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    role: "User",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
    homeName: "",
    homeType: "",
    registrationNo: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleRoleSelect = (role) => {
    setFormData({ ...formData, role });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreed) { alert("Please agree"); return; }
    if (formData.password !== formData.confirmPassword) { alert("Passwords do not match"); return; }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Account created successfully!");
    } catch (err) {
      alert("Signup failed: " + err.response?.data?.message || err.message);
    }
  };

  const isBeneficiary = formData.role === "Beneficiary";

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
            <h2 className="text-xl mb-2">Join Our Community!</h2>
            <p className="max-w-sm text-sm mb-6">
              Sign up to connect with care homes, schools, and sponsors. Start making a difference today and help those who need support.
            </p>
            <div className="bg-white/20 rounded-lg p-4 max-w-sm text-sm italic">
              <p>
                “Being part of Saviya has allowed me to directly help children, elders, and animals in need. It's an amazing platform for change.”
              </p>
              <span className="block mt-2 font-semibold">
                – Kasun Jinasena
              </span>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-10 bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold">Sign Up</h2>
                <p className="text-gray-500 text-sm">
                  Create your account to start helping or receiving support
                </p>

                {/* Role Selection */}
                <div className="flex gap-4 mb-3">
                  {["User", "Beneficiary"].map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => handleRoleSelect(role)}
                      className={`flex-1 py-2 rounded-lg font-medium ${formData.role === role
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        } transition`}
                    >
                      {role}
                    </button>
                  ))}
                </div>

                {/* Full Name */}
                <div>
                  <label className="block font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

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
                    placeholder="Create your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block font-medium mb-1">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                {/* Registration Number */}
                <div>
                  <label className="block font-medium mb-1">Registration Number</label>
                  <input
                    type="text"
                    name="registrationNo"
                    placeholder="Enter Registration Number"
                    value={formData.registrationNo}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                {/* Beneficiary extra fields */}
                {isBeneficiary && (
                  <>
                    <div>
                      <label className="block font-medium mb-1">Organization Name</label>
                      <input
                        type="text"
                        name="homeName"
                        placeholder="Enter name of the home or school"
                        value={formData.homeName}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-medium mb-1">Type</label>
                      <select
                        name="homeType"
                        value={formData.homeType}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      >
                        <option value="">Select type</option>
                        <option value="Children's Home">Children's Home</option>
                        <option value="Elder's Home">Elder's Home</option>
                        <option value="Animal Rescue">Animal Rescue</option>
                      </select>
                    </div>
                  </>
                )}

                {/* Agree Terms */}
                <label className="flex items-center gap-2 text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleChange}
                    className="w-4 h-4 accent-purple-600"
                  />
                  I agree to the{" "}
                  <a href="#" className="text-purple-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-600 hover:underline">
                    Privacy Policy
                  </a>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-800 transition"
                >
                  Sign Up
                </button>

                {/* Login link */}
                <p className="text-center text-sm">
                  Already have an account?{" "}
                  <a
                    href="/userLogin"
                    className="text-purple-600 font-medium hover:underline"
                  >
                    Sign In
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

export default SignUpPage;
