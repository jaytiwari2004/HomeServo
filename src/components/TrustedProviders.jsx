import React from 'react';
import { Star, MapPin } from 'lucide-react';

const TrustedProviders = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#91acf3] via-[#7187e8] to-[#91acf3] p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-10 min-h-[400px]">
                    {/* decorative blur */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white opacity-5 rounded-full blur-3xl"></div>

                    {/* Left: Worker Image */}
                    <div className="relative w-full lg:w-1/2 flex justify-center">
                        <div className="relative flex justify-center lg:justify-start w-full">
                            <div className="w-[260px] h-[340px] lg:w-[320px] lg:h-[420px] rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-white/20">
                                <img
                                    src="/pro2.png"
                                    alt="Expert"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Overlap Card */}
                            <div className="absolute bottom-6 right-[-10px] lg:right-5 bg-white p-5 rounded-[1.2rem] shadow-xl w-[220px]">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 className="font-black text-zinc-900 text-lg tracking-tight">Amit Sharma</h4>
                                        <p className="text-zinc-400 font-bold text-xs">Mechanic</p>
                                    </div>
                                    <div className="flex items-center gap-1 bg-zinc-50 px-2 py-0.5 rounded-full">
                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        <span className="text-[11px] font-black">4.9</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-3 pt-3 border-t border-zinc-50">
                                    <p className="text-[#4e73df] font-black text-base">₹599 <span className="text-zinc-400 text-[10px]">/ Hr</span></p>
                                    <span className="text-zinc-400 text-[10px] font-bold">10 km</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2 text-white text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight tracking-tight">
                            Connect with Trusted Service Providers
                        </h2>
                        <p className="text-base lg:text-lg font-medium text-white/80 mb-8 max-w-md leading-relaxed">
                            Get connected with reputable professionals. Ensure quality and reliability for every project with our vetted network.
                        </p>
                        <button className="bg-zinc-900 text-white px-8 py-3.5 rounded-full text-base font-black hover:bg-black transition-all shadow-lg active:scale-95">
                            Find Provider
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedProviders;
