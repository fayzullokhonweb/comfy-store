import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils";
import { useLoaderData } from "react-router-dom";

function ProductsGrid() {
  const { products } = useLoaderData();
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-xl:gap-4 gap-6">
      {products.map((product) => {
        const { image, title, description, price, id } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <li
            key={id}
            className="bg-white rounded-2xl group p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md hover:shadow-2xl"
          >
            <div className="w-11/12 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img
                src={image}
                alt={title}
                className="h-full w-full  object-cover"
              />
            </div>
            <div className="px-4">
              <h3 className="text-lg capitalize font-extrabold text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-5">{description}</p>
              <h4 className="text-lg text-gray-800 font-bold mt-4">
                {dollarAmount}
              </h4>
              <Link to={`/product/${product.id}`}>
                <button
                  type="button"
                  className="btn-block mt-5 px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-sky-700 hover:bg-sky-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    fill="#fff"
                    className="mr-2 inline"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                      data-original="#000000"
                      paintOrder="fill markers stroke"
                    />
                  </svg>
                  Buy
                </button>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsGrid;
