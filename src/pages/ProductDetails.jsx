import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ products }) => {
  const { productId } = useParams();

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
          <p className=""> size</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
