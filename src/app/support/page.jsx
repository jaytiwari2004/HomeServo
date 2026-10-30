"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
    MessageCircle,
    Phone,
    Mail,
    Clock,
    CheckCircle,
    ChevronRight,
    Send,
    Headphones,
    ShieldCheck,
    Zap,
} from "lucide-react";

const channels = [
    {
        icon: MessageCircle,
        title: "Live Chat",
        description: "Talk to our support agents instantly. Available Mon–Sat, 9 AM – 9 PM.",
        action: "Start Chat",
        color: "from-blue-500 to-indigo-600",
        badge: "Fastest",
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak with a specialist directly at +91 98765 43210.",
        action: "Call Now",
        color: "from-emerald-400 to-teal-500",
        badge: null,
    },
    {
        icon: Mail,
        title: "Email Support",
        description: "Send us a detailed message and we'll respond within 24 hours.",
        action: "Send Email",
        color: "from-amber-400 to-orange-500",
        badge: null,
    },
];

const stats = [
    { icon: Clock, value: "< 2 min", label: "Avg. response time" },
    { icon: CheckCircle, value: "98%", label: "Issues resolved" },
    { icon: Headphones, value: "24/7", label: "Support available" },
    { icon: ShieldCheck, value: "100%", label: "Satisfaction guarantee" },
];

const topics = [
    "Booking & Scheduling",
    "Payment & Refunds",
    "Service Quality Issues",
    "Provider Complaint",
    "Account & Profile",
    "Technical Issue",
    "Other",
];

export default function SupportPage() {
    const [selectedTopic, setSelectedTopic] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1a2e5a] to-[#4e73df] pt-32 pb-24 px-6 text-center">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 25% 60%, #6c8fff 0%, transparent 50%), radial-gradient(circle at 75% 30%, #38bdf8 0%, transparent 50%)",
                    }}
                />
                <div className="relative mx-auto max-w-3xl">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                        <Headphones size={13} /> Support Center
                    </span>
                    <h1 className="mb-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-tight">
                        We're Here to{" "}
                        <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
                            Help You
                        </span>
                    </h1>
                    <p className="mx-auto max-w-xl text-base text-white/70 leading-relaxed">
                        Our support team is standing by to resolve any issue — quickly and professionally. Choose how you'd like to reach us.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="mx-auto max-w-5xl px-6 -mt-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map(({ icon: Icon, value, label }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center rounded-2xl bg-white border border-zinc-100 shadow-md p-5 text-center"
                        >
                            <Icon size={22} className="mb-2 text-[#4e73df]" />
                            <p className="text-xl font-black text-zinc-900">{value}</p>
                            <p className="text-xs text-zinc-500 mt-0.5">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Channels */}
            <section className="mx-auto max-w-5xl px-6 pt-16 pb-6">
                <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-zinc-400">Contact Us</h2>
                <p className="mb-8 text-xl font-black text-zinc-900">Choose a Support Channel</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {channels.map(({ icon: Icon, title, description, action, color, badge }) => (
                        <div
                            key={title}
                            className="group relative flex flex-col rounded-2xl border border-zinc-100 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                        >
                            {badge && (
                                <span className="absolute top-4 right-4 rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold text-[#4e73df]">
                                    {badge}
                                </span>
                            )}
                            <div className={`mb-5 h-12 w-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                                <Icon size={22} className="text-white" />
                            </div>
                            <h3 className="mb-2 text-base font-bold text-zinc-900">{title}</h3>
                            <p className="flex-1 text-sm text-zinc-500 leading-relaxed mb-5">{description}</p>
                            <button className={`flex items-center gap-2 rounded-xl bg-gradient-to-r ${color} px-5 py-2.5 text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity self-start`}>
                                {action} <ChevronRight size={15} />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Form */}
            <section className="mx-auto max-w-3xl px-6 py-14">
                <div className="rounded-3xl border border-zinc-100 bg-white shadow-xl p-10 lg:p-14">
                    <div className="mb-8">
                        <h2 className="text-2xl font-black text-zinc-900">Send Us a Message</h2>
                        <p className="text-sm text-zinc-500 mt-1">Fill in the form and we'll get back to you within a few hours.</p>
                    </div>

                    {submitted ? (
                        <div className="flex flex-col items-center py-12 text-center">
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                                <CheckCircle size={32} className="text-emerald-500" />
                            </div>
                            <h3 className="text-xl font-black text-zinc-900 mb-2">Message Sent!</h3>
                            <p className="text-sm text-zinc-500 max-w-xs">
                                Thanks for reaching out. Our team will contact you within 24 hours.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="mb-1.5 block text-xs font-semibold text-zinc-600 uppercase tracking-wide">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Raj Mehta"
                                        className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-[#4e73df] focus:ring-2 focus:ring-blue-100 transition"
                                    />
                                </div>
                                <div>
                                    <label className="mb-1.5 block text-xs font-semibold text-zinc-600 uppercase tracking-wide">Email</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="you@email.com"
                                        className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-[#4e73df] focus:ring-2 focus:ring-blue-100 transition"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-semibold text-zinc-600 uppercase tracking-wide">Topic</label>
                                <select
                                    value={selectedTopic}
                                    onChange={(e) => setSelectedTopic(e.target.value)}
                                    required
                                    className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 outline-none focus:border-[#4e73df] focus:ring-2 focus:ring-blue-100 transition appearance-none bg-white"
                                >
                                    <option value="" disabled>Select a topic…</option>
                                    {topics.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="mb-1.5 block text-xs font-semibold text-zinc-600 uppercase tracking-wide">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    placeholder="Describe your issue in detail…"
                                    className="w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-[#4e73df] focus:ring-2 focus:ring-blue-100 transition resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4e73df] to-[#2c52c9] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-200 hover:opacity-90 transition-opacity"
                            >
                                <Send size={15} /> Send Message
                            </button>
                        </form>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
