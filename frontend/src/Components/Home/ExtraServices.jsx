import React from "react";
import { Search, Package, Send, ShieldCheck } from "lucide-react";
import ServiceCard from "../ServiceCard";

const ExtraServices = () => {
    const services = [
        {
            id: 1,
            title: "Source from Industry Hubs",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
            icon: Search,
        },
        {
            id: 2,
            title: "Customize Your Products",
            image: "https://images.unsplash.com/photo-1524292332606-23128325408d?auto=format&fit=crop&q=80&w=800",
            icon: Package,
        },
        {
            id: 3,
            title: "Fast, reliable shipping by ocean or air",
            image: "https://images.unsplash.com/photo-1494412574743-0192490781b1?auto=format&fit=crop&q=80&w=800",
            icon: Send,
        },
        {
            id: 4,
            title: "Product monitoring and inspection",
            image: "https://images.unsplash.com/photo-1553413077-190dd3062649?auto=format&fit=crop&q=80&w=800",
            icon: ShieldCheck,
        },
    ];

    return (
        <section className="max-w-7xl mx-auto">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                Our extra services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        image={service.image}
                        icon={service.icon}
                    />
                ))}
            </div>
        </section>
    );
};

export default ExtraServices;
