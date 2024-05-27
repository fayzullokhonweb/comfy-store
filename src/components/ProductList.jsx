import React from "react";
import { GrFormNextLink } from "react-icons/gr";
import { Link } from "react-router-dom";

function ProductList({ title, price, description, src }) {
  return (
    <div className="bg-white rounded-2xl group p-5 cursor-pointer hover:-translate-y-2 transition-all relative shadow-md hover:shadow-2xl">
      <Link className="hidden group-hover:block">
        <div className="bg-gray-100 w-10 h-10  flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
          <GrFormNextLink className="w-7 h-7" />
        </div>
      </Link>
      <div className="w-11/12 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
        <img
          src={src}
          alt="Product 2"
          className="h-full w-full object-contain"
        />
      </div>
      <div>
        <h3 className="text-lg font-extrabold text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <h4 className="text-lg text-gray-800 font-bold mt-4">{price}</h4>
        <div>
          <button
            type="button"
            className=" btn-block mt-5 px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-sky-700 hover:bg-sky-900 "
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
                paint-order="fill markers stroke"
              />
            </svg>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
