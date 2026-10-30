"use client";

import React, { useEffect, useState } from 'react';
import {
    Home as HomeIcon,
    Zap,
    Hammer,
    Droplets,
    Settings,
    MoreHorizontal
} from 'lucide-react';

import { getAllServices } from '../services/serviceApi';

const Services = () => {

    const [services, setServices] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadServices = async () => {
            try {
                const data = await getAllServices();
                setServices(data);
            } catch (error) {
                console.error(error);
                setError("Unable to load services");
            }
        };

        loadServices();
    }, []);

    const getServiceIcon = (name) => {
        const serviceName = name.toLowerCase();

        if (serviceName.includes("electric")) {
            return <Zap className="w-6 h-6" />;
        }

        if (serviceName.includes("plumb")) {
            return <Droplets className="w-6 h-6" />;
        }

        if (serviceName.includes("hand")) {
            return <Hammer className="w-6 h-6" />;
        }

        if (serviceName.includes("mechanic")) {
            return <Settings className="w-6 h-6" />;
        }

        if (serviceName.includes("home")) {
            return <HomeIcon className="w-6 h-6" />;
        }

        return <MoreHorizontal className="w-6 h-6" />;
    };

    return (
        <section className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 pb-20 border-b border-zinc-100">

            {error && (
                <p className="col-span-full text-red-500">
                    {error}
                </p>
            )}

            {services.map((service) => (
                <div
                    key={service.id}
                    className="group flex flex-col items-start gap-6 rounded-[1.5rem] border border-zinc-100 bg-white p-6 transition-all hover:bg-[#91acf3] hover:border-transparent hover:shadow-lg hover:shadow-blue-100"
                >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-50 text-[#91acf3] transition-all group-hover:bg-white/20 group-hover:text-white group-hover:scale-110">
                        {getServiceIcon(service.name)}
                    </div>

                    <div className="flex w-full items-center justify-between">
                        <span className="text-[14px] font-semibold text-zinc-900 transition-colors group-hover:text-white">
                            {service.name}
                        </span>
                    </div>

                </div>
            ))}

        </section>
    );
};

export default Services;