// src/pages/AdminPage.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminUserPage from "./AdminUserPage";
import AdminOrganizationPage from "./AdminOrganizationPage";
import AdminDonationPage from "./AdminDonationPage";
import AdminDashboard from "./AdminDashboardPage";


export default function AdminPage() {
    return (
        <div className="w-full h-screen flex bg-white p-2">
            {/* Sidebar */}
            <div className="h-full w-[200px] p-2">
                <a href="/admin" className="block w-full h-[50px] bg-amber-400 text-white rounded-2xl text-center p-2 m-2" > Dash Board</a>
                <a href="/admin/organization" className="block w-full h-[50px] bg-amber-400 text-white rounded-2xl text-center p-2 m-2">Organization</a>
                <a href="/admin/donations" className="block w-full h-[50px] bg-amber-400 text-white rounded-2xl text-center p-2 m-2" >  Donations                </a>
                <a href="/admin/user" className="block w-full h-[50px] bg-amber-400 text-white rounded-2xl text-center p-2 m-2"  > User </a>
                <a href="/admin/settings" className="block w-full h-[50px] bg-amber-400 text-white rounded-2xl text-center p-2 m-2"> Settings </a>
            </div>

            {/* Main content */}
            <div className="flex-1 p-4 bg-gray-200 text-black m-2 rounded-2xl">
                <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route path="/organization" element={<AdminOrganizationPage />} />
                    <Route path="/donations" element={<AdminDonationPage />} />
                    <Route path="/settings" element={<h1>Settings Page</h1>} />
                    <Route path="/user" element={<AdminUserPage />} /> {/* Route to AdminUserPage */}
                </Routes>
            </div>
        </div>
    );
}
