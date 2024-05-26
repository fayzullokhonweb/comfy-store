import React from "react";
import { ProductList } from "../components";

function Products() {
  return (
    <div className="font-[sans-serif]">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Premium Sneakers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          <ProductList
            title=" Sole Elegance"
            price="$12.00"
            description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src="https://readymadeui.com/images/product9.webp"
          />
          <ProductList
            title=" Sole Elegance"
            price="$12.00"
            description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src="https://readymadeui.com/images/product9.webp"
          />
          <ProductList
            title=" Sole Elegance"
            price="$12.00"
            description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src="https://readymadeui.com/images/product9.webp"
          />
          <ProductList
            title=" Sole Elegance"
            price="$12.00"
            description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src="https://readymadeui.com/images/product9.webp"
          />
          <ProductList
            title=" Sole Elegance"
            price="$12.00"
            description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src="https://readymadeui.com/images/product9.webp"
          />
          <ProductList
            title=" Sole Elegance"
            price="$12.00"
            description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src="https://readymadeui.com/images/product9.webp"
          />
          <ProductList
            title=" Sole Elegance"
            price="$12.00"
            description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src="https://readymadeui.com/images/product9.webp"
          />
          <ProductList
            title=" Sole Elegance"
            price="$12.00"
            description="  Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            src="https://readymadeui.com/images/product9.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default Products;
