import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mx-auto max-w-7xl px-4 sm:px-6 pb-12">
            <div className="rounded-[2.5rem] bg-[#f4f7ff] p-12 lg:p-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-1">
                        <h3 className="text-xl font-bold mb-6">HomeServo</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed max-w-[200px]">
                            Connect with Reliable Professionals Home Service
                        </p>
                    </div>

                    {/* Service Column */}
                    <div>
                        <h4 className="text-sm font-bold text-zinc-900 mb-6">Service</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">Plumbing</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">Electrical Repairs</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">Home Cleaning</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">HVAC Services</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">Handyman</a></li>
                        </ul>
                    </div>

                    {/* Support Column */}
                    <div>
                        <h4 className="text-sm font-bold text-zinc-900 mb-6">Get Support</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">FAQ</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">How It Works</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">Service Guarantee</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-sm font-bold text-zinc-900 mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">Blog</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm text-zinc-500 hover:text-blue-500 transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    {/* App Column */}
                    <div>
                        <h4 className="text-sm font-bold text-zinc-900 mb-6">Available on</h4>
                        <div className="flex flex-col gap-3">
                            <button className="flex items-center gap-3 bg-white border border-zinc-200 rounded-xl px-4 py-2 hover:border-blue-200 transition-all">
                                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
                                    <div className="w-3 h-3 bg-white rounded-full"></div>
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] text-zinc-500 uppercase leading-none">Download on the</p>
                                    <p className="text-sm font-bold leading-tight">App Store</p>
                                </div>
                            </button>
                            <button className="flex items-center gap-3 bg-black text-white rounded-xl px-4 py-2 hover:bg-zinc-800 transition-all">
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white rotate-45"></div>
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] text-white/70 uppercase leading-none">GET IT ON</p>
                                    <p className="text-sm font-bold leading-tight">Google Play</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Bar */}
                <div className="mt-20 pt-8 border-t border-zinc-200/50 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-zinc-500">© 2026 HomeServo | All Rights Reserved</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Youtube size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
