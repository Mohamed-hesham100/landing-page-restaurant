import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";

const menuItems = [
  {
    id: "tomahawk",
    name: "Dry-Aged Tomahawk Steak",
    description:
      "Our Dry-Aged Tomahawk Steak is a masterpiece for steak connoisseurs, featuring a 45-day dry-aged, bone-in cut that amplifies its rich, deep flavors. This 450g premium steak is expertly seared to perfection",
    price: 250,
    image: "/tomahawk.jpg",
    ingredients: ["Garlic - 10g", "Rosemary - 3g", "Olive Oil - 15ml"],
    weight: "450g",
  },
  {
    id: "porterhouse",
    name: "Black Porterhouse",
    description:
      "Combining the tenderness of a filet and the rich flavor of a strip steak. 400g cut.",
    price: 50,
    image: "/porterhouse.jpg",
    weight: "400g",
  },
  {
    id: "opera-cake",
    name: "Classic Opera Cake",
    description:
      "Almond sponge cake soaked in coffee syrup, layered with coffee buttercream",
    price: 60,
    image: "/filet.jpg",
    weight: "150g",
  },
  {
    id: "kobe-beef",
    name: "Kobe Beef Steak",
    description:
      "Indulge in the pinnacle of luxury with our Kobe Beef Steak, a 250g cut of the finest",
    price: 80,
    image: "/kobe-beef.jpg",
    weight: "250g",
  },
  {
    id: "filet-mignon",
    name: "Filet Mignon",
    description:
      "The Filet Mignon is the epitome of elegance and tenderness, a 200g cut of prime",
    price: 90,
    image: "/filet-mignon.jpg",
    weight: "200g",
  },
];

export default function RestaurantMenu() {
  const [quantities, setQuantities] = useState(
    menuItems.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const updateQuantity = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + change),
    }));
  };

  const addToCart = (id) => {
    if (quantities[id] === 0) {
      setQuantities((prev) => ({ ...prev, [id]: 1 }));
    }
    console.log(
      `Added ${menuItems.find((item) => item.id === id)?.name} to cart`
    );
  };

  const featuredItem = menuItems[0];
  const gridItems = menuItems.slice(1);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Item */}
          <div
            className="border border-white/20 rounded-xl overflow-hidden"
            data-aos="fade-right"
          >
            <div className="w-full">
              <img
                src={featuredItem.image}
                alt={featuredItem.name}
                className="w-full h-auto rounded-3xl object-cover"
              />
              <div className="text-sm border border-white/20 rounded-full px-2 py-1 shadow-inner w-fit ml-4 mt-4 bg-black/70">
                {featuredItem.weight}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{featuredItem.name}</h2>
              {featuredItem.ingredients && (
                <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-400">
                  {featuredItem.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="border border-white/20 px-4 py-1 rounded-2xl shadow-inner"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {featuredItem.description}
              </p>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0 items-start sm:items-center">
                <div className="flex items-center gap-4">
                  <button
                    className="h-8 w-8 border border-gray-600 text-white hover:bg-gray-800 rounded"
                    onClick={() => updateQuantity(featuredItem.id, -1)}
                  >
                    <Minus className="h-4 w-4 mx-auto" />
                  </button>
                  <span className="text-lg font-medium w-8 text-center">
                    {quantities[featuredItem.id]}
                  </span>
                  <button
                    className="h-8 w-8 border border-gray-600 text-white hover:bg-gray-800 rounded"
                    onClick={() => updateQuantity(featuredItem.id, 1)}
                  >
                    <Plus className="h-4 w-4 mx-auto" />
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">
                    ${featuredItem.price}
                  </span>
                  <button
                    className="bg-[#9a7959] hover:bg-[#8e6f4f] text-white px-4 py-1.5 flex items-center rounded-3xl transition-all duration-200"
                    onClick={() => addToCart(featuredItem.id)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Items */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            data-aos="fade-left"
          >
            {gridItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white/5 rounded-xl overflow-hidden"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-cover rounded-t-xl"
                  />
                  <div className="text-sm border border-white/20 rounded-full px-2 py-1 shadow-inner bg-black w-fit ml-4 -mt-4 relative z-10">
                    {item.weight}
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-2">
                      <button
                        className="h-6 w-6 border border-gray-600 text-white hover:bg-gray-800 rounded"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <Minus className="h-3 w-3 mx-auto" />
                      </button>
                      <span className="text-sm font-medium w-6 text-center">
                        {quantities[item.id]}
                      </span>
                      <button
                        className="h-6 w-6 border border-gray-600 text-white hover:bg-gray-800 rounded"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <Plus className="h-3 w-3 mx-auto" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-bold">
                        ${item.price}
                      </span>
                      <button
                        className="bg-[#9a7959] hover:bg-[#8e6f4f] text-white text-xs px-3 py-1.5 flex items-center rounded-3xl transition-all duration-200"
                        onClick={() => addToCart(item.id)}
                      >
                        <ShoppingCart className="h-3 w-3 mr-1" />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
