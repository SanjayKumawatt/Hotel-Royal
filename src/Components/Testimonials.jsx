import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

// Swiper CSS (Ensure ye tumhari file mein import ho raha ho)
import 'swiper/css';
import 'swiper/css/pagination';

// Dummy Reviews Data (Baad mein tum real reviews daal sakte ho)
const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        location: "Delhi, India",
        text: "Absolutely loved my stay at Hotel Royal! The rooms are incredibly luxurious and the staff went above and beyond to make us feel welcome in Churu. The food was just amazing.",
        rating: 5
    },
    {
        id: 2,
        name: "Priya Desai",
        location: "Mumbai, India",
        text: "A hidden gem in Rajasthan. The heritage feel combined with modern amenities made our family trip perfect. Very clean rooms and excellent 24/7 service.",
        rating: 5
    },
    {
        id: 3,
        name: "Vikram Singh",
        location: "Jaipur, Rajasthan",
        text: "I travel to Churu often for business, and Hotel Royal is by far the best place to stay. Fast Wi-Fi, great ambiance, and a very smooth check-in process. Highly recommended.",
        rating: 4
    },
    {
        id: 4,
        name: "Ananya Patel",
        location: "Ahmedabad, India",
        text: "The aesthetic of the hotel is beautiful! Every corner is photogenic. The staff was very polite and the location is very convenient to explore the local markets.",
        rating: 5
    }
];

const TestimonialSection = () => {
    return (
        <section className="bg-gray-900 py-20 md:py-32 relative overflow-hidden">
            
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
                <Quote className="absolute -top-10 -left-10 w-64 h-64 text-white transform -rotate-12" />
                <Quote className="absolute bottom-10 -right-10 w-80 h-80 text-white transform rotate-12" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
                
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-yellow-500 font-bold tracking-widest uppercase text-sm mb-3 block">
                        Guest Expressions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                        What Our Guests Say
                    </h2>
                    <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Testimonials Slider */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        className="pb-16" // Pagination dots ke liye niche space
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 h-full flex flex-col justify-between hover:border-yellow-600/50 transition-colors duration-300 group">
                                    
                                    <div>
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {[...Array(5)].map((_, i) => (
                                                <Star 
                                                    key={i} 
                                                    size={18} 
                                                    className={`${i < testimonial.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-600'}`} 
                                                />
                                            ))}
                                        </div>
                                        
                                        {/* Review Text */}
                                        <p className="text-gray-300 italic mb-8 leading-relaxed text-lg font-light relative">
                                            "{testimonial.text}"
                                        </p>
                                    </div>

                                    {/* User Info */}
                                    <div className="flex items-center gap-4 mt-auto border-t border-gray-700 pt-6">
                                        <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold tracking-wide">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-yellow-500 text-sm">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

            </div>

            {/* Pagination Custom CSS injection (to make dots yellow) */}
            <style jsx="true">{`
                .swiper-pagination-bullet {
                    background-color: #4b5563; /* Tailwind gray-600 */
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background-color: #ca8a04 !important; /* Tailwind yellow-600 */
                }
            `}</style>

        </section>
    );
};

export default TestimonialSection;