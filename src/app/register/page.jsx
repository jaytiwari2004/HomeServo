
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import api from "../../services/api";

export default function RegisterPage() {
    const router = useRouter();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("CUSTOMER");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!name.trim() || !email.trim() || !password || !phone.trim()) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            setLoading(true);

            await api.post("/auth/register", {
                name: name.trim(),
                email: email.trim(),
                password,
                phone: phone.trim(),
                role,
            });

            setSuccess("Registration successful! Redirecting to login...");

            setTimeout(() => {
                router.push("/login");
            }, 1200);
        } catch (err) {
            const message = err.response?.data?.error
                || err.response?.data?.message
                || "Registration failed. Please try again.";

            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="text-3xl font-black text-[#4e73df]">
                        HomeServo
                    </Link>
                    <p className="text-zinc-500 mt-2">
                        Create your account
                    </p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100">
                    <h2 className="text-2xl font-black text-zinc-900 mb-6">
                        Join HomeServo
                    </h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-zinc-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                autoComplete="name"
                                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#4e73df]"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-zinc-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                autoComplete="email"
                                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#4e73df]"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-zinc-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create a password"
                                autoComplete="new-password"
                                minLength={6}
                                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#4e73df]"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-bold text-zinc-700 mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your phone number"
                                autoComplete="tel"
                                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#4e73df]"
                                required
                            />
                        </div>

                        <div className="mb-5">
                            <label className="block text-sm font-bold text-zinc-700 mb-2">
                                Register As
                            </label>
                            <select
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#4e73df] bg-white"
                            >
                                <option value="CUSTOMER">Customer</option>
                                <option value="PROVIDER">Service Provider</option>
                            </select>
                        </div>

                        {error && (
                            <p role="alert" className="text-red-600 text-sm font-semibold mb-4">
                                {error}
                            </p>
                        )}

                        {success && (
                            <p role="status" className="text-green-600 text-sm font-semibold mb-4">
                                {success}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-[#4e73df] py-4 text-white font-bold hover:bg-[#3f5fc4] transition-all disabled:opacity-60"
                        >
                            {loading ? "Creating account..." : "Create Account"}
                        </button>
                    </form>

                    <p className="mt-5 text-center text-sm text-zinc-600">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="font-bold text-[#4e73df] hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
