import React from "react";
import { Link } from "react-router-dom";
import { FormEmail, FormPassword } from "../components";

function Register() {
  return (
    <div className="font-[sans-serif] bg-white text-[#333] md:h-screen flex items-center justify-center py-4 rounded-lg">
      <div className="grid md:grid-cols-2 items-center gap-8 h-full p-10 max-w-7xl shadow-[0_2px_16px_-5px_rgba(6,81,237,0.3)]">
        <div className="max-md:order-1  h-full">
          <img
            src="https://readymadeui.com/signin-image.webp"
            className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>
        <div className="flex items-center p-6 h-full w-full">
          <form className="max-w-lg w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">
                Create an account
              </h3>
            </div>
            <div>
              <label className="text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter name"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path
                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-10">
              <label className="text-xs block mb-2">Email</label>
              <FormEmail name="email" placeholder="Enter Email" type="text" />
            </div>
            <div className="mt-10">
              <label className="text-xs block -mb-6">Password</label>
              <FormPassword
                name="password"
                type="password"
                placeholder="Enter Pasword"
              />
            </div>
            <div className="mt-12">
              <button
                type="button"
                className="w-full py-2.5 px-8 text-sm font-semibold rounded bg-blue-500 hover:bg-blue-600 text-white border focus:outline-none"
              >
                Creat an account
              </button>
              <p className="text-sm mt-8 text-center">
                Already have an account?
                <Link
                  to="/Login"
                  className="text-blue-500 font-semibold hover:underline ml-1"
                >
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
