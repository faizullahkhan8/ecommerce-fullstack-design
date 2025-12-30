import HeroSection from "../Components/Home/HeroSection";
import DealsAndOffers from "../Components/Home/DealsAndOffers";
import Grid from "../Components/Home/Grid";
import RequestQuote from "../Components/Home/RequestQuote";
import RecommendedItems from "../Components/Home/RecommendedItems";
import ExtraServices from "../Components/Home/ExtraServices";
import NewsLetter from "../Components/Home/NewsLetter";
import SuppliersByRegion from "../Components/Home/SuppliersByRegion";

// Import images for Grid Mock Data
// Using paths relative to Components/Home or import logic
// Ideally we should import them. Let's assume standard imports or use placeholders if needed.
// Checking Grid.jsx: it expects `items` array with {name, price, image}.

// Mock Data for Home & Outdoor Grid
const homeOutdoorItems = [
    { name: "Smart watches", price: 19, image: "https://picsum.photos/id/101/100/100" },
    { name: "Cameras", price: 89, image: "https://picsum.photos/id/102/100/100" },
    { name: "Headphones", price: 10, image: "https://picsum.photos/id/103/100/100" },
    { name: "Smart watches", price: 19, image: "https://picsum.photos/id/104/100/100" },
    { name: "Gaming set", price: 35, image: "https://picsum.photos/id/105/100/100" },
    { name: "Laptops & PC", price: 340, image: "https://picsum.photos/id/106/100/100" },
    { name: "Smartphones", price: 19, image: "https://picsum.photos/id/107/100/100" },
    { name: "Electric kattle", price: 240, image: "https://picsum.photos/id/108/100/100" },
];

// Mock Data for Consumer Electronics Grid
const electronicsItems = [
    { name: "Smart watches", price: 19, image: "https://picsum.photos/id/201/100/100" },
    { name: "Cameras", price: 89, image: "https://picsum.photos/id/202/100/100" },
    { name: "Headphones", price: 10, image: "https://picsum.photos/id/203/100/100" },
    { name: "Smart watches", price: 19, image: "https://picsum.photos/id/204/100/100" },
    { name: "Gaming set", price: 35, image: "https://picsum.photos/id/205/100/100" },
    { name: "Laptops & PC", price: 340, image: "https://picsum.photos/id/206/100/100" },
    { name: "Smartphones", price: 19, image: "https://picsum.photos/id/207/100/100" },
    { name: "Electric kattle", price: 240, image: "https://picsum.photos/id/208/100/100" },
];

const HomePage = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section - Full width */}
            <HeroSection />
            
            {/* Deals and Offers Section */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4">
                    <DealsAndOffers />
                </div>
            </section>
            
            {/* Home & Outdoor Grid */}
            <section className="py-8 md:py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <Grid 
                        title="Home and outdoor" 
                        bannerImg="https://picsum.photos/id/111/300/600" 
                        items={homeOutdoorItems} 
                    />
                </div>
            </section>
            
            {/* Consumer Electronics Grid */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4">
                    <Grid 
                        title="Consumer electronics and gadgets" 
                        bannerImg="https://picsum.photos/id/112/300/600" 
                        items={electronicsItems} 
                    />
                </div>
            </section>
            
            {/* Request Quote Section - Full width background */}
            <section className="py-12 md:py-16">
                <RequestQuote />
            </section>
            
            {/* Recommended Items Section */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4">
                    <RecommendedItems />
                </div>
            </section>
            
            {/* Extra Services Section */}
            <section className="py-8 md:py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <ExtraServices />
                </div>
            </section>
            
            {/* Suppliers by Region */}
            <section className="py-8 md:py-12 bg-white">
                <div className="container mx-auto px-4">
                    <SuppliersByRegion />
                </div>
            </section>
            
            {/* Newsletter Section */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <NewsLetter />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
