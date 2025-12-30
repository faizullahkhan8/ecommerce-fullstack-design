import HeroSection from "../Components/Home/HeroSection";
import DealsAndOffers from "../Components/Home/DealsAndOffers";
import Grid from "../Components/Home/Grid";
import RequestQuote from "../Components/Home/RequestQuote";
import RecommendedItems from "../Components/Home/RecommendedItems";
import ExtraServices from "../Components/Home/ExtraServices";
import NewsLetter from "../Components/Home/NewsLetter";

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
        <div className="bg-gray-50 min-h-screen pb-12">
            <div className="container py-6 space-y-6">
                <HeroSection />
                <DealsAndOffers />
                
                <Grid 
                    title="Home and outdoor" 
                    bannerImg="https://picsum.photos/id/111/300/600" 
                    items={homeOutdoorItems} 
                />
                
                <Grid 
                    title="Consumer electronics and gadgets" 
                    bannerImg="https://picsum.photos/id/112/300/600" 
                    items={electronicsItems} 
                />
                
                <RequestQuote />
                <RecommendedItems />
                <ExtraServices />
                <NewsLetter />
            </div>
        </div>
    );
};

export default HomePage;
