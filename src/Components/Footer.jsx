import React from 'react';
import { Link } from 'react-router-dom';
import { 
    MapPin, 
    Phone, 
    Mail, 
    Facebook, 
    Instagram, 
    Twitter, 
    Send 
} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                {/* Top Section - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
                    
                    {/* Column 1: Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <h2 className="text-3xl font-serif font-bold text-white tracking-wider">
                                HOTEL ROYAL
                            </h2>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm pr-4">
                            Experience the perfect blend of Rajasthani heritage and modern luxury in the heart of Churu. Your royal getaway awaits.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold font-serif mb-6 tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link to="/about" className="hover:text-yellow-500 transition-colors duration-200 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span> About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/rooms" className="hover:text-yellow-500 transition-colors duration-200 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span> Our Rooms
                                </Link>
                            </li>
                            <li>
                                <Link to="/dining" className="hover:text-yellow-500 transition-colors duration-200 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span> Dining & Bar
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-yellow-500 transition-colors duration-200 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span> Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-bold font-serif mb-6 tracking-wide">
                            Contact Us
                        </h3>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start gap-4">
                                <MapPin className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
                                <span className="text-gray-400">
                                    11, Naya Bass, Churu, <br />
                                    
                                    Sikar, Rajasthan 331001
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="text-yellow-600 flex-shrink-0" size={20} />
                                <a href="tel:+919876543210" className="text-gray-400 hover:text-yellow-500 transition-colors">
                                    +91 98765 ***
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="text-yellow-600 flex-shrink-0" size={20} />
                                <a href="mailto:info@hotelroyalchuru.com" className="text-gray-400 hover:text-yellow-500 transition-colors">
                                    info@hotelroyalchuru.com
                                </a>
                            </li>
                        </ul>
                    </div>

                  

                </div>

                {/* Bottom Section - Copyright & Legal */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Hotel Royal, Churu. All Rights Reserved.
                    </p>
                    {/* <div className="flex gap-6 text-sm text-gray-500">
                        <Link to="/privacy-policy" className="hover:text-yellow-500 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-yellow-500 transition-colors">Terms of Service</Link>
                    </div> */}
                </div>

            </div>
        </footer>
    );
};

export default Footer;