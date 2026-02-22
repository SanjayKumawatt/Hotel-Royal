import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Users, 
    Maximize, 
    BedDouble, 
    Wifi, 
    Tv, 
    Wind, 
    Coffee, 
    Bath,
    CheckCircle2
} from 'lucide-react';

import img from "../assets/hero2.jpg"

import img1 from "../assets/royal/img1.jpg"
import img2 from "../assets/heritage/img1.jpg"
import img3 from "../assets/elite/img1.jpg"


// Room Data with Added Details (Price, Size, Guests) for a realistic look
const roomsData = [
    {
        id: 'royal-nest',
        name: 'The Royal Nest Homestay',
        image: img1,
        description: 'Experience unparalleled luxury with our premium amenities and dedicated service. Perfect for those who seek the finest comfort.',
        // price: '₹4,500',
        size: '400 sq.ft',
        guests: '2-3 Guests',
        bed: 'King Size Bed',
        features: [
            { icon: <Tv size={18} />, text: 'Smart TV & AC' },
            { icon: <Bath size={18} />, text: 'Modern Bathroom' },
            { icon: <Wifi size={18} />, text: 'Free Wi-Fi' },
            { icon: <Coffee size={18} />, text: 'Breakfast Included' }
        ],
        highlights: ['Luxury interiors', '24x7 power backup', 'Daily housekeeping']
    },
    {
        id: 'heritage-comfort',
        name: 'The Heritage Comfort Inn',
        image: img2,
        description: 'A perfect blend of comfort and heritage. Enjoy a cozy stay with great décor and essential amenities.',
        // price: '₹3,000',
        size: '300 sq.ft',
        guests: '2 Guests',
        bed: 'Queen Size Bed',
        features: [
            { icon: <Wind size={18} />, text: 'AC / Air Cooler' },
            { icon: <Bath size={18} />, text: 'Hot Water' },
            { icon: <Wifi size={18} />, text: 'Free Wi-Fi' },
            { icon: <Coffee size={18} />, text: 'Room Service' }
        ],
        highlights: ['Good décor', 'Parking space', 'Spacious common area']
    },
    {
        id: 'elite-homestay',
        name: 'Elite Homestay',
        image: img3,
        description: 'A neat, clean, and budget-friendly option with all the basic necessities for a pleasant stay.',
        // price: '₹1,800',
        size: '250 sq.ft',
        guests: '1-2 Guests',
        bed: 'Twin/Double Bed',
        features: [
            { icon: <Wind size={18} />, text: 'Air Conditioned' },
            { icon: <Bath size={18} />, text: 'Clean Bathrooms' },
            { icon: <Wifi size={18} />, text: 'Wi-Fi Access' }
        ],
        highlights: ['Neat & basic rooms', 'Budget-friendly', 'Nearby restaurant access']
    }
];

const RoomsPage = () => {
    // Animation Variant
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            
            {/* --- 1. Page Hero Banner --- */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="absolute inset-0 bg-gray-900/75"></div>
                </div>
                
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="relative z-10 text-center px-4"
                >
                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Our Accommodations
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-wide">
                        Rooms & Suites
                    </h1>
                    <div className="w-20 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </motion.div>
            </section>

            {/* --- 2. Rooms Listing Section --- */}
            <section className="py-20 md:py-32 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="space-y-16">
                    {roomsData.map((room, index) => (
                        <motion.div 
                            key={room.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col lg:flex-row group"
                        >
                            {/* Room Image */}
                            <div className="w-full lg:w-5/12 relative overflow-hidden h-72 lg:h-auto">
                                <img 
                                    src={room.image} 
                                    alt={room.name} 
                                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-md">
                                    {room.price} <span className="text-xs font-normal">/ Night</span>
                                </div>
                            </div>

                            {/* Room Details */}
                            <div className="w-full lg:w-7/12 p-8 lg:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4 font-medium">
                                        <span className="flex items-center gap-1.5"><Maximize size={16} className="text-yellow-600"/> {room.size}</span>
                                        <span className="flex items-center gap-1.5"><Users size={16} className="text-yellow-600"/> {room.guests}</span>
                                        <span className="flex items-center gap-1.5"><BedDouble size={16} className="text-yellow-600"/> {room.bed}</span>
                                    </div>
                                    
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 group-hover:text-yellow-700 transition-colors">
                                        {room.name}
                                    </h2>
                                    
                                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                                        {room.description}
                                    </p>

                                    {/* Small Icon Features */}
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                                        {room.features.map((feature, i) => (
                                            <div key={i} className="flex flex-col items-center justify-center p-3 bg-gray-50 rounded-lg border border-gray-100 text-center">
                                                <div className="text-gray-700 mb-2">{feature.icon}</div>
                                                <span className="text-xs font-semibold text-gray-600">{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Text Highlights */}
                                    <ul className="mb-8 space-y-2">
                                        {room.highlights.map((highlight, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                                <CheckCircle2 size={16} className="text-yellow-500" />
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100 mt-auto">
                                    <Link 
                                        to="/book"
                                        className="w-full sm:w-auto text-center bg-yellow-600 text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-widest hover:bg-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                                    >
                                        BOOK THIS ROOM
                                    </Link>
                                    <Link 
                                        to={`/rooms/${room.id}`}
                                        className="w-full sm:w-auto text-center bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-full text-sm font-bold tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                    >
                                        ROOM DETAILS
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default RoomsPage;