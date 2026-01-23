import React from 'react';

const CTA = () => {
    return (
        <section className="mt-20 mb-10">
            <div className="rounded-[3rem] bg-gradient-to-b from-[#91acf3] to-[#7187e8] py-20 px-6 text-center text-white">
                <h2 className="text-5xl font-bold tracking-tight mb-6">Join Our Community of <br /> Homeowners and Experts</h2>
                <p className="mx-auto max-w-2xl text-lg text-white/80 mb-10">
                    Sign up today to access a vast network of skilled professionals and exclusive home service resources.
                    Get started and experience seamless service management!
                </p>
                <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-zinc-800 transition-all">
                    Start For free
                </button>
            </div>
        </section>
    );
};

export default CTA;
