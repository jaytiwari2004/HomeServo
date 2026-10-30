"use client";

import { useEffect, useState } from "react";
import { getAllBookings } from "../../services/bookingApi";

export default function TestBookings() {

    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadBookings = async () => {
            try {
                const data = await getAllBookings();
                setBookings(data);
            } catch (error) {
                console.error(error);
                setError("Unable to fetch bookings");
            }
        };

        loadBookings();
    }, []);

    return (
        <div className="min-h-screen p-10">

            <h1 className="text-3xl font-bold mb-6">
                Bookings API Test
            </h1>

            {error && (
                <p className="text-red-500">
                    {error}
                </p>
            )}

            {bookings.map((booking) => (
                <div
                    key={booking.id}
                    className="border p-5 mb-4 rounded"
                >
                    <p>ID: {booking.id}</p>

                    <p>
                        Service: {booking.service?.name}
                    </p>

                    <p>
                        Customer: {booking.customer?.name}
                    </p>

                    <p>
                        Provider: {booking.provider?.name}
                    </p>

                    <p>
                        Date: {booking.bookingDate}
                    </p>

                    <p>
                        Status: {booking.status}
                    </p>
                </div>
            ))}

        </div>
    );
}