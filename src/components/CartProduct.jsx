import React from "react";

function CartProduct({ src, title, price }) {
  return (
    <div className="grid sm:grid-cols-3 items-center gap-4">
      <div className="sm:col-span-2 flex items-center gap-4">
        <div className="w-24 h-24 shrink-0 bg-white p-1 rounded-md">
          <img src={src} className="w-full h-full object-contain" />
        </div>

        <div>
          <h3 className="text-base font-bold text-gray-800">{title}</h3>
          <button className="text-xs text-red-500 cursor-pointer mt-0.5">
            Remove
          </button>

          <div className="flex gap-4 mt-4">
            <div className="relative group">
              <button
                type="button"
                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                XL
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-gray-500 inline ml-2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clipRule="evenodd"
                    data-original="#000000"
                  />
                </svg>
              </button>

              <ul className="group-hover:block hidden absolute rounded-md min-w-[80px] shadow-lg bg-white z-[1000]">
                <li className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer">
                  SM
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer">
                  MD
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer">
                  XL
                </li>
                <li className="py-2 px-4 hover:bg-gray-100 text-gray-800 text-xs cursor-pointer">
                  XXL
                </li>
              </ul>
            </div>

            <div>
              <button
                type="button"
                className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 124 124"
                >
                  <path
                    d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                    data-original="#000000"
                  ></path>
                </svg>

                <span className="mx-2.5">1</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 fill-current"
                  viewBox="0 0 42 42"
                >
                  <path
                    d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <h4 className="text-lg font-bold text-gray-800">{price}</h4>
      </div>
    </div>
  );
}

export default CartProduct;
