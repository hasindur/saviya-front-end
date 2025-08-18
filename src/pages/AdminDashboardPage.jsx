// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboard() {
    // Demo data
    const demoUsers = [
        { id: 1, name: "Hasindu Ranasinghe", email: "hasindu@example.com" },
        { id: 2, name: "Chamara Perera", email: "chamara@example.com" },
        { id: 3, name: "Nadeesha Silva", email: "nadeesha@example.com" },
    ];

    const demoHomes = [
        {
            _id: 1,
            registrationNumber: "ORG001",
            name: "Sunrise Elder Home",
        },
        {
            _id: 2,
            registrationNumber: "ORG002",
            name: "Happy Child Care",
        },
        {
            _id: 3,
            registrationNumber: "ORG003",
            name: "Animal Rescue Center",
        },
    ];

    const demoDonations = [
        {
            _id: 1,
            registrationNumber: "ORG001",
            organizationName: "Sunrise Elder Home",
            currentNeeds: "Beds, Blankets",
            receivedItems: "10 Blankets",
        },
        {
            _id: 2,
            registrationNumber: "ORG002",
            organizationName: "Happy Child Care",
            currentNeeds: "Books, Stationery",
            receivedItems: "20 Notebooks",
        },
        {
            _id: 3,
            registrationNumber: "ORG003",
            organizationName: "Animal Rescue Center",
            currentNeeds: "Food, Medicine",
            receivedItems: "50 kg Dog Food",
        },
    ];

    // State
    const [users, setUsers] = useState(demoUsers);
    const [homes, setHomes] = useState(demoHomes);
    const [donations, setDonations] = useState(demoDonations);
    const [loading, setLoading] = useState(true);

    // Fetch API data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersRes, homesRes, donationsRes] = await Promise.all([
                    axios.get("http://localhost:5000/api/users"),
                    axios.get("http://localhost:5000/api/homes"),
                    axios.get("http://localhost:5000/api/donations"),
                ]);

                if (usersRes.data && usersRes.data.length > 0) setUsers(usersRes.data);
                if (homesRes.data && homesRes.data.length > 0) setHomes(homesRes.data);
                if (donationsRes.data && donationsRes.data.length > 0)
                    setDonations(donationsRes.data);
            } catch (err) {
                console.error("Failed to fetch data, using demo fallback", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

            {loading && <p>Loading data...</p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Users Card */}
                <div className="bg-blue-500 text-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <h2 className="text-xl font-bold mb-2">Users</h2>
                    <p className="text-4xl font-bold">{users.length}</p>
                </div>

                {/* Organizations Card */}
                <div className="bg-green-500 text-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <h2 className="text-xl font-bold mb-2">Organizations</h2>
                    <p className="text-4xl font-bold">{homes.length}</p>
                </div>

                {/* Donations Card */}
                <div className="bg-yellow-500 text-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-200 cursor-pointer">
                    <h2 className="text-xl font-bold mb-2">Donations</h2>
                    <p className="text-4xl font-bold">{donations.length}</p>
                </div>
            </div>

            {/* Quick Actions Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="bg-blue-400 text-white p-4 rounded-xl hover:bg-blue-500 transition-colors">
                        Manage Users
                    </button>
                    <button className="bg-green-400 text-white p-4 rounded-xl hover:bg-green-500 transition-colors">
                        Manage Organizations
                    </button>
                    <button className="bg-yellow-400 text-white p-4 rounded-xl hover:bg-yellow-500 transition-colors">
                        Manage Donations
                    </button>
                </div>
            </div>
        </div>
    );
}
