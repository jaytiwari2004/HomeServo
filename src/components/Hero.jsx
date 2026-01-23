import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

const Hero = () => {
    const categories = [
        { name: "Home care", active: true },
        { name: "Electrician", active: false },
        { name: "Mechanic", active: false },
        { name: "Plumber", active: false },
        { name: "Handcraft", active: false },
    ];

    return (
        <div className="hero-container relative flex h-[580px] w-full flex-col items-center justify-center px-4 text-center text-white sm:h-[620px]">
            {/* Floating Professional Cards */}
            <div className="animate-float absolute left-[10%] top-[15%] hidden lg:block">
                <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-1 border border-white/20 shadow-xl">
                    <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-white/20">
                        <Image src="/pro1.png" alt="Rebecca" fill className="object-cover" />
                    </div>
                    <div className="mt-2 px-2 pb-1 text-left">
                        <p className="text-[10px] font-bold text-white">Rebecca</p>
                        <p className="text-[8px] text-white/70">Home Care</p>
                    </div>
                </div>
            </div>

            <div className="animate-float-delayed absolute left-[5%] bottom-[15%] hidden lg:block">
                <div className="overflow-hidden rounded-2xl bg-white backdrop-blur-md p-1 border border-white/20 shadow-xl">
                    <div className="relative h-32 w-32 overflow-hidden rounded-xl">
                        <Image src="/pro2.png" alt="Michael" fill className="object-cover" />
                    </div>
                    <div className="mt-2 px-2 pb-1 text-left">
                        <p className="text-[12px] font-bold text-black">Michael Telo</p>
                        <p className="text-[10px] text-zinc-500">Mechanic</p>
                    </div>
                </div>
            </div>

            <div className="animate-float-delayed absolute right-[12%] top-[10%] hidden lg:block">
                <div className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md p-1 border border-white/20 shadow-xl">
                    <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-white/20">
                        <Image src="/pro3.png" alt="Big Jons" fill className="object-cover" />
                    </div>
                    <div className="mt-2 px-2 pb-1 text-left">
                        <p className="text-[10px] font-bold text-white">Big Jons</p>
                        <p className="text-[8px] text-white/70">Plumber</p>
                    </div>
                </div>
            </div>

            <div className="animate-float absolute right-[5%] top-[35%] hidden lg:block">
                <div className="overflow-hidden rounded-2xl bg-white backdrop-blur-md p-1 border border-white/20 shadow-xl">
                    <div className="relative h-32 w-32 overflow-hidden rounded-xl">
                        <Image src="/pro4.png" alt="Uncle Mutu" fill className="object-cover" />
                    </div>
                    <div className="mt-2 px-2 pb-1 text-left">
                        <p className="text-[12px] font-bold text-black">Uncle Mutu</p>
                        <p className="text-[10px] text-zinc-500">Mechanic</p>
                    </div>
                </div>
            </div>

            <div className="animate-float-delayed absolute right-[15%] bottom-[5%] hidden lg:block">
                <div className="flex items-center gap-3 overflow-hidden rounded-3xl bg-white/10 backdrop-blur-md p-1 pe-4 border border-white/20">
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-white/20">
                        <Image src="/pro2.png" alt="Pro" fill className="object-cover" />
                    </div>
                    <div className="text-left">
                        <p className="text-[12px] font-bold text-white">Ahmad</p>
                        <p className="text-[10px] text-white/70">Handcraft</p>
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex max-w-3xl flex-col items-center gap-8">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Connect with Reliable <br /> Professionals Home Service
                </h1>

                <div className="search-container flex w-full max-w-2xl items-center gap-2 rounded-2xl bg-white p-2">
                    <input
                        type="text"
                        placeholder="Search service"
                        className="w-full bg-transparent px-4 py-3 text-[15px] text-zinc-900 outline-none placeholder:text-zinc-400"
                    />
                    <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#91acf3] text-white transition-all hover:bg-[#7a96e0]">
                        <Search className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            className="rounded-xl px-5 py-2 text-[13px] font-semibold transition-all bg-[#44588e] text-white hover:bg-[#354673] shadow-lg"
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
