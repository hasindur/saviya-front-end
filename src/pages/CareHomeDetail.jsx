import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { careHomes } from './Organization';

const CareHomeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const home = careHomes.find(h => h.id === parseInt(id));

    if (!home) {
        return <h2 className="text-center py-5">Care Home Not Found</h2>;
    }

    const handleSponsor = () => {
        navigate('/payment', { state: { homeName: home.name } });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <div className="container mx-auto py-10 px-4">
                <div className="bg-white shadow-lg border rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-6">

                    {/* Left: Image */}
                    <div className="md:w-1/2 flex justify-center items-start">
                        <img
                            src={home.image}
                            alt={home.name}
                            className="rounded-xl shadow-md w-full md:max-w-md object-cover"
                        />
                    </div>

                    {/* Right: Details */}
                    <div className="md:w-1/2 flex flex-col gap-4">
                        <h1 className="text-3xl font-bold text-purple-700">{home.name}</h1>
                        <p className="text-gray-500 mb-2">
                            {home.category} | {home.location}
                        </p>

                        {/* Description */}
                        <div className="mb-4">
                            <h5 className="text-lg font-semibold mb-2">Description</h5>
                            <p className="text-gray-700">
                                {home.description.length > 100
                                    ? home.description.slice(0, 100) + '...'
                                    : home.description}
                            </p>
                        </div>

                        {/* Current Needs */}
                        <div className="mb-4">
                            <h5 className="text-lg font-semibold mb-2">Current Needs</h5>
                            <div className="flex flex-wrap gap-2">
                                {home.needs.map((need, index) => (
                                    <span
                                        key={index}
                                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {need}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="mb-4">
                            <h5 className="text-lg font-semibold mb-2">Contact Details</h5>
                            <p className="text-gray-700">Phone: +94 123 456 789</p>
                            <p className="text-gray-700">Email: info@example.com</p>
                        </div>

                        {/* Sponsor Button */}
                        <button
                            onClick={handleSponsor}
                            className="mt-auto py-3 w-full bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
                        >
                            Sponsor Now
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CareHomeDetail;
