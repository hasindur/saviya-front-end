// CareHomeOrganization.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import BgImg from "../assets/child-bg.jpg";

export const careHomes = [
    {
        id: 1,
        name: "Sunshine Children's Home",
        category: "Children Care",
        location: "Colombo, Western Province",
        description: "A loving home for 24 children aged 6-17 years old offering childcare, education and care.",
        image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&h=200&fit=crop",
        needs: ["Money", "Volunteers", "Books", "Beds", "School Supplies"],

    },
    {
        id: 2,
        name: "Golden Year's Elderly Care",
        category: "Elder Care",
        location: "Kandy, Central Province",
        description: "Providing nursing and dignity to 45 elderly residents with 24/7 medical care.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=200&fit=crop",
        needs: ["Money", "Medical Supplies", "Volunteers", "Wheelchairs"],

    },
    {
        id: 3,
        name: "Hope Children's Village",
        category: "Children Care",
        location: "Galle, Southern Province",
        description: "A safe haven for 32 children in need with education and healthcare services.",
        image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop",
        needs: ["Money", "Toys", "Library Books", "Computers", "Uniforms"],

    },
    {
        id: 4,
        name: "Paws & Hearts Animal Shelter",
        category: "Animal Care",
        location: "Negombo, Western Province",
        description: "A safe haven for abandoned and rescued animals providing medical care, shelter and rehabilitation.",
        image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=300&h=200&fit=crop",
        needs: ["Money", "Volunteers", "Cages", "Pet Food", "Medical Supplies"],

    },
    {
        id: 5,
        name: "Bright Future Orphanage",
        category: "Children Care",
        location: "Matara, Southern Province",
        description: "Supporting 45 children with housing, education, and life skills training for a better future.",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop",
        needs: ["Money", "Volunteers", "Computers", "Sports Equipment", "Beds"],

    },
    {
        id: 6,
        name: "Community Support Center",
        category: "Others",
        location: "Jaffna, Northern Province",
        description: "Providing various community services including food distribution, job training and social support.",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop",
        needs: ["Money", "Volunteers", "Food Items", "Training Materials"],

    },
];

const Organization = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All types');

    const categories = ['All types', 'Elder Care', 'Children Care', 'Animal Care', 'Others'];

    const filteredHomes = careHomes.filter(home => {
        const matchesSearch = home.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            home.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            home.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            home.needs.some(need => need.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'All types' || home.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
            {/* Bootstrap CSS */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

            <div className="flex flex-col min-h-screen">
                {/* Hero Section */}

                <section className="hero-section min-h-[400px] flex items-center justify-center text-purple-700 bg-purple-100 relative px-4 md:px-0 pt-10 mx-5 md:mx-0 rounded-3xl">


                    <div className="max-w-3xl text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Care Homes</h1>
                        <p className="text-lg md:text-xl mb-6">
                            Find and support children's homes and elderly care facilities across Sri Lanka
                        </p>

                        {/* Search Bar */}
                        <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-full shadow-lg overflow-hidden">
                            <input
                                type="text"
                                placeholder="Search for care homes..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="flex-1 px-6 py-3 text-gray-700 outline-none focus:ring-2 rounded-l-full"
                            />
                            <button
                                className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-r-full hover:bg-purple-800 transition-colors flex items-center justify-center gap-2"
                            >
                                <i className="fas fa-search"></i>
                                Search
                            </button>
                        </div>
                    </div>
                </section>

                {/* Filter Tabs */}
                <section className="py-4 bg-light">
                    <div className="container">
                        <ul className="nav nav-pills justify-content-center flex-wrap">
                            {categories.map(category => (
                                <li key={category} className="nav-item me-2 mb-2">
                                    <button
                                        className={`nav-link ${selectedCategory === category ? 'active' : ''}`}
                                        style={{
                                            backgroundColor: selectedCategory === category ? '#5b21b6' : 'transparent',
                                            borderColor: selectedCategory === category ? '#5b21b6' : '#6c757d',
                                            color: selectedCategory === category ? 'white' : '#6c757d',
                                            border: '1px solid',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Care Home Cards */}
                <section className="py-5">
                    <div className="container">
                        <div className="row g-4">
                            {filteredHomes.map(home => (
                                <div key={home.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                    <div className="card h-100 shadow-sm border-0" style={{ transition: 'all 0.3s ease' }}>
                                        <div className="position-relative">
                                            <img
                                                src={home.image}
                                                className="card-img-top"
                                                alt={home.name}
                                                style={{ height: '200px', objectFit: 'cover' }}
                                            />

                                        </div>
                                        <div className="card-body d-flex flex-column p-4">
                                            <div className="d-flex justify-content-between align-items-start mb-2">
                                                <h5 className="card-title mb-0 fw-bold">{home.name}</h5>
                                                <span className="badge bg-light text-dark ms-2 text-nowrap">
                                                    {home.category}
                                                </span>
                                            </div>

                                            {/* Location */}
                                            <div className="mb-2">
                                                <small className="text-muted">
                                                    <i className="fas fa-map-marker-alt me-1"></i>
                                                    {home.location}
                                                </small>
                                            </div>

                                            <p className="card-text text-muted flex-grow-1 lh-base mb-3">
                                                {home.description}
                                            </p>

                                            {/* Needs Section */}
                                            <div className="mb-3">
                                                <small className="fw-semibold text-dark d-block mb-2">Current Needs:</small>
                                                <div className="d-flex flex-wrap gap-1">
                                                    {home.needs.slice(0, 3).map((need, index) => (
                                                        <span key={index} className="badge bg-light text-dark border" style={{ fontSize: '0.7rem' }}>
                                                            {need}
                                                        </span>
                                                    ))}
                                                    {home.needs.length > 3 && (
                                                        <span className="badge bg-secondary" style={{ fontSize: '0.7rem' }}>
                                                            +{home.needs.length - 3} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-2">
                                                <div className="row g-2">
                                                    <div className="col-6">
                                                        <Link
                                                            to={`/carehome/${home.id}`}  // ✅ this will navigate to CareHomeDetail
                                                            className="btn btn-outline-secondary w-100 btn-sm d-flex align-items-center justify-content-center"
                                                            style={{ borderColor: '#5b21b6', color: '#5b21b6', transition: 'all 0.3s ease' }}
                                                            onMouseOver={(e) => { e.target.style.backgroundColor = '#5b21b6'; e.target.style.color = 'white'; }}
                                                            onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#5b21b6'; }}
                                                        >
                                                            <i className="fas fa-info-circle me-1"></i>
                                                            Learn More
                                                        </Link>

                                                    </div>
                                                    <div className="col-6">
                                                        <Link
                                                            to="/payment"
                                                            className="btn w-100 btn-sm text-white d-flex align-items-center justify-content-center fw-semibold"
                                                            style={{
                                                                backgroundColor: '#5b21b6',
                                                                borderColor: '#5b21b6',
                                                                transition: 'all 0.3s ease'
                                                            }}
                                                            onMouseOver={(e) => e.target.style.backgroundColor = '#4c1d95'}
                                                            onMouseOut={(e) => e.target.style.backgroundColor = '#5b21b6'}
                                                        >
                                                            <i className="fas fa-heart me-1"></i>
                                                            Support Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredHomes.length === 0 && (
                            <div className="row">
                                <div className="col-12 text-center py-5">
                                    <i className="fas fa-search fa-3x text-muted mb-3"></i>
                                    <h4 className="text-muted">No care homes found</h4>
                                    <p className="text-muted">Try adjusting your search criteria</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <Footer />
            </div>

            {/* Custom Styles */}
            <style>{`
                .card {
                    transition: all 0.3s ease;
                }
                .card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 20px rgba(0,0,0,0.15) !important;
                }
            `}</style>
        </>
    );
};

export default Organization;
