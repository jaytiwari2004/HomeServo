"use client";
import { useState } from "react";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
        const res = await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email })
        });

        const data = await res.json();
        console.log(data);
    };

    return (
        <div>
            <h1>Register</h1>

            <input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}