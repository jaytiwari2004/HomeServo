"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronDown, Search, HelpCircle, CreditCard, Star, User, Wrench, Shield } from "lucide-react";

const sections = [
    {
        id: "booking",
        icon: Wrench,
        label: "Booking & Services",
        color: "from-blue-500 to-indigo-600",
        faqs: [
            {
                q: "How do I book a home service on HomeServo?",
                a: "Simply search for the service you need, select a verified provider, choose your preferred date and time slot, and confirm your booking. You'll receive an instant confirmation SMS and email.",
            },
            {
                q: "Can I reschedule or cancel a booking?",
                a: "Yes. You can reschedule or cancel any booking up to 2 hours before the scheduled time from your 'My Bookings' dashboard. Cancellations made within 2 hours may incur a small fee.",
            },
            {
                q: "What services does HomeServo offer?",
                a: "We cover a wide range — plumbing, electrical repairs, home cleaning, HVAC servicing, carpentry, painting, pest control, and more. Browse all categories on our home page.",
            },
            {
                q: "Are all service providers verified?",
                a: "Absolutely. Every provider goes through a rigorous background check, skill verification, and in-person interview before being listed on HomeServo.",
            },
        ],
    },
    {
        id: "payment",
        icon: CreditCard,
        label: "Payments & Refunds",
        color: "from-emerald-400 to-teal-500",
        faqs: [
            {
                q: "What payment methods are accepted?",
                a: "We accept UPI, debit/credit cards (Visa, Mastercard, Rupay), net banking, and cash on service completion. All online payments are secured with 256-bit encryption.",
            },
            {
                q: "How do refunds work?",
                a: "If you're unsatisfied with the service or the provider doesn't show up, you're eligible for a full refund. Refunds are processed within 3–5 business days to your original payment method.",
            },
            {
                q: "Will I get an invoice for my booking?",
                a: "Yes. A detailed invoice is sent to your email once the service is marked complete. You can also download invoices from your account's booking history.",
            },
        ],
    },
    {
        id: "reviews",
        icon: Star,
        label: "Reviews & Ratings",
        color: "from-amber-400 to-orange-500",
        faqs: [
            {
                q: "How are provider ratings calculated?",
                a: "Ratings are based on verified customer reviews collected after each completed service. We use a weighted average that gives more weight to recent reviews to reflect current performance.",
            },
            {
                q: "Can I leave a review anonymously?",
                a: "Reviews are tied to your account to maintain authenticity, but your full name is never displayed publicly — only your first name and last initial.",
            },
        ],
    },
    {
        id: "account",
        icon: User,
        label: "Account & Privacy",
        color: "from-violet-500 to-purple-600",
        faqs: [
            {
                q: "How do I update my profile details?",
                a: "Log in to your account, go to the Profile section in the top menu, and edit your name, phone number, saved addresses, or profile photo anytime.",
            },
            {
                q: "Is my personal data safe with HomeServo?",
                a: "Yes. We are GDPR and India IT Act compliant. Your data is never sold to third parties. We use end-to-end encryption for all sensitive information.",
            },
            {
                q: "How do I delete my account?",
                a: "You can request account deletion from Settings > Privacy > Delete Account. All your data will be permanently removed within 30 days as per our data retention policy.",
            },
        ],
    },
    {
        id: "guarantee",
        icon: Shield,
        label: "Service Guarantee",
        color: "from-sky-400 to-cyan-500",
        faqs: [
            {
                q: "What is the HomeServo service guarantee?",
                a: "Every booking is backed by our 100% Satisfaction Guarantee. If you're not happy with the work, we'll send another verified professional to redo the job at no extra cost.",
            },
            {
                q: "What happens if the provider damages my property?",
                a: "All providers carry liability coverage. If any accidental damage occurs during a service, report it within 48 hours via our support team and we'll initiate a claim on your behalf.",
            },
        ],
    },
];

export default function FAQPage() {
    const [openSectionId, setOpenSectionId] = useState("booking");
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [search, setSearch] = useState("");

    const activeSection = sections.find((s) => s.id === openSectionId);

    const filteredFaqs = search.trim()
        ? sections.flatMap((s) =>
              s.faqs
                  .filter(
                      (f) =>
                          f.q.toLowerCase().includes(search.toLowerCase()) ||
                          f.a.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((f) => ({ ...f, sectionLabel: s.label }))
          )
        : null;

    function toggle(index) {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
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
                            "radial-gradient(circle at 20% 70%, #6c8fff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #38bdf8 0%, transparent 50%)",
                    }}
                />
                <div className="relative mx-auto max-w-2xl">
                    <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                        <HelpCircle size={13} /> FAQ
                    </span>
                    <h1 className="mb-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-tight">
                        Got{" "}
                        <span className="bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
                            Questions?
                        </span>
                    </h1>
                    <p className="mx-auto max-w-lg text-base text-white/70 leading-relaxed mb-8">
                        Find quick answers to the most common questions about HomeServo — bookings, payments, providers, and more.
                    </p>

                    {/* Search */}
                    <div className="relative mx-auto max-w-md">
                        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setOpenFaqIndex(null);
                            }}
                            placeholder="Search questions…"
                            className="w-full rounded-2xl border border-white/20 bg-white/10 py-3.5 pl-11 pr-5 text-sm text-white placeholder-white/40 backdrop-blur-sm outline-none focus:ring-2 focus:ring-white/20 transition"
                        />
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="mx-auto max-w-6xl px-6 py-16">
                {search.trim() ? (
                    /* Search results */
                    <div>
                        <p className="mb-6 text-sm text-zinc-500">
                            Showing results for{" "}
                            <span className="font-bold text-zinc-800">"{search}"</span>
                        </p>
                        {filteredFaqs.length === 0 ? (
                            <div className="flex flex-col items-center py-16 text-center">
                                <HelpCircle size={40} className="mb-4 text-zinc-300" />
                                <h3 className="text-lg font-bold text-zinc-800 mb-1">No results found</h3>
                                <p className="text-sm text-zinc-500">Try a different keyword or browse the categories below.</p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {filteredFaqs.map((faq, i) => (
                                    <FaqItem key={i} faq={faq} index={i} open={openFaqIndex === i} toggle={() => toggle(i)} badge={faq.sectionLabel} />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    /* Category layout */
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <aside className="lg:w-64 flex-shrink-0">
                            <nav className="sticky top-24 space-y-2">
                                {sections.map((s) => {
                                    const Icon = s.icon;
                                    const active = s.id === openSectionId;
                                    return (
                                        <button
                                            key={s.id}
                                            onClick={() => {
                                                setOpenSectionId(s.id);
                                                setOpenFaqIndex(null);
                                            }}
                                            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                                                active
                                                    ? "bg-[#4e73df] text-white shadow-md shadow-blue-200"
                                                    : "text-zinc-600 hover:bg-zinc-100"
                                            }`}
                                        >
                                            <div className={`flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br ${s.color} ${active ? "opacity-100" : "opacity-80"}`}>
                                                <Icon size={14} className="text-white" />
                                            </div>
                                            {s.label}
                                        </button>
                                    );
                                })}
                            </nav>
                        </aside>

                        {/* FAQ list */}
                        <div className="flex-1">
                            {activeSection && (
                                <>
                                    <div className={`mb-8 flex items-center gap-4 rounded-2xl bg-gradient-to-br ${activeSection.color} p-6 text-white`}>
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                                            <activeSection.icon size={24} />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-black">{activeSection.label}</h2>
                                            <p className="text-sm text-white/70">{activeSection.faqs.length} questions answered</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        {activeSection.faqs.map((faq, i) => (
                                            <FaqItem key={i} faq={faq} index={i} open={openFaqIndex === i} toggle={() => toggle(i)} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </section>

            {/* CTA */}
            <section className="mx-auto max-w-4xl px-6 pb-20">
                <div className="rounded-3xl bg-zinc-50 border border-zinc-100 p-10 text-center">
                    <HelpCircle size={32} className="mb-4 mx-auto text-[#4e73df]" />
                    <h3 className="text-xl font-black text-zinc-900 mb-2">Still need help?</h3>
                    <p className="text-sm text-zinc-500 mb-6 max-w-sm mx-auto">
                        Our support team is available 7 days a week to help you with anything.
                    </p>
                    <a
                        href="/support"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4e73df] to-[#2c52c9] px-8 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-200 hover:opacity-90 transition-opacity"
                    >
                        Contact Support
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function FaqItem({ faq, index, open, toggle, badge }) {
    return (
        <div
            className={`rounded-2xl border transition-all duration-300 ${
                open ? "border-[#4e73df]/30 bg-blue-50/40 shadow-sm" : "border-zinc-100 bg-white hover:border-zinc-200"
            }`}
        >
            <button
                onClick={toggle}
                className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
            >
                <div className="flex-1">
                    {badge && (
                        <span className="mb-1 inline-block rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-semibold text-zinc-500">
                            {badge}
                        </span>
                    )}
                    <p className={`text-sm font-bold leading-snug ${open ? "text-[#4e73df]" : "text-zinc-900"}`}>{faq.q}</p>
                </div>
                <ChevronDown
                    size={18}
                    className={`mt-0.5 flex-shrink-0 text-zinc-400 transition-transform duration-300 ${open ? "rotate-180 text-[#4e73df]" : ""}`}
                />
            </button>
            {open && (
                <div className="px-6 pb-6">
                    <p className="text-sm text-zinc-600 leading-relaxed">{faq.a}</p>
                </div>
            )}
        </div>
    );
}
