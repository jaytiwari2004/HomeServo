"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error("Unable to read saved user:", error);
                localStorage.removeItem("user");
            }
        }
    }, []);
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl font-black tracking-tighter text-[#4e73df]"
                >
                    HomeServo
                </Link>

                {/* Navigation */}
                <div className="hidden items-center gap-8 lg:flex">
                    <Link
                        href="/"
                        className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-black"
                    >
                        Explore
                    </Link>

                    <Link
                        href="/bookings"
                        className="text-[14px] font-semibold text-[#4e73df] transition-colors hover:text-[#3f5fc4]"
                    >
                        My Bookings
                    </Link>

                    <a
                        href="#"
                        className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-black"
                    >
                        Support
                    </a>

                    <a
                        href="#"
                        className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-black"
                    >
                        FAQ
                    </a>

                    <a
                        href="#"
                        className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-black"
                    >
                        Blog
                    </a>

                    {/* <a
                        href="#"
                        className="text-[14px] font-medium text-zinc-600 transition-colors hover:text-black"
                    >
                        Become Partner
                    </a>
                    */}
                </div>

                {/* Auth Buttons */}
                <div className="flex items-center gap-3">
                    {user ? (
                        <>
                            <span className="text-sm font-semibold text-zinc-700">
                                Hi, {user.name}
                            </span>

                            <button
                                onClick={() => {
                                    localStorage.removeItem("user");
                                    setUser(null);
                                    router.push("/login");
                                }}
                                className="w-24 rounded-lg border border-zinc-100 py-2 text-[14px] font-semibold text-zinc-900 shadow-sm transition-all hover:border-[#4e73df] hover:text-[#4e73df]"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={() => router.push("/login")}
                                className="w-24 rounded-lg border border-zinc-100 py-2 text-[14px] font-semibold text-zinc-900 shadow-sm transition-all hover:border-[#4e73df] hover:text-[#4e73df]"
                            >
                                Login
                            </button>

                            <button
                                onClick={() => router.push("/signup")}
                                className="w-24 rounded-lg border border-zinc-100 py-2 text-[14px] font-semibold text-zinc-900 shadow-sm transition-all hover:border-[#4e73df] hover:text-[#4e73df]"
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;