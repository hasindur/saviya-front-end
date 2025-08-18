// components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/organization", label: "Organization" },
    ];

    return (
        <header className="bg-purple-700 shadow-md fixed w-full z-50">
            <div className="max-w-9xl mx-auto flex items-center justify-between px-4 py-2 md:px-6">

                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link to="/" className="no-underline">
                        <img src="./src/assets/logo.png" alt="Saviya Logo" className="w-10 h-10 rounded-lg" />
                    </Link>
                    <Link to="/" className="text-xl font-bold text-white no-underline">
                        Saviya.lk
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <nav className="flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="text-white hover:text-yellow-300 font-medium transition-colors duration-300 no-underline"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/signin"
                            className="px-5 py-1.5 bg-purple-400 text-white rounded-full font-semibold shadow-md hover:bg-yellow-400 hover:scale-101 transition-transform duration-300 no-underline"
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/signup"
                            className="px-5 py-1.5 bg-purple-400 text-white rounded-full font-semibold shadow-md hover:bg-yellow-400 hover:scale-101 transition-transform duration-300 no-underline"
                        >
                            Sign Up
                        </Link>

                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-purple-700 shadow-lg">
                    <div className="flex flex-col gap-3 px-6 py-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="text-white hover:text-yellow-300 font-medium transition-colors duration-300 text-left no-underline"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            to="/signin"
                            className="w-full px-4 py-2 bg-purple-700 text-white rounded-full font-medium hover:bg-purple-800 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/signup"
                            className="w-full px-4 py-2 bg-purple-700 text-white rounded-full font-medium hover:bg-purple-800 transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
