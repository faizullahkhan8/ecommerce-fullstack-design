import Grid from "../Components/Home/Grid";
import HeroSection from "../Components/Home/HeroSection";

const HOME_ITEMS = [
    { name: "Soft chairs", price: "19", image: "/path-to-chair.png" },
    { name: "Sofa & chair", price: "19", image: "/path-to-sofa.png" },
    { name: "Kitchen mixer", price: "100", image: "/path-to-mixer.png" },
    { name: "Smart watch", price: "19", image: "/path-to-watch.png" },
];

const HomePage = () => {
    return (
        <div className="min-h-screen bg-[#F7FAFC]">
            {/* 1. Hero / Main Section */}
            <section className="py-6">
                <HeroSection />
            </section>
            <section className="pb-6">
                <Grid title={"Home and outdoor"} items={HOME_ITEMS} />
            </section>
            <section className="pb-6">
                <Grid title={"Home and outdoor"} items={HOME_ITEMS} />
            </section>
        </div>
    );
};

export default HomePage;
