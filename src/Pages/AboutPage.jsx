import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Coffee, Star, CheckCircle2 } from 'lucide-react';

import img from "../assets/hero2.jpg"
import img1 from "../assets/royal/img1.jpg"
import img4 from "../assets/royal/img5.jpg"
import CtaSection from '../Components/CTA';

const AboutPage = () => {
    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-white">
            
            {/* --- 1. Page Hero Banner --- */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${img}')` }}
                >
                    <div className="absolute inset-0 bg-gray-900/70"></div>
                </div>
                
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    className="relative z-10 text-center px-4"
                >
                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Discover Our Roots
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-wide">
                        About Hotel Royal
                    </h1>
                    <div className="w-20 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </motion.div>
            </section>

            {/* --- 2. Our Story Section --- */}
            <section className="py-20 md:py-32 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left: Images Collage */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <img 
                                src={img1} 
                                alt="Hotel Royal Heritage" 
                                className="rounded-2xl shadow-lg w-full h-64 md:h-100 object-contain mt-8"
                            />
                            <img 
                                src={img4} 
                                alt="Hotel Royal Interior" 
                                className="rounded-2xl shadow-lg w-full h-64 md:h-80 object-cover"
                            />
                        </div>
                        
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="w-full lg:w-1/2 space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            A Legacy of Luxury <br/> in <span className="text-yellow-600">Churu</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Welcome to Hotel Royal, where Rajasthani heritage meets modern luxury. Nestled in the heart of Churu, our hotel has been a symbol of premium hospitality for years. We believe in treating every guest like royalty.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg pb-4">
                            From our meticulously designed rooms to our world-class dining, every detail is crafted to ensure your stay is unforgettable. Experience the warmth of tradition with the comfort of tomorrow.
                        </p>
                        
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-800 font-medium">
                                <CheckCircle2 className="text-yellow-600" size={24} /> Rich Heritage Architecture
                            </li>
                            <li className="flex items-center gap-3 text-gray-800 font-medium">
                                <CheckCircle2 className="text-yellow-600" size={24} /> Award-Winning Hospitality
                            </li>
                            <li className="flex items-center gap-3 text-gray-800 font-medium">
                                <CheckCircle2 className="text-yellow-600" size={24} /> Prime Location in the City
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* --- 3. Our Core Values --- */}
            <section className="bg-gray-50 py-20 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                            Why Choose Us
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Our philosophy is simple: guest comfort is our highest priority.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: <Star size={32} />, title: "Royal Treatment", desc: "Personalized service that makes you feel like royalty." },
                            { icon: <Shield size={32} />, title: "Trust & Safety", desc: "24/7 security and utmost hygiene standards for your peace of mind." },
                            { icon: <Heart size={32} />, title: "Warm Hospitality", desc: "A welcoming smile and traditional Rajasthani warmth at every step." },
                            { icon: <Coffee size={32} />, title: "Premium Comfort", desc: "Modern amenities beautifully blended with classic aesthetics." }
                        ].map((item, index) => (
                            <motion.div 
                                key={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1, duration: 0.5 } }
                                }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="w-16 h-16 bg-yellow-50 text-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold font-serif text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <CtaSection/>
            </section>

        </div>
    );
};

export default AboutPage;