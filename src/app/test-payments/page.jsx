"use client";

import { useEffect, useState } from "react";
import { getAllPayments } from "../../services/paymentApi";

export default function TestPayments() {

    const [payments, setPayments] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadPayments = async () => {
            try {
                const data = await getAllPayments();
                setPayments(data);
            } catch (error) {
                console.error(error);
                setError("Unable to fetch payments");
            }
        };

        loadPayments();
    }, []);

    return (
        <div className="min-h-screen p-10">

            <h1 className="text-3xl font-bold mb-6">
                Payments API Test
            </h1>

            {error && (
                <p className="text-red-500">
                    {error}
                </p>
            )}

            {payments.map((payment) => (
                <div
                    key={payment.id}
                    className="border p-5 mb-4 rounded"
                >
                    <p>ID: {payment.id}</p>

                    <p>
                        Booking ID: {payment.booking?.id}
                    </p>

                    <p>
                        Amount: ₹{payment.amount}
                    </p>

                    <p>
                        Status: {payment.status}
                    </p>

                    <p>
                        Payment Date: {payment.paymentDate}
                    </p>
                </div>
            ))}

        </div>
    );
}