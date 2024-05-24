import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct";

function Cart() {
  return (
    <div className="font-sans max-w-4xl mx-auto bg-white py-4">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
          <hr className="border-gray-300 my-4" />

          <div className="space-y-4">
            <CartProduct
              src="https://readymadeui.com/images/product14.webp"
              title="Velvet Sneaker"
              price="$20.00"
            />
            <CartProduct
              src="https://readymadeui.com/images/product14.webp"
              title="Velvet Sneaker"
              price="$20.00"
            />
            <CartProduct
              src="https://readymadeui.com/images/product14.webp"
              title="Velvet Sneaker"
              price="$20.00"
            />
            <CartProduct
              src="https://readymadeui.com/images/product14.webp"
              title="Velvet Sneaker"
              price="$20.00"
            />
          </div>
        </div>

        <div className="bg-gray-100 h-[360px] rounded-md p-4 md:sticky top-0">
          <h2 className="text-3xl text-center mt-2 font-medium font-serif ">
            You orders
          </h2>

          <ul className="text-gray-800 mt-5 space-y-4">
            <li className="flex flex-wrap gap-4 text-sm">
              Discount <span className="ml-auto font-bold">$0.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Shipping <span className="ml-auto font-bold">$2.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Tax <span className="ml-auto font-bold">$4.00</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              Total <span className="ml-auto">$52.00</span>
            </li>
          </ul>

          <div className="mt-8 space-y-2">
            <button
              type="button"
              className="text-sm mb-3 px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Checkout
            </button>
            <Link to="/products" className="ease-in duration-500">
              <button
                type="button"
                className=" btn-ghost text-sm   hover:bg-blue-600 hover:text-white px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
              >
                Continue Shopping{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
