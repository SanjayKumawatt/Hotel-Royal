import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CheckCircle2, Wind, Utensils, DollarSign, BedDouble,
    Armchair, CheckSquare, Sparkles, Wifi
} from 'lucide-react';


// Apni original image yahan import kar lena
// import img from "../assets/theroyalnexthomestay/IMG-20251025-WA0007.jpg";
// const images3 = import.meta.glob("../assets/eliehomestay/*.{png,jpg,jpeg,svg}", { eager: true });
// const eliteImages = Object.values(images3).map((img) => img.default);

import img from "../assets/elite/img1.jpg"
import img2 from "../assets/elite/img2.jpg"
import img3 from "../assets/elite/img3.jpg"
import img4 from "../assets/elite/img4.jpg"
import img5 from "../assets/elite/img5.jpg"

const eliteImages = [
img2,
img3,
img4,
img5,
];

// Data specifically for "Elite Homestay"
const room = {
    id: 'elite-homestay',
    name: 'ELITE HOMESTAY',
    title: 'Elite Homestay',
    heroDescription: 'A neat, clean, and budget-friendly option with all the basic necessities for a pleasant stay.',
    images: eliteImages,
    inRoomComforts: {
        title: 'In-Room Comforts',
        description: 'A neat, clean, and budget-friendly option with all the basic necessities for a pleasant stay. Features basic furniture and nearby restaurant access.',
        features: [
            'Neat and basic rooms',
            'Air conditioned comfort',
            'Shared or attached clean bathrooms',
            'Essential basic furniture',
            'Easy nearby restaurant access'
        ],
        amenitiesCount: '5+',
        roomServicesCount: '3+'
    },
    primaryAmenities: [
        { icon: <BedDouble size={28} strokeWidth={1.5} />, text: 'Neat & Basic Rooms' },
        { icon: <Wind size={28} strokeWidth={1.5} />, text: 'Air Conditions' },
        { icon: <CheckSquare size={28} strokeWidth={1.5} />, text: 'Clean Bathrooms' },
        { icon: <Armchair size={28} strokeWidth={1.5} />, text: 'Basic Furniture' },
        { icon: <Utensils size={28} strokeWidth={1.5} />, text: 'Nearby Restaurant' },
        { icon: <DollarSign size={28} strokeWidth={1.5} />, text: 'Budget-Friendly' },
        { icon: <Sparkles size={28} strokeWidth={1.5} />, text: 'Clean Rooms' },
        { icon: <Wifi size={28} strokeWidth={1.5} />, text: 'Wi-Fi Available' },
    ]
};

const EliteHomestayPage = () => {
    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-white min-h-screen">
            
            {/* --- 1. Hero Section --- */}
            <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center">
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
                        Budget Collection
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
                                    src={img} 
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
                            Basic Needs
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Room Amenities
                        </h2>
                        <div className="w-20 h-1 bg-yellow-600 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
                            We provide all the basic necessities to ensure your stay is completely comfortable and pleasant.
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

export default EliteHomestayPage;