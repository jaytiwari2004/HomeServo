"use client";

import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userApi";

export default function TestApi() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await getAllUsers();
                setUsers(data);
            } catch (error) {
                console.error(error);
                setError("Unable to fetch users");
            }
        };

        loadUsers();
    }, []);

    return (
        <div className="min-h-screen p-10">

            <h1 className="text-3xl font-bold mb-6">
                User API Test
            </h1>

            {error && (
                <p className="text-red-500">
                    {error}
                </p>
            )}

            <div>
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="border p-4 mb-4 rounded"
                    >
                        <p>ID: {user.id}</p>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p>Role: {user.role}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}