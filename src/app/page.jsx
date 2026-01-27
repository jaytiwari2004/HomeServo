import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import FeaturesGrid from '../components/FeaturesGrid';
import FeaturedServices from '../components/FeaturedServices';
import TrustedProviders from '../components/TrustedProviders';
import RecentTips from '../components/RecentTips';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 pt-24 sm:px-6">
        <Hero />
        <Services />
        <HowItWorks />
        <FeaturesGrid />
        <FeaturedServices />
        <TrustedProviders />
        <RecentTips />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
