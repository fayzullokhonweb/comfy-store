import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

function LandingList() {
  const { products } = useLoaderData();

  return (
    <ul className="flex gap-2">
      {products.map((product) => {
        const { image, title, description, price, id } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <li
            key={id}
            className="bg-white  cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300"
          >
            <img
              src={image}
              alt="Blog Post 1"
              className=" w-full h-60 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between ">
                <h3 className=" capitalize text-xl font-bold text-[#333]">
                  {title}
                </h3>
                <h3 className="text-xl font-bold text-[#333]">
                  {dollarAmount}
                </h3>
              </div>
              <hr className="my-6" />
              <p className="   line-clamp-5 mb-6 text-sm">{description}</p>
              <Link to={`/product/${product.id}`} className="group ">
                <button
                  type="button"
                  className="px-5 py-2.5 flex items-center justify-center rounded text-white text-sm tracking-wider font-medium border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                >
                  Read More
                </button>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default LandingList;
