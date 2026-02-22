import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    MapPin, Phone, Mail, Clock, 
    Send, CheckCircle, MessageSquare 
} from 'lucide-react';

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Message sent:', formData);
        setIsSubmitted(true);
        // Form submit hone ke baad reset karne ke liye
        // setFormData({ name: '', email: '', subject: '', message: '' });
    };

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Exact Map Address requested by you
    const mapAddress = "11, Naya Bass, Churu, Sikar, Rajasthan 331001";
    // Encode it for the Google Maps iframe URL
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            
            {/* --- 1. Hero Banner --- */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 flex items-center justify-center overflow-hidden h-[60vh] md:h-[70vh]">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    // Premium Hotel Lobby Pexels image (100% working)
                    style={{ backgroundImage: "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80')" }} 
                >
                    <div className="absolute inset-0 bg-gray-900/70"></div>
                </div>
                
                <motion.div 
                    initial="hidden" animate="visible" variants={fadeUp}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                >
                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-4 block">
                        Get In Touch
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 tracking-wide drop-shadow-lg">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 font-light max-w-2xl mx-auto">
                        We are here to assist you. Reach out to us for reservations, special requests, or any inquiries about your stay at Hotel Royal.
                    </p>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </motion.div>
            </section>

            {/* --- 2. Contact Details & Form Section --- */}
            <section className="py-20 md:py-32 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* Left Column: Info Cards */}
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="w-full lg:w-5/12 space-y-8"
                    >
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                                Contact Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                                Have a question or need to book a room? Our team is available 24/7 to provide you with the best service possible.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {/* Address Card */}
                            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="bg-yellow-50 p-4 rounded-full text-yellow-600 flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-serif text-gray-900 mb-2">Our Location</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Hotel Royal<br />
                                        11, Naya Bass, Churu<br />
                                        Sikar, Rajasthan 331001
                                    </p>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="bg-yellow-50 p-4 rounded-full text-yellow-600 flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-serif text-gray-900 mb-2">Phone Number</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        Front Desk: +91 98765 43210 <br />
                                        Reservations: +91 98765 09876
                                    </p>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                                <div className="bg-yellow-50 p-4 rounded-full text-yellow-600 flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-serif text-gray-900 mb-2">Email Address</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        info@hotelroyalchuru.com <br />
                                        booking@hotelroyalchuru.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form */}
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="w-full lg:w-7/12"
                    >
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                            
                            {isSubmitted ? (
                                /* Success Message UI */
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                    className="py-16 text-center"
                                >
                                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Message Sent!</h2>
                                    <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                                        Thank you for reaching out to us, <span className="font-semibold text-gray-900">{formData.name}</span>. Our team will get back to you shortly.
                                    </p>
                                    <button 
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-yellow-600 font-semibold hover:text-yellow-700 underline underline-offset-4"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                /* Form UI */
                                <>
                                    <div className="flex items-center gap-3 mb-8">
                                        <MessageSquare className="text-yellow-600" size={28} />
                                        <h3 className="text-2xl font-serif font-bold text-gray-900">Send a Message</h3>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                                                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50 hover:bg-white text-gray-700" />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50 hover:bg-white text-gray-700" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                                            <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} placeholder="Room Inquiry" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50 hover:bg-white text-gray-700" />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                                            <textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows="5" className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 transition-colors bg-gray-50 hover:bg-white text-gray-700 resize-none"></textarea>
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto flex justify-center items-center gap-2 bg-gray-900 text-white px-10 py-4 rounded-xl font-bold tracking-widest text-sm hover:bg-yellow-600 transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                                        >
                                            SEND MESSAGE <Send size={18} />
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- 3. Full Width Google Map --- */}
            <section className="w-full h-[500px] bg-gray-200 relative">
                <iframe 
                    title="Hotel Royal Location"
                    src={mapSrc} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>
            </section>

        </div>
    );
};

export default ContactPage;