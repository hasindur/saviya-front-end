// src/pages/AdminDonationPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDonationPage() {
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

    const [donations, setDonations] = useState(demoDonations);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/donations") // Backend endpoint
            .then((res) => {
                if (res.data && res.data.length > 0) setDonations(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch donations, using demo data", err);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Admin Donation Page</h1>
            {loading && <p>Loading data...</p>}
            <table className="w-full border border-gray-400">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="border p-2">Reg. No</th>
                        <th className="border p-2">Organization Name</th>
                        <th className="border p-2">Current Needs</th>
                        <th className="border p-2">Received Items</th>
                    </tr>
                </thead>
                <tbody>
                    {donations.map((donation) => (
                        <tr
                            key={donation._id}
                            className="border hover:bg-gray-200 cursor-pointer transition-all duration-200 transform hover:scale-105"
                        >
                            <td className="border p-2 text-center">{donation.registrationNumber}</td>
                            <td className="border p-2">{donation.organizationName}</td>
                            <td className="border p-2">{donation.currentNeeds}</td>
                            <td className="border p-2">{donation.receivedItems}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
