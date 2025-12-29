import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Youtube,
    ChevronUp,
} from "lucide-react";

const Footer = () => {
    const footerSections = [
        {
            title: "About",
            links: ["About Us", "Find store", "Categories", "Blogs"],
        },
        {
            title: "Partnership",
            links: ["About Us", "Find store", "Categories", "Blogs"],
        },
        {
            title: "Information",
            links: ["Help Center", "Money Refund", "Shipping", "Contact us"],
        },
        {
            title: "For users",
            links: ["Login", "Register", "Settings", "My Orders"],
        },
    ];

    const socialIcons = [
        { icon: <Facebook size={20} />, label: "Facebook" },
        { icon: <Twitter size={20} />, label: "Twitter" },
        { icon: <Linkedin size={20} />, label: "LinkedIn" },
        { icon: <Instagram size={20} />, label: "Instagram" },
        { icon: <Youtube size={20} />, label: "YouTube" },
    ];

    return (
        <footer className="w-full font-sans">
            {/* Top Footer Section */}
            <div className="bg-white py-10 px-4 md:px-12 border-b border-gray-200">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
                    {/* Brand Info */}
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-[#127FFF] p-2 rounded-md flex items-center justify-center">
                                <div className="w-6 h-6 border-2 border-white rounded-sm relative">
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-2 border-t-2 border-x-2 border-white rounded-t-full"></div>
                                </div>
                            </div>
                            <span className="text-[#127FFF] text-2xl font-bold">
                                Brand
                            </span>
                        </div>
                        <p className="text-[#505050] text-base leading-relaxed mb-6">
                            Best information about the company goes here.
                        </p>
                        <div className="flex gap-3">
                            {socialIcons.map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    aria-label={item.label}
                                    className="w-9 h-9 bg-[#BDC4CD] text-white rounded-full flex items-center justify-center 
                             hover:bg-[#8B96A5] hover:scale-110 transition-all"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 grow lg:pl-10">
                        {footerSections.map((section, idx) => (
                            <div key={idx}>
                                <h4 className="text-[#1C1C1C] font-bold mb-4">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <a
                                                href="#"
                                                className="text-[#8B96A5] hover:text-[#127FFF] transition-colors"
                                            >
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Get App Section */}
                    <div className="min-w-35.5 flex flex-col gap-2">
                        <h4 className="text-[#1C1C1C] font-bold mb-4">
                            Get app
                        </h4>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                            alt="App Store"
                            className="h-10 w-32 cursor-pointer rounded-md hover:brightness-90 transition-all"
                        />
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="h-10 w-32 cursor-pointer rounded-md hover:brightness-90 transition-all"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="bg-[#EFF2F4] py-5 px-4 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#606060] text-sm">© 2023 Ecommerce.</p>
                    <div className="flex items-center gap-2 text-[#606060] cursor-pointer hover:text-[#127FFF] transition-colors">
                        <img
                            src="https://flagcdn.com/us.svg"
                            alt="US Flag"
                            className="w-6 h-4 object-cover rounded-sm"
                        />
                        <span className="text-sm">English</span>
                        <ChevronUp size={20} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
