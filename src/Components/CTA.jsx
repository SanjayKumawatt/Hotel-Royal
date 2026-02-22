import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarCheck, PhoneCall } from 'lucide-react';
import img from "../assets/hero2.jpg"

const CtaSection = () => {
    return (
        <section className="relative py-24 md:py-32 flex items-center justify-center overflow-hidden">
            
            {/* Background Image with Fixed Parallax Effect */}
            {/* Yahan apni hotel ki koi dark/elegant photo laga dena */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ 
                    backgroundImage: `url(${img})` 
                }}
            >
                {/* Dark Overlay taaki text clear dikhe */}
                <div className="absolute inset-0 bg-gray-900/85 md:bg-gray-900/80"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-3xl mx-auto"
                >
                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Plan Your Visit
                    </span>
                    
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                        Ready for an Unforgettable Stay at Hotel Royal?
                    </h2>
                    
                    <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed font-light">
                        Book your room directly with us to get the best rates, exclusive offers, and a truly royal experience in the heart of Churu.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                        <Link 
                            to="/book"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-yellow-600 text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(202,138,4,0.4)]"
                        >
                            <CalendarCheck size={20} />
                            BOOK YOUR STAY
                        </Link>
                        
                        <Link 
                            to="/contact"
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <PhoneCall size={20} />
                            CONTACT US
                        </Link>
                    </div>
                </motion.div>
            </div>
            
        </section>
    );
};

export default CtaSection;