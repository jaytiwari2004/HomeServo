"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const posts = [
    {
        id: 1,
        category: "Home Tips",
        title: "10 Signs Your Plumbing Needs Immediate Attention",
        excerpt:
            "Ignoring plumbing issues can lead to costly repairs. Here are the top warning signs every homeowner must know before water damage strikes.",
        author: "Raj Mehta",
        date: "Oct 22, 2026",
        readTime: "5 min read",
        tag: "Featured",
        gradient: "from-blue-500 to-indigo-600",
    },
    {
        id: 2,
        category: "Electrical Safety",
        title: "How to Keep Your Home's Electrical System Safe",
        excerpt:
            "From tripping breakers to flickering lights — discover the electrical hazards you should never ignore and how professionals can help.",
        author: "Sneha Rao",
        date: "Oct 18, 2026",
        readTime: "4 min read",
        tag: null,
        gradient: "from-amber-400 to-orange-500",
    },
    {
        id: 3,
        category: "Cleaning",
        title: "Deep Cleaning vs Regular Cleaning: What's the Difference?",
        excerpt:
            "Understanding when to book a deep clean vs a standard session can save you money and keep your home consistently spotless.",
        author: "Priya Singh",
        date: "Oct 14, 2026",
        readTime: "3 min read",
        tag: null,
        gradient: "from-emerald-400 to-teal-500",
    },
    {
        id: 4,
        category: "HVAC",
        title: "Why Servicing Your AC Before Summer is Non-Negotiable",
        excerpt:
            "A simple annual service can extend your AC's life by years. Learn what professionals check and why it matters for your comfort.",
        author: "Arjun Nair",
        date: "Oct 10, 2026",
        readTime: "6 min read",
        tag: "Popular",
        gradient: "from-sky-400 to-cyan-500",
    },
    {
        id: 5,
        category: "Interior",
        title: "Small Bathroom Renovation Ideas That Don't Break the Bank",
        excerpt:
            "Maximize your bathroom space with smart upgrades. From wall-mounted vanities to smart lighting — budget-friendly ideas inside.",
        author: "Ayesha Khan",
        date: "Oct 6, 2026",
        readTime: "7 min read",
        tag: null,
        gradient: "from-pink-400 to-rose-500",
    },
    {
        id: 6,
        category: "Home Tips",
        title: "How to Prepare Your Home for the Monsoon Season",
        excerpt:
            "Waterproofing, roof checks, and drainage cleaning — the essential checklist every Indian homeowner needs before the rains arrive.",
        author: "Karan Verma",
        date: "Oct 2, 2026",
        readTime: "5 min read",
        tag: null,
        gradient: "from-violet-500 to-purple-600",
    },
];

const categories = ["All", "Home Tips", "Electrical Safety", "Cleaning", "HVAC", "Interior"];

export default function BlogPage() {
    const featured = posts[0];
    const rest = posts.slice(1);

    return (
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#4e73df] pt-32 pb-20 px-6">
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 50%, #4e73df 0%, transparent 50%), radial-gradient(circle at 80% 20%, #6c8fff 0%, transparent 50%)",
                    }}
                />
                <div className="relative mx-auto max-w-4xl text-center">
                    <span className="inline-block mb-4 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                        HomeServo Blog
                    </span>
                    <h1 className="mb-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-tight">
                        Expert Insights for{" "}
                        <span className="bg-gradient-to-r from-sky-300 to-blue-400 bg-clip-text text-transparent">
                            Smarter Homes
                        </span>
                    </h1>
                    <p className="mx-auto max-w-xl text-base text-white/70 leading-relaxed">
                        Tips, guides, and how-tos from our verified home service professionals — helping you maintain, improve, and love your home.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="border-b border-zinc-100 bg-white sticky top-16 z-40">
                <div className="mx-auto max-w-7xl px-6 py-4 flex items-center gap-3 overflow-x-auto scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                                cat === "All"
                                    ? "bg-[#4e73df] text-white shadow-md shadow-blue-200"
                                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Featured Post */}
            <section className="mx-auto max-w-7xl px-6 pt-14">
                <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-zinc-400">Featured Article</h2>
                <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] to-[#1e3a6e] p-10 lg:p-14 transition-transform hover:-translate-y-1 duration-300 cursor-pointer">
                    <div className="absolute right-0 top-0 h-full w-1/2 opacity-10"
                        style={{
                            backgroundImage: "radial-gradient(circle at 80% 30%, #6c8fff, transparent 60%)",
                        }}
                    />
                    <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
                        <div className="flex-1">
                            <span className="inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300 mb-4">
                                {featured.category}
                            </span>
                            <h3 className="text-2xl font-black text-white lg:text-4xl leading-tight mb-4 group-hover:text-blue-200 transition-colors">
                                {featured.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed max-w-xl mb-6">{featured.excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-zinc-500">
                                <div className="flex items-center gap-2">
                                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                                        {featured.author[0]}
                                    </div>
                                    <span className="text-zinc-300">{featured.author}</span>
                                </div>
                                <span>·</span>
                                <span>{featured.date}</span>
                                <span>·</span>
                                <span>{featured.readTime}</span>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <button className="rounded-2xl bg-white px-8 py-3.5 text-sm font-bold text-[#4e73df] shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                                Read Article →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Post Grid */}
            <section className="mx-auto max-w-7xl px-6 py-14">
                <h2 className="mb-8 text-xs font-bold uppercase tracking-widest text-zinc-400">Latest Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {rest.map((post) => (
                        <article
                            key={post.id}
                            className="group flex flex-col rounded-2xl border border-zinc-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
                        >
                            {/* Colour band */}
                            <div className={`h-2 w-full bg-gradient-to-r ${post.gradient}`} />
                            <div className="flex flex-col flex-1 p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500">
                                        {post.category}
                                    </span>
                                    {post.tag && (
                                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#4e73df]">
                                            {post.tag}
                                        </span>
                                    )}
                                </div>
                                <h3 className="mb-2 text-base font-bold text-zinc-900 leading-snug group-hover:text-[#4e73df] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="flex-1 text-sm text-zinc-500 leading-relaxed mb-5">{post.excerpt}</p>
                                <div className="flex items-center gap-3 text-xs text-zinc-400 border-t border-zinc-50 pt-4">
                                    <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 flex items-center justify-center text-white text-[10px] font-bold">
                                        {post.author[0]}
                                    </div>
                                    <span className="font-medium text-zinc-500">{post.author}</span>
                                    <span>·</span>
                                    <span>{post.date}</span>
                                    <span className="ml-auto font-medium text-[#4e73df]">{post.readTime}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="mx-auto max-w-7xl px-6 pb-20">
                <div className="rounded-3xl bg-gradient-to-br from-[#4e73df] to-[#2c52c9] p-12 lg:p-16 text-center">
                    <h2 className="text-2xl font-black text-white lg:text-3xl mb-3">
                        Never Miss a Home Tip
                    </h2>
                    <p className="text-white/70 mb-8 max-w-md mx-auto">
                        Get our weekly digest of home maintenance tips and exclusive deals delivered straight to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 rounded-xl border-0 bg-white/15 px-5 py-3 text-white placeholder-white/50 backdrop-blur-sm outline-none focus:ring-2 focus:ring-white/30 transition"
                        />
                        <button
                            type="submit"
                            className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#4e73df] hover:bg-blue-50 transition-colors"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
}
