import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CheckCircle2, Bed, Sofa, Wine, Wifi,
    Lock, ConciergeBell, Car, ShowerHead
} from 'lucide-react';

// Apni original image yahan import kar lena
// import img from "../assets/theroyalnexthomestay/IMG-20251025-WA0007.jpg";
// const images = import.meta.glob("../assets/theroyalnexthomestay/*.{png,jpg,jpeg,svg}", { eager: true });
// const royalImages = Object.values(images).map((img) => img.default);

import img from "../assets/royal/img1.jpg"

import img1 from "../assets/royal/img2.jpg"
import img2 from "../assets/royal/img3.jpg"
import img3 from "../assets/royal/img4.jpg"
import img4 from "../assets/royal/img5.jpg"
import img5 from "../assets/royal/img6.jpg"
import img6 from "../assets/royal/img7.jpg"
import img7 from "../assets/royal/img9.jpg"
import img8 from "../assets/royal/img10.jpg"
import img9 from "../assets/royal/img12.jpg"
import img10 from "../assets/royal/img13.jpg"
import img11 from "../assets/royal/img14.jpg"
import img12 from "../assets/royal/img15.jpg"
import img13 from "../assets/royal/img16.jpg"



const royalImages = [
img1,
img2,
img3,
img4,
img5,
img6,
img7,
img8,
img9,
img10,
img11,
img12,
img13,
];



const roomsData = [
    {
        id: 'royal-nest',
        name: 'THE ROYAL NEST HOMESTAY',
        title: 'The Royal Nest Homestay',
        heroDescription: 'Our Standard Room offers comfort and convenience at an affordable price. Perfect for solo travelers or short stays, it includes all essential amenities in a cozy, heritage-inspired setting.',
        images: royalImages,
        inRoomComforts: {
            title: 'In-Room Comforts',
            description: 'Experience true comfort with our well-designed rooms, modern amenities, and dedicated service that make you feel right at home.',
            features: [
                'Spacious room with attached modern bathroom',
                'Complimentary Wi-Fi and Smart TV for entertainment',
                'Daily housekeeping and room service'
            ],
            amenitiesCount: '10+',
            roomServicesCount: '10+'
        },
        primaryAmenities: [
            { icon: <Bed size={28} strokeWidth={1.5} />, text: 'Premium Bed Quality' },
            { icon: <Sofa size={28} strokeWidth={1.5} />, text: 'Spacious Living Space' },
            { icon: <Wine size={28} strokeWidth={1.5} />, text: 'Minibar' },
            { icon: <Wifi size={28} strokeWidth={1.5} />, text: 'Wi-Fi and Smart TV' },
            { icon: <Lock size={28} strokeWidth={1.5} />, text: 'Electronic Safe' },
            { icon: <ConciergeBell size={28} strokeWidth={1.5} />, text: '24/7 Room Service' },
            { icon: <Car size={28} strokeWidth={1.5} />, text: 'Private Parking' },
            { icon: <ShowerHead size={28} strokeWidth={1.5} />, text: 'Modern Geyser' },
        ]
    }
];

const RoomDetailPage = () => {
    const room = roomsData[0];

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    if (!room) return <div className="h-screen flex items-center justify-center text-2xl font-serif">Room not found!</div>;

    return (
        <div className="bg-white min-h-screen">
            
            {/* --- 1. Hero Section --- */}
            <section
                className="relative h-[70vh] md:h-[90vh] flex items-center justify-center"
            >
                {/* Background Image with Fixed Effect */}
                <div 
                    className="absolute inset-0 "
                    style={{ backgroundImage: `url(${img})` }}
                >
                    <div className="absolute inset-0 bg-gray-900/60"></div>
                </div>

                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="container mx-auto px-4 relative z-10 text-center"
                >
                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Signature Suite
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wide drop-shadow-lg">
                        {room.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md">
                        {room.heroDescription}
                    </p>
                </motion.div>
            </section>

            {/* --- 2. In-Room Comforts Section --- */}
            <section className="py-20 md:py-32 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        
                        {/* Left Content */}
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                            className="w-full lg:w-1/2 space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                                    {room.inRoomComforts.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {room.inRoomComforts.description}
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {room.inRoomComforts.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="text-yellow-600 mt-1 flex-shrink-0" size={20} />
                                        <span className="text-gray-700 font-medium text-lg">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Stats */}
                            <div className="flex gap-12 py-6 border-y border-gray-100">
                                <div>
                                    <p className="text-4xl font-serif font-bold text-yellow-600 mb-1">{room.inRoomComforts.amenitiesCount}</p>
                                    <p className="text-sm font-bold tracking-widest uppercase text-gray-400">Amenities</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-serif font-bold text-yellow-600 mb-1">{room.inRoomComforts.roomServicesCount}</p>
                                    <p className="text-sm font-bold tracking-widest uppercase text-gray-400">Services</p>
                                </div>
                            </div>

                            <Link
                                to="/book"
                                className="inline-block bg-gray-900 text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-yellow-600 transition-colors duration-300 shadow-lg transform hover:-translate-y-1"
                            >
                                BOOK THIS ROOM
                            </Link>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                                <img
                                    src={img} // Better fallback
                                    alt={room.title}
                                    className="w-full h-[500px] object-contain hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 border-4 border-white/20 rounded-2xl m-4 pointer-events-none"></div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* --- 3. Primary Room Amenities Section --- */}
            <section className="bg-gray-900 py-20 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-3 block">
                            Luxury Facilities
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Room Amenities & Services
                        </h2>
                        <div className="w-20 h-1 bg-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
                            We provide top-notch services and modern amenities to ensure your stay is completely comfortable and memorable.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8"
                    >
                        {room.primaryAmenities.map((amenity, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeUp}
                                className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-yellow-600/50 hover:bg-gray-800/80 transition-all duration-300 group"
                            >
                                <div className="p-4 bg-gray-900 rounded-full mb-4 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300 text-yellow-500 shadow-inner">
                                    {amenity.icon}
                                </div>
                                <p className="font-semibold text-gray-200 text-center tracking-wide">{amenity.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* --- 4. Scenic Surroundings Section (Gallery) --- */}
            <section className="py-20 md:py-32 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                            Room Gallery
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Take a visual tour of what awaits you.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {room.images.map((imgSrc, index) => (
                            <motion.div 
                                key={index} 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                            >
                                <img
                                    src={imgSrc}
                                    alt={`View ${index + 1}`}
                                    className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-110"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default RoomDetailPage;