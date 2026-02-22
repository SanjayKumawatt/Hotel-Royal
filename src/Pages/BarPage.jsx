import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Wine, GlassWater, 
    Sparkles, PhoneCall, ChevronRight 
} from 'lucide-react';

// 100% Working Pexels Image Links
const heroImage = "https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"; // Bar shelf full of bottles
const galleryImages = [
    "https://images.pexels.com/photos/613037/pexels-photo-613037.jpeg?auto=compress&cs=tinysrgb&w=800", // Premium Liquor Bottles
    "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=800", // Bartender pouring
    "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=800", // Whiskey glass close up
    "https://images.pexels.com/photos/1189257/pexels-photo-1189257.jpeg?auto=compress&cs=tinysrgb&w=800"  // Cocktails
];

const barMenu = [
    {
        title: "Signature Cocktails",
        items: [
            { name: "Smoked Old Fashioned", price: "₹850", desc: "Premium Bourbon, cherry wood smoke, aromatic bitters." },
            { name: "Desert Rose Margarita", price: "₹700", desc: "Silver Tequila, fresh lime, rose syrup, pink salt." },
            { name: "Churu Nightfall", price: "₹750", desc: "Dark rum, espresso shot, vanilla bean." }
        ]
    },
    {
        title: "Premium Single Malts",
        items: [
            { name: "Macallan 18 Years", price: "₹1800", desc: "Rich dried fruits and sherry, wood smoke." },
            { name: "Glenfiddich 15 Years", price: "₹1200", desc: "Warm spice, honey, and rich fruit notes." },
            { name: "Lagavulin 16 Years", price: "₹1500", desc: "Intense peat smoke with a sweet finish." }
        ]
    },
    {
        title: "Imported Spirits",
        items: [
            { name: "Grey Goose Vodka", price: "₹650", desc: "Served neat or in your favorite classic cocktail." },
            { name: "Bombay Sapphire Gin", price: "₹550", desc: "With premium tonic and a slice of fresh cucumber." },
            { name: "Hennessy VSOP", price: "₹900", desc: "Classic aged cognac, smooth and perfectly balanced." }
        ]
    }
];

const BarPage = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="bg-black text-gray-300 min-h-screen font-sans selection:bg-yellow-600 selection:text-white">
            
            {/* --- 1. Immersive Hero Section --- */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-105"
                    style={{ backgroundImage: `url(${heroImage})` }} 
                >
                    {/* Deep gradient overlay to make text pop */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
                </div>
                
                <motion.div 
                    initial="hidden" animate="visible" variants={fadeUp}
                    className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20"
                >
                    <div className="inline-flex items-center gap-2 border border-yellow-600/50 px-6 py-2 rounded-full mb-8 backdrop-blur-sm bg-black/30">
                        <Sparkles className="text-yellow-500" size={16} />
                        <span className="text-yellow-500 font-bold tracking-[0.2em] uppercase text-xs">Premium Nightlife</span>
                        <Sparkles className="text-yellow-500" size={16} />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                        The Royal Bar
                    </h1>
                    <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                        Exclusive spirits, masterfully crafted cocktails, and an ambiance that speaks pure luxury.
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">Explore Menu</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-600 to-transparent"></div>
                </motion.div>
            </section>

            {/* --- 2. Premium Menu Section (Card Based Design) --- */}
            <section className="py-24 md:py-32 bg-black relative">
                {/* Decorative background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-yellow-900/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">The Collection</h2>
                        <div className="w-16 h-1 bg-yellow-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {barMenu.map((category, idx) => (
                            <motion.div 
                                key={idx}
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-2xl hover:border-yellow-600/40 transition-colors duration-500 group"
                            >
                                <h3 className="text-2xl font-serif font-bold text-yellow-500 mb-8 flex items-center gap-3">
                                    {idx === 0 ? <GlassWater size={24}/> : <Wine size={24}/>}
                                    {category.title}
                                </h3>
                                <div className="space-y-8">
                                    {category.items.map((item, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">
                                                    {item.name}
                                                </h4>
                                                <span className="text-yellow-600 font-bold bg-yellow-900/20 px-3 py-1 rounded-md text-sm">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 3. Dynamic Image Gallery (Bento Box Style) --- */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                    >
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-white mb-2">The Experience</h2>
                            <p className="text-gray-500">A glimpse into our world of fine spirits.</p>
                        </div>
                    </motion.div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 h-auto md:h-[600px]">
                        {/* Large Main Bottle Image */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                            className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group h-64 md:h-auto"
                        >
                            <img src={galleryImages[0]} alt="Premium Bottles" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <h3 className="absolute bottom-6 left-6 text-white font-serif text-2xl font-bold">Rare Collections</h3>
                        </motion.div>

                        {/* Top Right */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                            className="md:col-span-2 md:row-span-1 relative rounded-2xl overflow-hidden group h-64 md:h-auto"
                        >
                            <img src={galleryImages[1]} alt="Bartender" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <h3 className="absolute bottom-6 left-6 text-white font-serif text-xl font-bold">Master Mixologists</h3>
                        </motion.div>

                        {/* Bottom Middle */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
                            className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group h-64 md:h-auto"
                        >
                            <img src={galleryImages[2]} alt="Whiskey" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                        </motion.div>

                        {/* Bottom Right */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
                            className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group h-64 md:h-auto"
                        >
                            <img src={galleryImages[3]} alt="Cocktails" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- 4. Dark VIP CTA Section --- */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-900/5"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                            Reserve Your Evening
                        </h2>
                        <p className="text-gray-400 mb-10 text-lg font-light">
                            Ensure your spot at Churu's most exclusive bar. Perfect for celebrations, business meetings, or a sophisticated night out.
                        </p>
                        <Link 
                            to="/contact"
                            className="inline-flex items-center justify-center gap-3 bg-yellow-600 text-white px-10 py-4 rounded-full font-bold tracking-widest hover:bg-yellow-500 transition-all shadow-[0_0_20px_rgba(202,138,4,0.4)]"
                        >
                            <PhoneCall size={20} /> BOOK A TABLE <ChevronRight size={20}/>
                        </Link>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default BarPage;