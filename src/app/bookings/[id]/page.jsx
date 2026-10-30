"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getBookingById } from "../../../services/bookingApi";

export default function BookingDetailsPage() {
    const params = useParams();
    const router = useRouter();

    const bookingId = params.id;

    const [booking, setBooking] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadBooking = async () => {
            try {
                const data = await getBookingById(bookingId);

                console.log("Booking Details:", data);

                setBooking(data);
            } catch (error) {
                console.error("Booking details error:", error);
                setError("Unable to load booking details.");
            } finally {
                setLoading(false);
            }
        };

        if (bookingId) {
            loadBooking();
        }
    }, [bookingId]);

    if (loading) {
        return (
            <main className="min-h-screen bg-zinc-50 flex items-center justify-center">
                <p className="text-zinc-500 font-semibold">
                    Loading booking...
                </p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-6">
                <div className="text-center">
                    <p className="text-red-500 font-semibold mb-4">
                        {error}
                    </p>

                    <button
                        onClick={() => router.back()}
                        className="px-5 py-3 rounded-xl bg-[#4e73df] text-white font-bold"
                    >
                        Go Back
                    </button>
                </div>
            </main>
        );
    }

    if (!booking) {
        return (
            <main className="min-h-screen bg-zinc-50 flex items-center justify-center">
                <p className="text-zinc-500">
                    Booking not found.
                </p>
            </main>
        );
    }

    const bookingDate = booking.bookingDate
        ? new Date(booking.bookingDate)
        : null;

    const formattedDate = bookingDate
        ? bookingDate.toLocaleDateString()
        : "N/A";

    const formattedTime = bookingDate
        ? bookingDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })
        : "N/A";

    return (
        <main className="min-h-screen bg-zinc-50 px-6 py-10">
            <div className="max-w-3xl mx-auto">

                {/* Back */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 text-zinc-500 hover:text-[#4e73df] font-semibold"
                >
                    ← Back to My Bookings
                </button>

                {/* Main Card */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">

                        <div>
                            <p className="text-sm text-zinc-400 font-semibold">
                                Booking #{booking.id}
                            </p>

                            <h1 className="text-3xl font-black text-zinc-900 mt-1">
                                {booking.service?.name || "Service"}
                            </h1>
                        </div>

                        <span
                            className={`inline-flex w-fit px-4 py-2 rounded-full text-sm font-bold ${booking.status === "PENDING"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : booking.status === "CONFIRMED"
                                        ? "bg-green-100 text-green-700"
                                        : booking.status === "COMPLETED"
                                            ? "bg-blue-100 text-blue-700"
                                            : booking.status === "CANCELLED"
                                                ? "bg-red-100 text-red-700"
                                                : "bg-zinc-100 text-zinc-700"
                                }`}
                        >
                            {booking.status}
                        </span>
                    </div>

                    {/* Booking Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Service */}
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <p className="text-sm text-zinc-400 font-semibold mb-1">
                                Service
                            </p>

                            <p className="text-lg font-bold text-zinc-900">
                                {booking.service?.name || "N/A"}
                            </p>
                        </div>

                        {/* Price */}
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <p className="text-sm text-zinc-400 font-semibold mb-1">
                                Service Price
                            </p>

                            <p className="text-lg font-bold text-zinc-900">
                                ₹{booking.service?.price ?? "N/A"}
                            </p>
                        </div>

                        {/* Provider */}
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <p className="text-sm text-zinc-400 font-semibold mb-1">
                                Service Provider
                            </p>

                            <p className="text-lg font-bold text-zinc-900">
                                {booking.provider?.name || "N/A"}
                            </p>

                            <p className="text-sm text-zinc-500 mt-1">
                                {booking.provider?.phone || ""}
                            </p>
                        </div>

                        {/* Customer */}
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <p className="text-sm text-zinc-400 font-semibold mb-1">
                                Customer
                            </p>

                            <p className="text-lg font-bold text-zinc-900">
                                {booking.customer?.name || "N/A"}
                            </p>

                            <p className="text-sm text-zinc-500 mt-1">
                                {booking.customer?.email || ""}
                            </p>
                        </div>

                        {/* Date */}
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <p className="text-sm text-zinc-400 font-semibold mb-1">
                                Booking Date
                            </p>

                            <p className="text-lg font-bold text-zinc-900">
                                {formattedDate}
                            </p>
                        </div>

                        {/* Time */}
                        <div className="rounded-2xl bg-zinc-50 p-5">
                            <p className="text-sm text-zinc-400 font-semibold mb-1">
                                Booking Time
                            </p>

                            <p className="text-lg font-bold text-zinc-900">
                                {formattedTime}
                            </p>
                        </div>
                    </div>

                    {/* Status Section */}
                    <div className="mt-8 rounded-2xl border border-zinc-200 p-5">
                        <p className="text-sm text-zinc-400 font-semibold mb-2">
                            Booking Status
                        </p>

                        <p className="text-lg font-bold text-zinc-900">
                            {booking.status}
                        </p>

                        {booking.status === "PENDING" && (
                            <p className="text-sm text-zinc-500 mt-2">
                                Your booking has been created and is waiting
                                for confirmation.
                            </p>
                        )}

                        {booking.status === "CONFIRMED" && (
                            <p className="text-sm text-zinc-500 mt-2">
                                Your booking has been confirmed by the service
                                provider.
                            </p>
                        )}

                        {booking.status === "COMPLETED" && (
                            <p className="text-sm text-zinc-500 mt-2">
                                This service booking has been completed.
                            </p>
                        )}

                        {booking.status === "CANCELLED" && (
                            <p className="text-sm text-zinc-500 mt-2">
                                This booking has been cancelled.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}