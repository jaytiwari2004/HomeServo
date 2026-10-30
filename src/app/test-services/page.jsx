"use client";

import { useEffect, useState } from "react";
import { getAllServices } from "../../services/serviceApi";

export default function TestServices() {

    const [services, setServices] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadServices = async () => {
            try {
                const data = await getAllServices();
                setServices(data);
            } catch (error) {
                console.error(error);
                setError("Unable to fetch services");
            }
        };

        loadServices();
    }, []);

    return (
        <div className="min-h-screen p-10">

            <h1 className="text-3xl font-bold mb-6">
                Services API Test
            </h1>

            {error && (
                <p className="text-red-500">
                    {error}
                </p>
            )}

            {services.map((service) => (
                <div
                    key={service.id}
                    className="border p-4 mb-4 rounded"
                >
                    <p>ID: {service.id}</p>
                    <p>Name: {service.name}</p>
                    <p>Description: {service.description}</p>
                    <p>Price: ₹{service.price}</p>
                </div>
            ))}

        </div>
    );
}