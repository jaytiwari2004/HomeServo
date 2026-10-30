"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Star, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";


import { getProviderProfileById } from "../../../services/providerProfileApi";

export default function ProviderDetails() {

    const params = useParams();
    const router = useRouter();
    const id = params.id;

    const [provider, setProvider] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {

        const loadProvider = async () => {

            try {
                const data = await getProviderProfileById(id);
                setProvider(data);
            } catch (error) {
                console.error(error);
                setError("Unable to load provider");
            }
        };

        if (id) {
            loadProvider();
        }

    }, [id]);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-red-500 font-semibold">
                    {error}
                </p>
            </div>
        );
    }

    if (!provider) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-zinc-500">
                    Loading provider...
                </p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white px-6 py-10">

            <div className="max-w-5xl mx-auto">

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-500 hover:text-[#4e73df] mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Provider Image */}
                    <div className="rounded-[2rem] overflow-hidden border border-zinc-100">
                        <img
                            src={provider.image}
                            alt={provider.name}
                            className="w-full aspect-square object-cover"
                        />
                    </div>

                    {/* Provider Information */}
                    <div className="flex flex-col justify-center">

                        <p className="text-[#4e73df] font-bold mb-2">
                            {provider.category}
                        </p>

                        <h1 className="text-4xl font-black text-zinc-900 mb-4">
                            {provider.name}
                        </h1>

                        <div className="flex items-center gap-2 mb-5">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />

                            <span className="font-bold">
                                {provider.rating}
                            </span>

                            <span className="text-zinc-400">
                                ({provider.reviewCount} reviews)
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-zinc-500 mb-6">
                            <MapPin className="w-5 h-5" />
                            <span>{provider.location}</span>
                        </div>

                        <div className="mb-8">
                            <p className="text-sm text-zinc-400 mb-1">
                                Starting from
                            </p>

                            <p className="text-3xl font-black text-[#4e73df]">
                                ₹{provider.hourlyRate}
                                <span className="text-base text-zinc-400 font-medium">
                                    {" "} / Hr
                                </span>
                            </p>
                        </div>

                        <button
                            onClick={() => router.push(`/providers/${id}/book`)}
                            className="w-full md:w-fit px-8 py-4 rounded-xl bg-[#4e73df] text-white font-bold hover:bg-[#3f5fc4] transition-all"
                        >
                            Book Service
                        </button>

                    </div>

                </div>

            </div>

        </main>
    );
}