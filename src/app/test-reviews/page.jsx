"use client";

import { useEffect, useState } from "react";
import { getAllReviews } from "../../services/reviewApi";

export default function TestReviews() {

    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadReviews = async () => {
            try {
                const data = await getAllReviews();
                setReviews(data);
            } catch (error) {
                console.error(error);
                setError("Unable to fetch reviews");
            }
        };

        loadReviews();
    }, []);

    return (
        <div className="min-h-screen p-10">

            <h1 className="text-3xl font-bold mb-6">
                Reviews API Test
            </h1>

            {error && (
                <p className="text-red-500">
                    {error}
                </p>
            )}

            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="border p-5 mb-4 rounded"
                >
                    <p>ID: {review.id}</p>

                    <p>
                        Booking ID: {review.booking?.id}
                    </p>

                    <p>
                        Customer: {review.customer?.name}
                    </p>

                    <p>
                        Provider: {review.provider?.name}
                    </p>

                    <p>
                        Rating: {review.rating}/5
                    </p>

                    <p>
                        Comment: {review.comment}
                    </p>
                </div>
            ))}

        </div>
    );
}