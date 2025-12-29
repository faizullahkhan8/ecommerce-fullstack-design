import ProductCard from "../ProductCard";
import tshirt from "../../assets/images/t-shirt.png";
import tshirtBlack from "../../assets/images/t-shirt-black.png";
import mensCoat from "../../assets/images/mens-coat.png";
import bag from "../../assets/images/bag.png";
import wallet from "../../assets/images/money-valut.png";
import camera from "../../assets/images/camera.png";
import headphones from "../../assets/images/headphones.png";
import watch from "../../assets/images/watch.png";
import shoes from "../../assets/images/shoes.png";

const RecommendedItems = () => {
    const products = [
        {
            id: 1,
            price: "10.30",
            title: "T-shirts with multiple colors, for men",
            image: tshirt,
        },
        {
            id: 2,
            price: "10.30",
            title: "Jeans shorts for men blue color",
            image: tshirtBlack,
        },
        {
            id: 3,
            price: "12.50",
            title: "Brown winter coat medium size",
            image: mensCoat,
        },
        {
            id: 4,
            price: "34.00",
            title: "Jeans bag for travel for men",
            image: bag,
        },
        {
            id: 5,
            price: "99.00",
            title: "Leather wallet",
            image: wallet,
        },
        {
            id: 6,
            price: "9.99",
            title: "Canon camera black, 100x zoom",
            image: camera,
        },
        {
            id: 7,
            price: "8.99",
            title: "Headset for gaming with mic",
            image: headphones,
        },
        {
            id: 8,
            price: "10.30",
            title: "Smartwatch silver color modern",
            image: watch,
        },
        {
            id: 9,
            price: "10.30",
            title: "Blue wallet for men leather material",
            image: wallet,
        },
        {
            id: 10,
            price: "80.95",
            title: "Jeans bag for travel for men",
            image: shoes,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
                Recommended items
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        price={product.price}
                        title={product.title}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecommendedItems;
