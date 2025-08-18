// src/pages/AdminUserPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AdminUserPage() {
    const demoUsers = [
        { id: 1, name: "Hasindu Ranasinghe", email: "hasindu@example.com" },
        { id: 2, name: "Chamara Perera", email: "chamara@example.com" },
        { id: 3, name: "Nadeesha Silva", email: "nadeesha@example.com" },
    ];

    const [users, setUsers] = useState(demoUsers);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/users") // Backend endpoint
            .then((res) => {
                if (res.data && res.data.length > 0) setUsers(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch users, using demo data", err);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Admin User Page</h1>
            {loading && <p>Loading data...</p>}
            <table className="w-full border border-gray-400">
                <thead>
                    <tr className="bg-gray-300">
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr
                            key={user.id}
                            className="border hover:bg-gray-200 cursor-pointer transition-all duration-200 transform hover:scale-105"
                        >
                            <td className="border p-2 text-center">{user.id}</td>
                            <td className="border p-2">{user.name}</td>
                            <td className="border p-2">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
