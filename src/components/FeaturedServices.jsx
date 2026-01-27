"use client";
import React, { useState } from 'react';
import { Star, Heart, MapPin } from 'lucide-react';

const FeaturedServices = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Home service", "Electricity", "Handcraft", "Plumber", "Mechanic", "More"];

    const services = [
        {
            name: "Suresh Gupta",
            category: "Plumber",
            rating: "4.9",
            reviews: "200",
            price: "₹899",
            distance: "2.4 km",
            image: "/pro4.png"
        },
        {
            name: "Arjun Singh",
            category: "Mechanic",
            rating: "4.8",
            reviews: "120",
            price: "₹599",
            distance: "1.2 km",
            image: "/pro2.png"
        },
        {
            name: "Priya Sharma",
            category: "Home service",
            rating: "4.9",
            reviews: "40",
            price: "₹399",
            distance: "1.0 km",
            image: "/pro1.png"
        },
        {
            name: "Vikram Mehta",
            category: "Electricity",
            rating: "4.9",
            reviews: "90",
            price: "₹450",
            distance: "0.8 km",
            image: "/cleaning.png"
        }
    ];

    const filteredServices = activeCategory === "All"
        ? services
        : services.filter(service => service.category === activeCategory);

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-black text-zinc-900 mb-8 tracking-tight">Featured Service</h2>

                {/* Categories Filter */}
                <div className="flex flex-wrap gap-2.5 mb-12">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-[13px] font-bold transition-all border ${activeCategory === cat
                                ? "bg-[#4e73df] text-white border-[#4e73df]"
                                : "bg-white text-zinc-500 border-zinc-100 hover:border-[#4e73df] hover:text-[#4e73df]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Services Grid or Empty State */}
                {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredServices.map((service, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative aspect-[4/3.5] rounded-[1.5rem] overflow-hidden mb-5 border border-zinc-50 shadow-sm">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-400 hover:text-red-500 transition-all shadow-sm">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="px-1">
                                    <div className="flex justify-between items-start mb-1.5">
                                        <h3 className="font-black text-lg text-[#4e73df] tracking-tight">{service.name}</h3>
                                        <div className="flex items-center gap-1 pt-1">
                                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                                            <span className="text-[13px] font-black text-zinc-900">{service.rating}</span>
                                        </div>
                                    </div>

                                    <p className="text-zinc-400 font-bold text-[13px] mb-3">{service.category}</p>

                                    <div className="flex justify-between items-center">
                                        <p className="text-[#4e73df] font-black text-base">
                                            {service.price} <span className="text-zinc-400 font-medium text-[12px]">/ Hr</span>
                                        </p>
                                        <div className="flex items-center gap-1 text-zinc-400 font-bold text-[12px]">
                                            <MapPin className="w-3.5 h-3.5 opacity-50" />
                                            <span>{service.distance}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center bg-zinc-50 rounded-[2rem] border-2 border-dashed border-zinc-100">
                        <p className="text-xl font-bold text-zinc-400">Services Not Available</p>
                        <p className="text-sm text-zinc-400 mt-2">We're expanding! Check back later for experts in this category.</p>
                        <button
                            onClick={() => setActiveCategory("All")}
                            className="mt-6 text-[#4e73df] font-bold text-sm hover:underline"
                        >
                            Explore all available services
                        </button>
                    </div>
                )}

                {/* View All Button */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setActiveCategory("All")}
                        className="px-10 py-3 rounded-xl border border-[#4e73df]/20 text-[#4e73df] font-bold text-sm hover:bg-[#4e73df] hover:text-white transition-all duration-300"
                    >
                        View all
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;
