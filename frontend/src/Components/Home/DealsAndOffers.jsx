import React, { useState, useEffect } from "react";

const DealsAndOffers = () => {
    const deals = [
        {
            id: 1,
            title: "Smart watches",
            discount: 25,
            img: "https://i.imgur.com/8mXfS8v.png",
        },
        {
            id: 2,
            title: "Laptops",
            discount: 15,
            img: "https://i.imgur.com/E6f6Esh.png",
        },
        {
            id: 3,
            title: "GoPro cameras",
            discount: 40,
            img: "https://i.imgur.com/39lA9X0.png",
        },
        {
            id: 4,
            title: "Headphones",
            discount: 25,
            img: "https://i.imgur.com/rM7f80E.png",
        },
        {
            id: 5,
            title: "Canon cameras",
            discount: 25,
            img: "https://i.imgur.com/f7R98D6.png",
        },
    ];

    const [timeLeft, setTimeLeft] = useState({
        days: "04",
        hours: "13",
        mins: "34",
        secs: "56",
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                const s = parseInt(prev.secs);
                return {
                    ...prev,
                    secs: s > 0 ? String(s - 1).padStart(2, "0") : "59",
                };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-md overflow-hidden">
                {/* Left: Countdown */}
                <div className="p-6 lg:w-[280px] shrink-0 flex flex-col justify-between">
                    <div>
                        <h2 className="text-lg font-bold text-gray-900">
                            Deals and offers
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Hygiene equipments
                        </p>
                    </div>

                    <div className="flex gap-2 mt-6">
                        {[
                            { val: timeLeft.days, label: "Days" },
                            { val: timeLeft.hours, label: "Hour" },
                            { val: timeLeft.mins, label: "Min" },
                            { val: timeLeft.secs, label: "Sec" },
                        ].map((unit, i) => (
                            <div
                                key={i}
                                className="w-12 h-12 rounded-md bg-gray-700 text-white
                                           flex flex-col items-center justify-center"
                            >
                                <span className="text-sm font-bold leading-none">
                                    {unit.val}
                                </span>
                                <span className="text-[10px] text-gray-300 mt-1">
                                    {unit.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Products */}
                <div className="flex flex-1 overflow-x-auto border-t lg:border-t-0">
                    {deals.map((deal) => (
                        <div
                            key={deal.id}
                            className="min-w-[180px] flex-1
                                       border-l border-gray-200
                                       px-4 py-5
                                       flex flex-col items-center justify-between
                                       text-center
                                       hover:bg-[#fafbfc]
                                       transition-all duration-200
                                       group cursor-pointer"
                        >
                            <div className="h-28 flex items-center justify-center mb-3">
                                <img
                                    src={deal.img}
                                    alt={deal.title}
                                    className="max-h-full object-contain
                                               transition-transform duration-200
                                               group-hover:scale-105"
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-800 mb-2">
                                    {deal.title}
                                </p>
                                <span
                                    className="inline-block bg-red-100 text-red-600
                                                 px-3 py-1 rounded-full
                                                 text-xs font-semibold"
                                >
                                    −{deal.discount}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DealsAndOffers;
