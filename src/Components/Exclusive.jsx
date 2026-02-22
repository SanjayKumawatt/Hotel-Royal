import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, Minus } from 'lucide-react'; 

// --- Room Data ---
const roomData = [
    {
        name: 'THE ROYAL NEST HOMESTAY',
        isFeatured: true, // Ise true kar diya taaki ye alag se highlight ho
        features: [
            'Luxury interiors & furniture',
            'AC rooms with smart TVs',
            'Attached modern bathrooms',
            '24x7 power backup',
            'Private parking',
            'Daily housekeeping'
        ]
    },
    {
        name: 'The Heritage Comfort Inn',
        isFeatured: false,
        features: [
            'Comfortable rooms (good décor)',
            'AC / Air cooler',
            'Attached bathroom (hot water)',
            'Wi-Fi',
            'Parking space',
            'Clean & spacious common area'
        ]
    },
    {
        name: 'Elite Homestay',
        isFeatured: false,
        features: [
            'Neat and basic rooms',
            'Air conditions',
            'Shared or attached clean bathrooms',
            'Basic furniture',
            'Nearby restaurant access',
            'Budget-friendly'
        ]
    }
];

// --- FAQ Data (Updated for Hotel Royal, Churu) ---
const faqData = [
    {
        question: 'What are the check-in and check-out timings at Hotel Royal?',
        answer: 'Check-in from 2:00 PM onwards, and check-out is until 11:00 AM. Early check-in and late check-out are subject to availability.'
    },
    {
        question: 'Is the hotel close to any bus/railway stations in Churu?',
        answer: 'Yes, Hotel Royal is conveniently located near the main bus and railway stations in Churu.'
    },
    {
        question: 'Do you offer pickup services?',
        answer: 'Yes, we offer complimentary pickup services from the local station. Please inform us in advance.'
    },
    {
        question: 'Are pets allowed in the hotel?',
        answer: 'Yes, we have a pet-friendly policy for certain rooms. Please contact us for details.'
    },
    {
        question: 'Is Wi-Fi available in all rooms?',
        answer: 'Yes, complimentary high-speed Wi-Fi is available in all rooms and public areas.'
    }
];

// --- Reusable Room Card Component ---
const RoomCard = ({ name, isFeatured, features }) => {
    return (
        <div className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${
            isFeatured 
            ? 'bg-gray-900 text-white shadow-xl transform hover:-translate-y-2 border border-gray-800' 
            : 'bg-white text-gray-900 border border-gray-200 hover:shadow-lg hover:-translate-y-1'
        }`}>
            {isFeatured && (
                <span className="bg-yellow-600 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-4 inline-block">
                    Most Popular
                </span>
            )}
            <h3 className="text-2xl font-serif font-bold mb-6">{name}</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 text-sm">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <Check className={`mt-0.5 flex-shrink-0 ${isFeatured ? 'text-yellow-500' : 'text-yellow-600'}`} size={16} />
                        <span className={isFeatured ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                    </li>
                ))}
            </ul>
            <Link
                to="/book"
                className={`w-full text-center block px-6 py-3.5 rounded-full font-bold tracking-wider text-sm transition-all duration-300 ${
                    isFeatured 
                        ? 'bg-yellow-600 text-white hover:bg-yellow-500' 
                        : 'bg-gray-100 text-gray-900 hover:bg-yellow-600 hover:text-white'
                }`}
            >
                BOOK THIS ROOM
            </Link>
        </div>
    );
};

// --- Reusable FAQ Item Component ---
const FaqItem = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center py-5 text-left font-semibold text-gray-900 hover:text-yellow-600 transition-colors duration-200 group"
            >
                <span className="pr-4">{item.question}</span>
                <span className={`p-1.5 rounded-full transition-colors duration-200 ${isOpen ? 'bg-yellow-100 text-yellow-600' : 'bg-gray-100 text-gray-500 group-hover:bg-yellow-50 group-hover:text-yellow-600'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
            >
                <div className="text-gray-600 leading-relaxed text-sm">
                    {item.answer}
                </div>
            </div>
        </div>
    );
};


// --- Main ExclusiveRooms Component ---
const ExclusiveRooms = () => {
    const [openFaq, setOpenFaq] = useState(0); 

    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    
                    {/* Left Column (Text & FAQs) */}
                    <div className="w-full lg:w-5/12 space-y-16">
                        
                        {/* Text Intro */}
                        <div>
                            <span className="text-yellow-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                                Premium Choices
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                                Find Your Perfect Stay
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                                Celebrate your special moments at Hotel Royal, Churu. We offer an exceptional blend of modern living in a heritage setting, known for our personalized service.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Enjoy the essence of Rajasthan where comfort meets timeless tradition.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                                Frequently Asked Questions
                            </h3>
                            <div className="">
                                {faqData.map((item, index) => (
                                    <FaqItem
                                        key={index}
                                        item={item}
                                        isOpen={openFaq === index}
                                        onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Right Column (Room Cards) */}
                    <div className="w-full lg:w-7/12">
                        <div className="space-y-6">
                            {roomData.map((room) => (
                                <RoomCard
                                    key={room.name}
                                    name={room.name}
                                    isFeatured={room.isFeatured}
                                    features={room.features}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExclusiveRooms;