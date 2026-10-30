"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAllProviderProfiles } from '../services/providerProfileApi';
import { Star, Heart, MapPin } from 'lucide-react';


const FeaturedServices = () => {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Home service", "Electricity", "Handcraft", "Plumber", "Mechanic", "More"];

    const [services, setServices] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadProviderProfiles = async () => {
            try {
                const data = await getAllProviderProfiles();
                setServices(data);
            } catch (error) {
                console.error(error);
                setError("Unable to load providers");
            }
        };

        loadProviderProfiles();
    }, []);

    const filteredServices = activeCategory === "All"
        ? services
        : services.filter(service => service.category === activeCategory);

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-black text-zinc-900 mb-8 tracking-tight">Featured Service</h2>

                {error && (
                    <p className="text-red-500 mb-6">
                        {error}
                    </p>
                )}

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
                            <div
                                key={service.id}
                                onClick={() => router.push(`/providers/${service.id}`)}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/3.5] rounded-[1.5rem] overflow-hidden mb-5 border border-zinc-50 shadow-sm">
                                    <img
                                        src={service.image}
                                        alt={service.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <button
                                        onClick={(e) => e.stopPropagation()}
                                        className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-400 hover:text-red-500 transition-all shadow-sm"
                                    >
                                        <Heart className="w-5 h-5"
                                        />
                                    </button>
                                </div>

                                <div className="px-1">
                                    <div className="flex justify-between items-start mb-1.5">
                                        <h3 className="font-black text-lg text-[#4e73df] tracking-tight">{service.name}</h3>
                                        <div className="flex items-center gap-1 pt-1">
                                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />

                                            <span className="text-[13px] font-black text-zinc-900">
                                                {service.rating}
                                            </span>

                                            <span className="text-[12px] text-zinc-400">
                                                ({service.reviewCount})
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-zinc-400 font-bold text-[13px] mb-3">{service.category}</p>

                                    <div className="flex justify-between items-center">
                                        <p className="text-[#4e73df] font-black text-base">
                                            ₹{service.hourlyRate} <span className="text-zinc-400 font-medium text-[12px]">/ Hr</span>
                                        </p>
                                        <div className="flex items-center gap-1 text-zinc-400 font-bold text-[12px]">
                                            <MapPin className="w-3.5 h-3.5 opacity-50" />
                                            <span>{service.location}</span>
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
