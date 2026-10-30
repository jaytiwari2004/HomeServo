"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../services/api";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter email and password.");
            return;
        }

        try {
            setLoading(true);
            setError("");

            const response = await api.post("/auth/login", {
                email: email,
                password: password,
            });

            console.log("Login Response:", response.data);

            // Temporarily store logged-in user
            localStorage.setItem(
                "user",
                JSON.stringify(response.data)
            );

            alert("Login successful!");

            router.push("/");
        } catch (error) {
            console.error("Login Error:", error);

            if (error.response?.data?.message) {
                setError(error.response.data.message);
            } else {
                setError("Invalid email or password.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-zinc-50 flex items-center justify-center px-6 py-10">

            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black text-[#4e73df]">
                        HomeServo
                    </h1>

                    <p className="text-zinc-500 mt-2">
                        Login to your account
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100">

                    <h2 className="text-2xl font-black text-zinc-900 mb-6">
                        Welcome Back
                    </h2>

                    <form onSubmit={handleLogin}>

                        {/* Email */}
                        <div className="mb-5">
                            <label className="block text-sm font-bold text-zinc-700 mb-2">
                                Email
                            </label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#4e73df]"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-5">
                            <label className="block text-sm font-bold text-zinc-700 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none focus:border-[#4e73df]"
                            />
                        </div>

                        {/* Error */}
                        {error && (
                            <p className="text-red-500 text-sm font-semibold mb-5">
                                {error}
                            </p>
                        )}

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-[#4e73df] py-4 text-white font-bold hover:bg-[#3f5fc4] transition-all disabled:opacity-60"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                        {/* Sign Up Link */}
                        <p className="mt-5 text-center text-sm text-zinc-600">
                            Don't have an account?{" "}
                            <a
                                href="/register"
                                className="font-bold text-[#4e73df] hover:underline"
                            >
                                Sign up
                            </a>
                        </p>

                    </form>
                </div>
            </div>
        </main>
    );
}