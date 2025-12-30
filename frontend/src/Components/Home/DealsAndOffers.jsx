import React, { useState, useEffect } from "react";
import watchImg from "../../assets/images/watch.png";
import laptopImg from "../../assets/images/laptop.png";
import cameraImg from "../../assets/images/camera.png";
import headphonesImg from "../../assets/images/headphones.png";

const DealsAndOffers = () => {
    const deals = [
        { id: 1, title: "Smart watches", discount: 25, img: watchImg },
        { id: 2, title: "Laptops", discount: 15, img: laptopImg },
        { id: 3, title: "GoPro cameras", discount: 40, img: cameraImg },
        { id: 4, title: "Headphones", discount: 25, img: headphonesImg },
        { id: 5, title: "Canon cameras", discount: 25, img: cameraImg },
    ];

    const [timeLeft, setTimeLeft] = useState({ days: "04", hours: "13", mins: "34", secs: "56" });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                const s = parseInt(prev.secs);
                return { ...prev, secs: s > 0 ? String(s - 1).padStart(2, "0") : "59" };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="max-w-7xl mx-auto mb-6">
            <div className="flex flex-col lg:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                {/* Left: Countdown */}
                <div className="p-6 lg:w-[280px] shrink-0 flex flex-col justify-between border-r border-gray-200">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Deals and offers</h2>
                        <p className="text-sm text-gray-500 mt-1">Hygiene equipments</p>
                    </div>

                    <div className="flex gap-2 mt-6">
                        {[{ val: timeLeft.days, label: "Days" }, { val: timeLeft.hours, label: "Hour" }, { val: timeLeft.mins, label: "Min" }, { val: timeLeft.secs, label: "Sec" }].map((unit, i) => (
                            <div key={i} className="w-12 h-12 rounded bg-gray-800 text-white flex flex-col items-center justify-center">
                                <span className="text-base font-bold leading-none">{unit.val}</span>
                                <span className="text-[10px] text-gray-300 mt-0.5">{unit.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Products */}
                <div className="flex flex-1 overflow-x-auto">
                    {deals.map((deal) => (
                        <div key={deal.id} className="min-w-[160px] flex-1 border-l border-gray-200 p-4 flex flex-col items-center justify-center cursor-pointer group hover:bg-gray-50 transition-all duration-300 relative">
                             <div className="w-28 h-28 mb-4 relative flex items-center justify-center">
                                <img src={deal.img} alt={deal.title} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 mix-blend-multiply"/>
                            </div>
                            <h4 className="text-gray-900 font-medium mb-1 text-center group-hover:text-primary transition-colors">{deal.title}</h4>
                            <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full font-bold">-{deal.discount}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DealsAndOffers;
