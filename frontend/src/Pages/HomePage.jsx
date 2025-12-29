import Grid from "../Components/Home/Grid";
import HeroSection from "../Components/Home/HeroSection";
import DealsAndOffers from "../Components/Home/DealsAndOffers";
import RequestQuoteSection from "../Components/Home/RequestQuote";
import RecommendedItems from "../Components/Home/RecommendedItems";
import ExtraServices from "../Components/Home/ExtraServices";
import Newsletter from "../Components/Home/NewsLetter";
import chairImg from "../assets/images/sofas.png";
import sofaImg from "../assets/images/yellow-sofas.png";
import mixerImg from "../assets/images/kitchen-mixer.png";
import watchImg from "../assets/images/watch.png";

const HOME_ITEMS = [
    { name: "Soft chairs", price: "19", image: chairImg },
    { name: "Sofa & chair", price: "19", image: sofaImg },
    { name: "Kitchen mixer", price: "100", image: mixerImg },
    { name: "Smart watch", price: "19", image: watchImg },
    { name: "Soft chairs", price: "19", image: chairImg },
    { name: "Sofa & chair", price: "19", image: sofaImg },
    { name: "Kitchen mixer", price: "100", image: mixerImg },
    { name: "Smart watch", price: "19", image: watchImg },
];

const HomePage = () => {
    return (
        <div className="min-h-screen bg-[#F7FAFC]">
            {/* 1. Hero / Main Section */}
            <section className="py-10 px-4 md:px-6 lg:px-8">
                <HeroSection />
            </section>

            {/* 2. Deals & Offers */}
            <section className="py-10 px-4 md:px-6 lg:px-8">
                <DealsAndOffers />
            </section>

            {/* 3. Grid Sections */}
            <section className="py-10 px-4 md:px-6 lg:px-8">
                <Grid title="Home and outdoor" items={HOME_ITEMS} />
            </section>

            <section className="py-10 px-4 md:px-6 lg:px-8">
                <Grid title="Kitchen & Appliances" items={HOME_ITEMS} />
            </section>

            {/* 4. Request Quote */}
            <section className="py-10 px-4 md:px-6 lg:px-8">
                <RequestQuoteSection />
            </section>

            {/* 5. Recommended Items */}
            <section className="py-10 px-4 md:px-6 lg:px-8">
                <RecommendedItems />
            </section>

            {/* 6. Extra Services */}
            <section className="py-10 px-4 md:px-6 lg:px-8">
                <ExtraServices />
            </section>

            {/* 7. Newsletter */}
            <section className="py-10 px-4 md:px-6 lg:px-8">
                <Newsletter />
            </section>
        </div>
    );
};

export default HomePage;
