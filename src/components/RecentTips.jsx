import React from 'react';

const RecentTips = () => {
    const tips = [
        {
            title: "Top 5 Essential Home Maintenance Tips for Every Season",
            image: "/plumbing.png"
        },
        {
            title: "How to Choose the Right Professional for Your Home Repairs",
            image: "/pro3.png"
        },
        {
            title: "The Benefits of Regular Home Maintenance to Prevent Major Issues",
            image: "/cleaning.png"
        }
    ];

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-black text-zinc-900 mb-10 tracking-tight">Recent Tips</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tips.map((tip, idx) => (
                        <div key={idx} className="group cursor-pointer relative rounded-[1.5rem] overflow-hidden aspect-[4/4.5] shadow-lg">
                            <img
                                src={tip.image}
                                alt={tip.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Overlay Card */}
                            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-6 rounded-[1.2rem] shadow-md transition-transform group-hover:-translate-y-1">
                                <h3 className="text-zinc-900 font-bold text-base leading-tight tracking-tight">
                                    {tip.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RecentTips;
