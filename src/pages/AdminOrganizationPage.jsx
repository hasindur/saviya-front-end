// src/pages/AdminOrganizationPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminOrganizationPage() {
    const demoHomes = [
        {
            _id: 1,
            registrationNumber: "ORG001",
            name: "Sunrise Elder Home",
            type: "Elder Home",
            location: "Colombo",
            contactNumber: "0771234567",
            email: "sunrise@example.com",
        },
        {
            _id: 2,
            registrationNumber: "ORG002",
            name: "Happy Child Care",
            type: "Child Home",
            location: "Kandy",
            contactNumber: "0719876543",
            email: "happychild@example.com",
        },
        {
            _id: 3,
            registrationNumber: "ORG003",
            name: "Animal Rescue Center",
            type: "Animal Center",
            location: "Galle",
            contactNumber: "0723456789",
            email: "animalrescue@example.com",
        },
    ];

    const [homes, setHomes] = useState(demoHomes);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/homes") // Backend endpoint
            .then((res) => {
                if (res.data && res.data.length > 0) setHomes(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch homes, using demo data", err);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Admin Organization Page</h1>
            {loading && <p>Loading data...</p>}
            <table className="w-full border border-gray-400">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="border p-2">Reg. Number</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Type</th>
                        <th className="border p-2">Location</th>
                        <th className="border p-2">Contact</th>
                        <th className="border p-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {homes.map((home) => (
                        <tr
                            key={home._id}
                            className="border hover:bg-gray-200 cursor-pointer transition-all duration-200 transform hover:scale-105"
                        >
                            <td className="border p-2 text-center">{home.registrationNumber}</td>
                            <td className="border p-2">{home.name}</td>
                            <td className="border p-2">{home.type}</td>
                            <td className="border p-2">{home.location}</td>
                            <td className="border p-2">{home.contactNumber}</td>
                            <td className="border p-2">{home.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
