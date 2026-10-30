"use client";

import { useEffect, useState } from "react";
import { getAllBookings } from "../../services/bookingApi";
import { useRouter } from "next/navigation";

export default function BookingsPage() {

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {

        const loadBookings = async () => {

            try {

                const data = await getAllBookings();

                console.log("Bookings:", data);

                // Temporary:
                // Customer ID 2 is our test customer
                const storedUser = localStorage.getItem("user");

                if (!storedUser) {
                    router.replace("/login");
                    return;
                }

                const user = JSON.parse(storedUser);

                const customerBookings = data.filter(
                    (booking) => booking.customer?.id === user.id
                );

                setBookings(customerBookings);

            } catch (error) {

                console.error("Bookings load error:", error);

                setError("Unable to load bookings");

            } finally {

                setLoading(false);

            }
        };

        loadBookings();

    }, []);


    if (loading) {
        return (
            <main className="min-h-screen bg-zinc-50 flex items-center justify-center">
                <p className="text-zinc-500 font-semibold">
                    Loading bookings...
                </p>
            </main>
        );
    }


    if (error) {
        return (
            <main className="min-h-screen bg-zinc-50 flex items-center justify-center">
                <p className="text-red-500 font-semibold">
                    {error}
                </p>
            </main>
        );
    }


    return (
        <main className="min-h-screen bg-zinc-50 px-6 py-10">

            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="mb-8">

                    <h1 className="text-3xl font-black text-zinc-900">
                        My Bookings
                    </h1>

                    <p className="text-zinc-500 mt-2">
                        View and manage your service bookings.
                    </p>

                </div>


                {/* No bookings */}
                {bookings.length === 0 ? (

                    <div className="bg-white rounded-2xl border border-zinc-100 p-10 text-center">

                        <h2 className="text-xl font-bold text-zinc-900 mb-2">
                            No bookings yet
                        </h2>

                        <p className="text-zinc-500">
                            Your service bookings will appear here.
                        </p>

                    </div>

                ) : (

                    <div className="space-y-5">

                        {bookings.map((booking) => (

                            <div
                                key={booking.id}
                                onClick={() => router.push(`/bookings/${booking.id}`)}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-100 cursor-pointer hover:shadow-md hover:border-[#4e73df] transition-all"
                            >

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                                    {/* Booking Info */}
                                    <div>

                                        <p className="text-sm text-zinc-400 mb-1">
                                            Booking #{booking.id}
                                        </p>

                                        <h2 className="text-xl font-black text-zinc-900">
                                            {booking.service?.name || "Service"}
                                        </h2>

                                        <p className="text-zinc-500 mt-2">
                                            Provider:{" "}
                                            <span className="font-semibold text-zinc-700">
                                                {booking.provider?.name || "Provider"}
                                            </span>
                                        </p>

                                        <p className="text-zinc-500 mt-1">
                                            Date:{" "}
                                            <span className="font-semibold text-zinc-700">
                                                {booking.bookingDate
                                                    ? new Date(booking.bookingDate).toLocaleDateString()
                                                    : "N/A"}
                                            </span>
                                        </p>

                                        <p className="text-zinc-500 mt-1">
                                            Time:{" "}
                                            <span className="font-semibold text-zinc-700">
                                                {booking.bookingDate
                                                    ? new Date(booking.bookingDate).toLocaleTimeString([], {
                                                        hour: "2-digit",
                                                        minute: "2-digit"
                                                    })
                                                    : "N/A"}
                                            </span>
                                        </p>

                                    </div>


                                    {/* Status */}
                                    <div>

                                        <span
                                            className={`inline-flex px-4 py-2 rounded-full text-sm font-bold ${booking.status === "PENDING"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : booking.status === "COMPLETED"
                                                    ? "bg-green-100 text-green-700"
                                                    : booking.status === "CANCELLED"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-zinc-100 text-zinc-700"
                                                }`}
                                        >
                                            {booking.status}
                                        </span>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </main>
    );
}