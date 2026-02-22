import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Calendar, User, Phone, Mail, Send, 
    CheckCircle2, ShieldCheck, Clock, MapPin, CheckCircle
} from 'lucide-react';

import img from "../assets/hero.avif"

const BookingPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        checkIn: '',
        checkOut: '',
        adults: '1',
        children: '0',
        roomType: 'royal-nest',
        fullName: '',
        email: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Yahaan API integration ya backend booking logic aayega
        console.log('Booking submitted:', formData);
        
        // Premium success message dikhane ke liye state change
        setIsSubmitted(true);
        
        // Form reset karna chaho toh yahan kar sakte ho
    };

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const slideRight = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            
            {/* --- 1. Hero Banner --- */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${img}')` }}
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
                        Reservation
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 tracking-wide">
                        Book Your Stay
                    </h1>
                    <div className="w-20 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </motion.div>
            </section>

            {/* --- 2. Booking Section --- */}
            <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    
                    {/* Left Column: Info & Perks */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={slideRight}
                        className="w-full lg:w-5/12 space-y-10"
                    >
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                                Why Book Directly With Us?
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                Booking directly through our official website ensures that you get the best possible rates, exclusive perks, and a seamless reservation experience.
                            </p>
                            
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-yellow-50 p-3 rounded-full text-yellow-600 flex-shrink-0">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Best Rate Guarantee</h4>
                                        <p className="text-sm text-gray-500 mt-1">We promise the lowest price when you book directly.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-yellow-50 p-3 rounded-full text-yellow-600 flex-shrink-0">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Flexible Check-in</h4>
                                        <p className="text-sm text-gray-500 mt-1">Priority for early check-in or late check-out requests.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-yellow-50 p-3 rounded-full text-yellow-600 flex-shrink-0">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">No Hidden Fees</h4>
                                        <p className="text-sm text-gray-500 mt-1">Transparent pricing with no surprise booking charges.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Contact Box */}
                        <div className="bg-gray-900 rounded-2xl p-8 text-white shadow-xl">
                            <h3 className="text-xl font-serif font-bold mb-6">Need Help?</h3>
                            <div className="space-y-4">
                                <p className="flex items-center gap-3 text-gray-300">
                                    <Phone className="text-yellow-500" size={18} /> +91 98765 43210
                                </p>
                                <p className="flex items-center gap-3 text-gray-300">
                                    <Mail className="text-yellow-500" size={18} /> booking@hotelroyal.com
                                </p>
                                <p className="flex items-center gap-3 text-gray-300">
                                    <MapPin className="text-yellow-500" size={18} /> Churu, Rajasthan
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: The Form */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="w-full lg:w-7/12"
                    >
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
                            
                            {/* Decorative Top Border */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-600"></div>

                            {isSubmitted ? (
                                /* Success Message UI */
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-16 text-center"
                                >
                                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Reservation Requested!</h2>
                                    <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                                        Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. We have received your booking request for the <span className="font-semibold text-gray-900">{formData.roomType.replace('-', ' ')}</span>. Our team will contact you shortly to confirm your stay.
                                    </p>
                                    <button 
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-yellow-600 font-semibold hover:text-yellow-700 underline underline-offset-4"
                                    >
                                        Submit another request
                                    </button>
                                </motion.div>
                            ) : (
                                /* Actual Form */
                                <>
                                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                                        Reservation Details
                                    </h2>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Row 1: Dates */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="checkIn" className="block text-sm font-semibold text-gray-700 mb-2">Check-in Date *</label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Calendar size={18} /></span>
                                                    <input type="date" id="checkIn" name="checkIn" required value={formData.checkIn} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50/50 hover:bg-white text-gray-700" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="checkOut" className="block text-sm font-semibold text-gray-700 mb-2">Check-out Date *</label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Calendar size={18} /></span>
                                                    <input type="date" id="checkOut" name="checkOut" required value={formData.checkOut} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50/50 hover:bg-white text-gray-700" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Row 2: Guests & Room */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                            <div>
                                                <label htmlFor="adults" className="block text-sm font-semibold text-gray-700 mb-2">Adults</label>
                                                <select id="adults" name="adults" value={formData.adults} onChange={handleChange} className="w-full py-3.5 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50/50 hover:bg-white text-gray-700 appearance-none cursor-pointer">
                                                    <option>1 Adult</option>
                                                    <option>2 Adults</option>
                                                    <option>3 Adults</option>
                                                    <option>4 Adults</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="children" className="block text-sm font-semibold text-gray-700 mb-2">Children</label>
                                                <select id="children" name="children" value={formData.children} onChange={handleChange} className="w-full py-3.5 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50/50 hover:bg-white text-gray-700 appearance-none cursor-pointer">
                                                    <option>0 Children</option>
                                                    <option>1 Child</option>
                                                    <option>2 Children</option>
                                                    <option>3 Children</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="roomType" className="block text-sm font-semibold text-gray-700 mb-2">Room Type</label>
                                                <select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange} className="w-full py-3.5 px-4 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50/50 hover:bg-white text-gray-700 appearance-none cursor-pointer">
                                                    <option value="royal-nest">Royal Nest Homestay</option>
                                                    <option value="heritage-comfort">Heritage Comfort Inn</option>
                                                    <option value="elite-homestay">Elite Homestay</option>
                                                </select>
                                            </div>
                                        </div>

                                        <hr className="border-gray-100 my-8" />

                                        {/* Row 3: Personal Details */}
                                        <h3 className="text-lg font-serif font-bold text-gray-900 mb-4">Guest Information</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><User size={18} /></span>
                                                    <input type="text" id="fullName" name="fullName" required placeholder="John Doe" value={formData.fullName} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50/50 hover:bg-white text-gray-700 placeholder-gray-400" />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Mail size={18} /></span>
                                                    <input type="email" id="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50/50 hover:bg-white text-gray-700 placeholder-gray-400" />
                                                </div>
                                            </div>
                                            <div className="md:col-span-2">
                                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                                <div className="relative">
                                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Phone size={18} /></span>
                                                    <input type="tel" id="phone" name="phone" required placeholder="+91 90000 00000" value={formData.phone} onChange={handleChange} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50/50 hover:bg-white text-gray-700 placeholder-gray-400" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <div className="pt-6">
                                            <button
                                                type="submit"
                                                className="w-full flex justify-center items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl font-bold tracking-widest text-sm hover:bg-yellow-600 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                                            >
                                                CONFIRM BOOKING REQUEST <Send size={18} />
                                            </button>
                                            <p className="text-center text-xs text-gray-400 mt-4">
                                                * This is a reservation request. Our team will contact you for confirmation and payment.
                                            </p>
                                        </div>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default BookingPage;