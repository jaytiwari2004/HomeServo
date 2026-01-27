import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                <div className="text-2xl font-black tracking-tighter text-[#4e73df]">
                    HomeServo
                </div>

                <div className="hidden items-center gap-8 lg:flex">
                    <a href="#" className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-black">Explore</a>
                    <a href="#" className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-black">Support</a>
                    <a href="#" className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-black">FAQ</a>
                    <a href="#" className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-black">Blog</a>
                    <a href="#" className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-black">Become Partner</a>
                </div>

                <div className="flex items-center gap-3">
                    <button className="w-24 rounded-lg border border-zinc-100 py-2 text-[14px] font-semibold text-zinc-900 shadow-sm transition-all hover:border-[#4e73df] hover:text-[#4e73df]">
                        Login
                    </button>
                    <button className="w-24 rounded-lg border border-zinc-100 py-2 text-[14px] font-semibold text-zinc-900 shadow-sm transition-all hover:border-[#4e73df] hover:text-[#4e73df]">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
