import React from "react";
import { Link } from "react-router-dom";
import servicebanner from "../assets/servicebanner.webp";
import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.webp";
import product4 from "../assets/product4.webp";

const products = [
  {
    id: 1,
    name: "IO Coffee Table",
    price: "$695–$850",
    image: product1,
    description: "Solid in construction, simple in form",
    colorsAvailable: "3 colors available",
    labels: ["SALE", "NEW"],
  },
  {
    id: 2,
    name: "Ramila Arm Chair",
    price: "$350",
    image: product2,
    description: "Solid in construction, simple in form",
    colorsAvailable: "2 colors available",
  },
  {
    id: 3,
    name: "Glass Coffee Table",
    price: "$1,050–$1,250",
    image: product3,
    description: "Solid in construction, simple in form",
    colorsAvailable: "2 sizes available",
  },
  {
    id: 4,
    name: "Miruna Floor Lamp",
    price: "$895",
    image: product4,
    description: "Solid in construction, simple in form",
    colorsAvailable: "4 colors available",
  },
];

function Products() {
  return (
    <div className="overflow-hidden">
      {/* Banner Section */}
      <div className="w-full h-[300px] md:h-[400px] relative">
        <img
          src={servicebanner}
          alt="service Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,9,9,0.5)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -left-5 md:-left-10 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#fa6030] rounded-full"></div>
            <h1 className="text-white text-2xl md:text-5xl font-semi-bold px-4 md:px-56 flex justify-center items-center text-center">
              We make home designing easy, whether an entire home or an updated
              area.
            </h1>
            <div className="absolute -right-5 md:-right-10 top-1/2 transform -translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-[#fa6030] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-6">Best Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 hover:shadow-lg transition-shadow duration-300 bg-[#f6f6f4]"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover mb-4"
                  />
                  {/* Labels like SALE, NEW */}
                  <div className="absolute top-2 left-2 flex space-x-2">
                    {product.labels?.map((label, index) => (
                      <span
                        key={index}
                        className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full uppercase"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {product.colorsAvailable}
                </p>
                <p className="text-xl font-semibold">{product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
