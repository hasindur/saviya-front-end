import React, { useState } from "react";
import Footer from "../components/Footer";

const DonationPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        amount: "",
        goodsAmount: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Thank you, ${formData.name}, for donating $${formData.amount} and ${formData.goodsAmount} goods!`
        );
        // 🔗 Integrate payment gateway here (Stripe/PayPal)
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Main Content */}
            <div className="flex-grow flex justify-center items-center py-10 px-4 md:px-6">
                <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden">
                    {/* Left Panel */}
                    <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-700 to-pink-500 text-white flex-col justify-center items-center text-center p-8">
                        <img
                            src="./src/assets/logo.png"
                            alt="Saviya Logo"
                            className="w-20 h-20 rounded-2xl shadow-lg mb-4"
                        />
                        <h1 className="text-3xl font-bold mb-4">SAVIYA</h1>
                        <h2 className="text-xl mb-2">Support a Care Home</h2>
                        <p className="max-w-sm text-sm mb-6">
                            Your donation helps care homes provide food, shelter, education, and
                            medical care for those in need.
                        </p>
                        <div className="bg-white/20 rounded-lg p-4 max-w-sm text-sm italic">
                            <p>
                                “Every contribution, big or small, makes a real difference in
                                someone's life.”
                            </p>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="w-full md:w-1/2 flex justify-center items-center p-8 bg-gray-50">
                        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <h2 className="text-2xl font-bold">Donate Now</h2>
                                <p className="text-gray-500 text-sm">
                                    Fill in your details and support a care home.
                                </p>

                                {/* Name */}
                                <div>
                                    <label className="block font-medium mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
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

                                {/* Money Donation */}
                                <div>
                                    <label className="block font-medium mb-1">Donation Amount</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        placeholder="Enter amount"
                                        value={formData.amount}
                                        onChange={handleChange}
                                        required
                                        min="1"
                                        className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                    />
                                </div>

                                {/* Goods Donations */}
                                <div>
                                    <label className="block font-medium mb-1">Number of Goods to Donate</label>
                                    <input
                                        type="number"
                                        name="goodsAmount"
                                        placeholder="Enter quantity"
                                        value={formData.goodsAmount}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                    />
                                </div>

                                {/* Optional Message */}
                                <div>
                                    <label className="block font-medium mb-1">Message (Optional)</label>
                                    <textarea
                                        name="message"
                                        placeholder="Leave a message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
                                >
                                    Donate Now
                                </button>
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

export default DonationPage;
