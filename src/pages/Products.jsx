import React from "react";
import ProductList from "../components/ProductList";
import { customFetch } from "../utils";

// loader
export const loader = async () => {
  const req = await customFetch.get("/");
  const products = req.data.data;
  return { products };
};

function Products() {
  return (
    <div className="font-[sans-serif]">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Featured Products
        </h2>
        <ProductList />
      </div>
    </div>
  );
}

export default Products;
