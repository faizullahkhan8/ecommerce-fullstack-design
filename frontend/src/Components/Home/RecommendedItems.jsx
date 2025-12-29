import ProductCard from "../ProductCard";

const RecommendedItems = () => {
    const products = [
        {
            id: 1,
            price: "10.30",
            title: "T-shirts with multiple colors, for men",
            image: "https://i.imgur.com/r6O5x5v.png",
        },
        {
            id: 2,
            price: "10.30",
            title: "Jeans shorts for men blue color",
            image: "https://i.imgur.com/83pBfUf.png",
        },
        {
            id: 3,
            price: "12.50",
            title: "Brown winter coat medium size",
            image: "https://i.imgur.com/M6Lw8fO.png",
        },
        {
            id: 4,
            price: "34.00",
            title: "Jeans bag for travel for men",
            image: "https://i.imgur.com/6D6Y6Tf.png",
        },
        {
            id: 5,
            price: "99.00",
            title: "Leather wallet",
            image: "https://i.imgur.com/K3fX7Qe.png",
        },
        {
            id: 6,
            price: "9.99",
            title: "Canon camera black, 100x zoom",
            image: "https://i.imgur.com/XG7vY0m.png",
        },
        {
            id: 7,
            price: "8.99",
            title: "Headset for gaming with mic",
            image: "https://i.imgur.com/V9r9p0O.png",
        },
        {
            id: 8,
            price: "10.30",
            title: "Smartwatch silver color modern",
            image: "https://i.imgur.com/8mXfS8v.png",
        },
        {
            id: 9,
            price: "10.30",
            title: "Blue wallet for men leather material",
            image: "https://i.imgur.com/XG7vY0m.png",
        },
        {
            id: 10,
            price: "80.95",
            title: "Jeans bag for travel for men",
            image: "https://i.imgur.com/U6f6Esh.png",
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
