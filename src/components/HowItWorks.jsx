import React from 'react';
import { Search, MapPin, PhoneCall, ThumbsUp } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            step: "STEP 1",
            title: "Search for Services",
            desc: "Simply enter your location and select the type of service you're looking for, from plumbing to home repairs and more.",
            icon: <Search className="w-6 h-6 text-white stroke-[2.5]" />
        },
        {
            step: "STEP 2",
            title: "Browse Local Experts",
            desc: "Explore detailed profiles, read customer reviews, and compare ratings of trusted professionals near you.",
            icon: <MapPin className="w-6 h-6 text-white stroke-[2.5]" />
        },
        {
            step: "STEP 3",
            title: "Book Your Service",
            desc: "Choose the time that works best for you and easily book your preferred professional with a few clicks.",
            icon: <PhoneCall className="w-6 h-6 text-white stroke-[2.5]" />
        },
        {
            step: "STEP 4",
            title: "Enjoy your day",
            desc: "Sit back and relax while a qualified expert arrives to complete the job efficiently and to your satisfaction.",
            icon: <ThumbsUp className="w-6 h-6 text-white stroke-[2.5]" />
        }
    ];

    return (
        <section className="py-24">
            <h2 className="text-5xl font-bold tracking-tight text-zinc-900 mb-20">How It works</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {steps.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#91acf3] to-[#7187e8] shadow-md shadow-blue-50">
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-[12px] font-bold tracking-widest text-[#91acf3] mb-4">{item.step}</p>
                            <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                            <p className="text-[15px] leading-relaxed text-zinc-500">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;
