import React from 'react';
import { Star, Home, Zap, Hammer, Droplets, Settings, Grid, Phone } from 'lucide-react';

const FeaturesGrid = () => {
    return (
        <section className="py-16 bg-[#F0F4FF]/50 px-4 rounded-[2rem] my-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-[240px]">
                    {/* Active User Card */}
                    <div className="lg:col-span-6 bg-[#E8EEFF] rounded-[1.5rem] p-8 flex flex-col justify-start relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-[#4e73df] text-5xl font-black mb-2 tracking-tighter">+260k</h3>
                            <p className="text-[#4e73df] text-xl font-semibold opacity-90">Active User</p>
                        </div>
                        <div className="absolute right-[-5%] bottom-[-10%] w-[70%] h-[100%] opacity-20 pointer-events-none">
                            <svg viewBox="0 0 1000 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="dots_small" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="1" fill="#4e73df" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#dots_small)" />
                            </svg>
                        </div>
                    </div>

                    {/* Mobile Apps Card */}
                    <div className="lg:col-span-6 bg-white rounded-[1.5rem] p-8 flex flex-col justify-start relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-[#4e73df] text-2xl font-semibold mb-1">HomeServo</h3>
                            <p className="text-zinc-900 text-2xl font-black tracking-tight">Mobile Apps</p>
                        </div>

                        <div className="absolute right-0 bottom-[-40px] flex gap-4 rotate-[-6deg] transition-transform group-hover:rotate-[-4deg] duration-500">
                            <div className="w-[140px] h-[240px] bg-white border-[4px] border-zinc-900 rounded-[2rem] shadow-xl relative overflow-hidden p-3">
                                <div className="w-12 h-3 bg-zinc-900 mx-auto rounded-full mb-4"></div>
                                <div className="space-y-3">
                                    <div className="h-2 w-10 bg-zinc-100 rounded-full"></div>
                                    <div className="h-24 w-full bg-blue-50 rounded-xl"></div>
                                </div>
                            </div>
                            <div className="w-[140px] h-[240px] bg-white border-[4px] border-zinc-900 rounded-[2rem] shadow-xl relative mt-8 overflow-hidden p-3">
                                <div className="w-12 h-3 bg-zinc-900 mx-auto rounded-full mb-4"></div>
                                <div className="h-20 w-full bg-blue-50 rounded-xl mb-3"></div>
                                <div className="h-6 w-full bg-[#4e73df] rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Worker 1 */}
                    <div className="lg:col-span-3 bg-white border border-zinc-100 rounded-[1.5rem] p-0 relative overflow-hidden shadow-sm group">
                        <img src="/pro4.png" alt="Plumber" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <h4 className="font-bold text-zinc-900 text-base">Rajesh Kumar</h4>
                                    <p className="text-[#4e73df] text-[10px] font-semibold uppercase tracking-wider">Plumber</p>
                                </div>
                                <div className="flex items-center gap-1 bg-zinc-50 px-2 py-0.5 rounded-full">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-[10px] font-black">4.9</span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-2 pt-2 border-t border-zinc-50">
                                <p className="text-[#4e73df] font-black text-sm">₹499 <span className="text-zinc-400 font-medium text-[10px]">/ Hr</span></p>
                                <p className="text-zinc-400 text-[10px] font-bold">0.9 km</p>
                            </div>
                        </div>
                    </div>

                    {/* Discover */}
                    <div className="lg:col-span-5 bg-[#F9FBFF] rounded-[1.5rem] p-8 flex flex-col items-center justify-center text-center">
                        <h3 className="text-[#4e73df] text-xl font-semibold mb-1">Discover</h3>
                        <p className="text-zinc-900 text-2xl font-black mb-6 tracking-tight">Home Service</p>

                        <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                            {[
                                { icon: <Home className="w-5 h-5" />, label: "Home" },
                                { icon: <Zap className="w-5 h-5" />, label: "Electricity" },
                                { icon: <Hammer className="w-5 h-5" />, label: "Handcraft" },
                                { icon: <Droplets className="w-5 h-5" />, label: "Plumber" },
                                { icon: <Settings className="w-5 h-5" />, label: "Mechanic" },
                                { icon: <Grid className="w-5 h-5" />, label: "More" },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-3 rounded-2xl flex flex-col items-center gap-2 shadow-sm border border-transparent hover:border-blue-100 transition-all cursor-pointer">
                                    <div className="text-[#4e73df]">{item.icon}</div>
                                    <span className="text-[10px] font-bold text-zinc-600">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Review */}
                    <div className="lg:col-span-4 bg-white border border-zinc-100 rounded-[1.5rem] p-0 relative overflow-hidden flex shadow-sm group">
                        <div className="flex-1 p-8 flex flex-col justify-center relative z-10 bg-white/90">
                            <h3 className="text-[#4e73df] text-5xl font-black mb-2 tracking-tighter">4.9</h3>
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-[#4e73df] text-[#4e73df]" />)}
                            </div>
                            <h4 className="text-xl font-black text-zinc-900 leading-tight">
                                <span className="text-[#4e73df]">Review</span> by 100k+ Users
                            </h4>
                        </div>
                        <div className="absolute right-0 top-0 bottom-0 w-[40%] h-full">
                            <img src="/pro2.png" alt="Mechanic" className="w-full h-full object-cover grayscale-[0.2] transition-all group-hover:grayscale-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
