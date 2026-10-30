"use client";
import { useEffect } from "react";

export default function Test() {
    useEffect(() => {
        fetch("http://localhost:5000/api/users")
            .then(res => res.json())
            .then(data => console.log(data));
    }, []);

    return <h1>Check console</h1>;
}