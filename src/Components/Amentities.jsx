import React from 'react';
import { motion } from 'framer-motion';
import { 
    Wifi, 
    Utensils, 
    Clock, 
    WashingMachine, 
    Car, 
    ShieldCheck 
} from 'lucide-react';

// Amenities Data
const amenitiesData = [
    {
        id: 1,
        icon: <Wifi size={32} strokeWidth={1.5} />,
        title: 'High-Speed Wi-Fi',
        description: 'Stay connected with our complimentary high-speed internet available in all rooms and public areas.'
    },
    {
        id: 2,
        icon: <Utensils size={32} strokeWidth={1.5} />,
        title: 'Fine Dining',
        description: 'Relish authentic Rajasthani flavors and multi-cuisine dishes prepared by our expert chefs.'
    },
    {
        id: 3,
        icon: <Clock size={32} strokeWidth={1.5} />,
        title: '24/7 Room Service',
        description: 'Whether it is a midnight snack or early morning tea, our staff is always ready to serve you.'
    },
    {
        id: 4,
        icon: <WashingMachine size={32} strokeWidth={1.5} />,
        title: 'Laundry Service',
        description: 'Same-day laundry and dry-cleaning services to ensure you always look your best.'
    },
    {
        id: 5,
        icon: <Car size={32} strokeWidth={1.5} />,
        title: 'Private Parking',
        description: 'Safe, secure, and spacious complimentary parking area for all our guests.'
    },
    {
        id: 6,
        icon: <ShieldCheck size={32} strokeWidth={1.5} />,
        title: 'Top-notch Security',
        description: '24/7 CCTV surveillance and trained security personnel for your complete peace of mind.'
    }
];

const AmenitiesSection = () => {
    // Framer Motion Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15 // Ek ek karke cards aayenge
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.5, ease: "easeOut" } 
        }
    };

    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-3 block">
                        Our Facilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                        Premium Amenities
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        At Hotel Royal, Churu, we ensure that every aspect of your stay is comfortable, luxurious, and completely stress-free.
                    </p>
                </div>

                {/* Amenities Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {amenitiesData.map((amenity) => (
                        <motion.div
                            key={amenity.id}
                            variants={cardVariants}
                            className="bg-gray-50 border border-gray-100 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-yellow-600/30 group"
                        >
                            {/* Icon Box */}
                            <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-800 mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                                {amenity.icon}
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-yellow-700 transition-colors">
                                {amenity.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                {amenity.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default AmenitiesSection;