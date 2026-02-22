import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Crown, Handshake, Utensils } from 'lucide-react'; 

// 4 Images import kar lena apne assets folder se
import img1 from "../assets/about/img1.jpg";
import img2 from "../assets/about/img2.jpg";
import img3 from "../assets/about/img3.jpg"; // Nayi image
import img4 from "../assets/about/img4.jpg"; // Nayi image

const AboutSection = () => {
    return (
        <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-16">
                
                {/* Left Content Area (Hotel Info) */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <p className="text-yellow-600 font-semibold tracking-wider uppercase mb-3 text-sm">
                        About Hotel Royal
                    </p>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                        Experience Royalty <br /> in the Heart of Churu
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        Located in the vibrant city of <span className="font-semibold text-gray-900">Churu, Rajasthan</span>, Hotel Royal offers a perfect blend of modern luxury and traditional hospitality. Whether you are here for business or leisure, we provide beautifully designed rooms, top-notch amenities, and personalized service to make every guest feel at home.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-left">
                        <div className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                            <div className="bg-yellow-50 p-2 rounded-full">
                                <MapPin className="text-yellow-600" size={24} />
                            </div>
                            <p className="text-gray-800 font-medium">Prime Location</p>
                        </div>
                        <div className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                            <div className="bg-yellow-50 p-2 rounded-full">
                                <Crown className="text-yellow-600" size={24} />
                            </div>
                            <p className="text-gray-800 font-medium">Luxury Lifestyle</p>
                        </div>
                        <div className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                            <div className="bg-yellow-50 p-2 rounded-full">
                                <Utensils className="text-yellow-600" size={24} />
                            </div>
                            <p className="text-gray-800 font-medium">Fine Dining</p>
                        </div>
                        <div className="flex items-center space-x-4 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                            <div className="bg-yellow-50 p-2 rounded-full">
                                <Handshake className="text-yellow-600" size={24} />
                            </div>
                            <p className="text-gray-800 font-medium">Friendly Service</p>
                        </div>
                    </div>

                    <Link
                        to="/about"
                        className="inline-block bg-gray-900 text-white px-8 py-3.5 rounded-full hover:bg-yellow-600 hover:text-white transition-colors duration-300 font-semibold tracking-wide shadow-md"
                    >
                        DISCOVER MORE
                    </Link>
                </div>

                {/* Right Image Collage Area (4 Photos Staggered Layout) */}
                <div className="w-full lg:w-1/2 h-[500px] md:h-[600px] grid grid-cols-2 gap-4">
                    
                    {/* Column 1 (Pushed Down slightly) */}
                    <div className="flex flex-col gap-4 mt-8 md:mt-12">
                        <img 
                            src={img1} 
                            alt="Hotel Royal Room" 
                            className="w-full h-1/2 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" 
                        />
                        <img 
                            src={img2} 
                            alt="Hotel Royal Dining" 
                            className="w-full h-1/2 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" 
                        />
                    </div>

                    {/* Column 2 (Pushed Up slightly) */}
                    <div className="flex flex-col gap-4 mb-8 md:mb-12">
                        <img 
                            src={img3} 
                            alt="Hotel Royal Reception" 
                            className="w-full h-1/2 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" 
                        />
                        <img 
                            src={img4} 
                            alt="Hotel Royal Exterior" 
                            className="w-full h-1/2 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500" 
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;