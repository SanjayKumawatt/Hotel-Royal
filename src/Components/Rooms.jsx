import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion'; // Added Framer Motion for premium feel
import 'swiper/css';



import {
    ChefHat,Tv, Wind, ShowerHead,
    Zap, Car, Sparkles,
    Wifi, DollarSign, CheckSquare, Armchair,
    BedDouble, Home, Users, Utensils, WashingMachine,
    Sandwich
} from 'lucide-react';

const images = import.meta.glob("../assets/royal/*.{png,jpg,jpeg,svg}", { eager: true });
const royalImages = Object.values(images).map((img) => img.default);

const images2 = import.meta.glob("../assets/heritage/*.{png,jpg,jpeg,svg}", { eager: true });
const heritage = Object.values(images2).map((img) => img.default);

const images3 = import.meta.glob("../assets/elite/*.{png,jpg,jpeg,svg}", { eager: true });
const elite = Object.values(images3).map((img) => img.default);

const roomsData = [
    {
        id: 'royal-nest',
        name: 'THE ROYAL NEST', // Thoda short kiya tab ke liye
        title: 'The Royal Nest Homestay',
        images: royalImages,
        description: 'Experience unparalleled luxury with our premium amenities and dedicated service. Perfect for those who seek the finest comfort.',
        features: [
            { icon: <Armchair className="text-yellow-600" size={28} />, text: 'Luxury interiors' },
            { icon: <Tv className="text-yellow-600" size={28} />, text: 'Smart TVs & AC' },
            { icon: <ShowerHead className="text-yellow-600" size={28} />, text: 'Modern bathrooms' },
            { icon: <Sandwich className="text-yellow-600" size={28} />, text: 'Free breakfast' },
            { icon: <WashingMachine className="text-yellow-600" size={28} />, text: 'Laundry service' },
            { icon: <Car className="text-yellow-600" size={28} />, text: 'Private parking' },
            // { icon: <Sparkles className="text-yellow-600" size={28} />, text: 'Daily housekeeping' },
            { icon: <ChefHat className="text-yellow-600" size={28} />, text: 'Kitchens in some rooms' },
        ]
    },
    {
        id: 'heritage-comfort',
        name: 'HERITAGE COMFORT',
        title: 'The Heritage Comfort Inn',
        images: heritage,
        description: 'A perfect blend of comfort and heritage. Enjoy a cozy stay with great décor and essential amenities.',
        features: [
            { icon: <Home className="text-yellow-600" size={28} />, text: 'Good décor' },
            { icon: <Wind className="text-yellow-600" size={28} />, text: 'AC / Air cooler' },
            { icon: <ShowerHead className="text-yellow-600" size={28} />, text: 'Hot water attached' },
            { icon: <Wifi className="text-yellow-600" size={28} />, text: 'Free Wi-Fi' },
            { icon: <Car className="text-yellow-600" size={28} />, text: 'Parking space' },
            { icon: <Users className="text-yellow-600" size={28} />, text: 'Spacious common area' },
        ]
    },
    {
        id: 'elite-homestay',
        name: 'ELITE HOMESTAY',
        title: 'Elite Homestay',
        images: elite,
        description: 'A neat, clean, and budget-friendly option with all the basic necessities for a pleasant stay.',
        features: [
            { icon: <BedDouble className="text-yellow-600" size={28} />, text: 'Neat & basic rooms' },
            { icon: <Wind className="text-yellow-600" size={28} />, text: 'Air conditioned' },
            { icon: <CheckSquare className="text-yellow-600" size={28} />, text: 'Clean bathrooms' },
            { icon: <Armchair className="text-yellow-600" size={28} />, text: 'Basic furniture' },
            { icon: <Utensils className="text-yellow-600" size={28} />, text: 'Restaurant access' },
            { icon: <DollarSign className="text-yellow-600" size={28} />, text: 'Budget-friendly' },
        ]
    }
];

const RoomsOffer = () => {
    const [activeTab, setActiveTab] = useState(roomsData[0].name);
    const activeRoom = roomsData.find(room => room.name === activeTab);

    return (
        <section className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Section Title */}
                <div className="text-center mb-12">
                    <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                        Our Accommodations
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
                        Best Offers on Rooms
                    </h2>
                </div>

                {/* Animated Tabs Navigation */}
                <div className="flex justify-start md:justify-center border-b border-gray-200 mb-12 overflow-x-auto hide-scrollbar gap-2 sm:gap-8">
                    {roomsData.map((room) => (
                        <button
                            key={room.id}
                            onClick={() => setActiveTab(room.name)}
                            className={`relative px-4 py-4 text-sm sm:text-base font-semibold tracking-wide uppercase whitespace-nowrap transition-colors duration-300 ${
                                activeTab === room.name ? 'text-yellow-600' : 'text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            {room.name}
                            {/* Smooth sliding underline */}
                            {activeTab === room.name && (
                                <motion.div
                                    layoutId="active-tab-indicator"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-600"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Tab Content with AnimatePresence for smooth crossfade */}
                <div className="min-h-[500px]"> {/* Min-height taaki tabs change hone pe page jhatka na khaye */}
                    <AnimatePresence mode="wait">
                        {activeRoom && (
                            <motion.div
                                key={activeRoom.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
                            >
                                {/* Left Side: Image Slider */}
                                <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl group">
                                    <Swiper
                                        modules={[Autoplay]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                                        loop={true}
                                        className="w-full h-[350px] sm:h-[450px]"
                                    >
                                        {activeRoom.images.map((img, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="w-full h-full relative">
                                                    <img
                                                        src={img}
                                                        alt={`${activeRoom.title} - ${index + 1}`}
                                                        className="w-full h-full object-contain transform transition-transform duration-1000 group-hover:scale-105"
                                                    />
                                                    {/* Halka sa dark gradient taaki image aur premium lage */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>

                                {/* Right Side: Details */}
                                <div className="w-full lg:w-1/2">
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                                        {activeRoom.title}
                                    </h3>
                                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                        {activeRoom.description}
                                    </p>
                                    
                                    {/* Features Icons - Refined Card Design */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                                        {activeRoom.features.map((feature, index) => (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 }}
                                                key={index}
                                                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group"
                                            >
                                                <div className="bg-yellow-50 p-3 rounded-full mb-3 group-hover:bg-yellow-100 transition-colors">
                                                    {feature.icon}
                                                </div>
                                                <p className="text-sm font-medium text-gray-700 text-center leading-tight">
                                                    {feature.text}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            to="/book"
                                            className="w-full sm:w-auto text-center bg-yellow-600 text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-widest hover:bg-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                        >
                                            BOOK NOW
                                        </Link>
                                        <Link
                                            to={`/rooms/${activeRoom.id}`}
                                            className="w-full sm:w-auto text-center bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3.5 rounded-full text-sm font-bold tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                        >
                                            VIEW DETAILS
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
};

export default RoomsOffer;