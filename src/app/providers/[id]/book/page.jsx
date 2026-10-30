"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { getProviderProfileById } from "../../../../services/providerProfileApi";
import { createBooking } from "../../../../services/bookingApi";
import api from "../../../../services/api";

export default function BookingPage() {

    const params = useParams();
    const router = useRouter();

    // Provider Profile ID from URL
    // Example: /providers/1/book
    const providerId = params.id;

    const [providerUserId, setProviderUserId] = useState(null);

    // Services from backend
    const [services, setServices] = useState([]);

    // Selected service
    const [selectedServiceId, setSelectedServiceId] = useState("");

    const [bookingDate, setBookingDate] = useState("");
    const [bookingTime, setBookingTime] = useState("");

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);


    // Get provider's actual User ID
    useEffect(() => {

        const loadProvider = async () => {

            try {

                const provider = await getProviderProfileById(providerId);

                console.log("Provider Profile:", provider);
                console.log("Provider User ID:", provider.userId);

                setProviderUserId(provider.userId);

            } catch (error) {

                console.error("Provider load error:", error);

                setError("Unable to load provider");

            }
        };

        if (providerId) {
            loadProvider();
        }

    }, [providerId]);


    // Get all services from backend
    useEffect(() => {

        const loadServices = async () => {

            try {

                const response = await api.get("/services");

                console.log("Services:", response.data);

                setServices(response.data);

            } catch (error) {

                console.error("Services load error:", error);

                setError("Unable to load services");

            }
        };

        loadServices();

    }, []);


    // Create booking
    const handleContinue = async (e) => {

        e.preventDefault();

        if (!selectedServiceId) {

            setError("Please select a service");

            return;
        }

        if (!bookingDate || !bookingTime) {

            setError("Please select date and time");

            return;
        }

        if (!providerUserId) {

            setError("Provider information is still loading");

            return;
        }
        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            setError("Please login before booking a service.");
            router.push("/login");
            return;
        }

        const user = JSON.parse(storedUser);
        try {

            setLoading(true);
            setError("");

            const bookingData = {
                customer: { id: user.id },
                provider: { id: providerUserId },
                service: { id: Number(selectedServiceId) },
                bookingDate: `${bookingDate}T${bookingTime}:00`,
                status: "PENDING"
            };
            console.log("Sending booking:", bookingData);

            const response = await createBooking(bookingData);

            console.log("Booking created:", response);

            alert("Booking created successfully!");

        } catch (error) {

            console.error("Booking error:", error);

            setError("Unable to create booking. Please try again.");

        } finally {

            setLoading(false);

        }
    };


    return (
        <main className="min-h-screen bg-zinc-50 px-6 py-10">

            <div className="max-w-2xl mx-auto">

                {/* Back */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 text-zinc-500 hover:text-[#4e73df]"
                >
                    ← Back
                </button>


                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100">

                    <h1 className="text-3xl font-black text-zinc-900 mb-2">
                        Book Service
                    </h1>

                    <p className="text-zinc-500 mb-8">
                        Select your preferred service, date and time.
                    </p>


                    <form onSubmit={handleContinue}>

                        {/* Service */}
                        <div className="mb-6">

                            <label className="block text-sm font-bold text-zinc-700 mb-2">
                                Select Service
                            </label>

                            <select
                                value={selectedServiceId}
                                onChange={(e) => setSelectedServiceId(e.target.value)}
                                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#4e73df] bg-white"
                            >

                                <option value="">
                                    Select a service
                                </option>

                                {services.map((service) => (

                                    <option
                                        key={service.id}
                                        value={service.id}
                                    >
                                        {service.name} - ₹{service.price}
                                    </option>

                                ))}

                            </select>

                        </div>


                        {/* Date */}
                        <div className="mb-6">

                            <label className="block text-sm font-bold text-zinc-700 mb-2">
                                Select Date
                            </label>

                            <input
                                type="date"
                                value={bookingDate}
                                onChange={(e) => setBookingDate(e.target.value)}
                                min={new Date().toISOString().split("T")[0]}
                                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#4e73df]"
                            />

                        </div>


                        {/* Time */}
                        <div className="mb-6">

                            <label className="block text-sm font-bold text-zinc-700 mb-2">
                                Select Time
                            </label>

                            <input
                                type="time"
                                value={bookingTime}
                                onChange={(e) => setBookingTime(e.target.value)}
                                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#4e73df]"
                            />

                        </div>


                        {/* Error */}
                        {error && (
                            <p className="text-red-500 text-sm font-semibold mb-5">
                                {error}
                            </p>
                        )}


                        {/* Continue */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-[#4e73df] py-4 text-white font-bold hover:bg-[#3f5fc4] transition-all disabled:opacity-50"
                        >
                            {loading ? "Creating Booking..." : "Continue"}
                        </button>

                    </form>

                </div>

            </div>

        </main>
    );
}