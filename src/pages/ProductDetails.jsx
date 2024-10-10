import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { productId } = useParams();

  // States to toggle visibility for each section
  const [showDetails, setShowDetails] = useState(false);
  const [showDimensions, setShowDimensions] = useState(false);
  const [showPackage, setShowPackage] = useState(false);
  const [showShipping, setShowShipping] = useState(false);

  // Check if products array exists
  if (!products) {
    return <h2>No products available!</h2>;
  }

  const product = products.find((p) => p.id === parseInt(productId));

  // If product is not found
  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-[550px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-700 mb-4">{product.price}</p>
          <p className="text-md text-gray-600 mb-4">{product.description}</p>
          <p className="text-sm text-gray-500 mb-4">
            {product.colorsAvailable}
          </p>
          <p>Size: {product.size || "N/A"}</p>

          {/* Product Details */}
          <div className="border-b py-2 md:py-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowDetails(!showDetails)}
            >
              <p>Product Details</p>
              <span>{showDetails ? "-" : "+"}</span>
            </div>
            {showDetails && (
              <div className="mt-2">
                <p>Upholstered in chenille-effect fabric.</p>
                <p>Solid ash wood legs in a natural finish.</p>
              </div>
            )}
          </div>

          {/* Dimensions & Specifications */}
          <div className="border-b py-2  md:py-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowDimensions(!showDimensions)}
            >
              <p>Dimensions & Specifications</p>
              <span>{showDimensions ? "-" : "+"}</span>
            </div>
            {showDimensions && (
              <div className="mt-2">
                <p>Dimensions: W 56 cm x H 75 cm x D 55 cm</p>
                <p>Weight: 8 kg</p>
              </div>
            )}
          </div>

          {/* Package */}
          <div className="border-b py-2  md:py-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowPackage(!showPackage)}
            >
              <p>Package</p>
              <span>{showPackage ? "-" : "+"}</span>
            </div>
            {showPackage && (
              <div className="mt-2">
                <p>
                  Comes in a flat package with all necessary tools included.
                </p>
              </div>
            )}
          </div>

          {/* Shipping & Returns */}
          <div className="border-b py-2  md:py-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShowShipping(!showShipping)}
            >
              <p>Shipping & Returns</p>
              <span>{showShipping ? "-" : "+"}</span>
            </div>
            {showShipping && (
              <div className="mt-2">
                <p>Ships in 4-5 weeks. Free returns within 30 days.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
