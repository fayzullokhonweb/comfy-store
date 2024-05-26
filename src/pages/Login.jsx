import React from "react";
import { Link } from "react-router-dom";
import { FormEmail, FormPassword } from "../components";

function Login() {
  return (
    <div className="font-[sans-serif] text-[#333] bg-white flex items-center justify-center md:h-screen p-4">
      <div className="shadow-[0_2px_16px_-5px_rgba(6,81,237,0.3)] max-w-6xl rounded-md p-6">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="max-md:order-1">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:w-11/12 w-full object-cover"
              alt="login-image"
            />
          </div>
          <form className="max-w-md w-full mx-auto">
            <div className="mb-12">
              <h3 className="text-4xl font-extrabold text-blue-600">Sign in</h3>
            </div>

            <FormEmail name="email" type="text" placeholder="Enter Email" />
            <FormPassword
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <div className="mt-10">
              <button
                type="button"
                className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Sign in
              </button>
              <p className="text-sm text-center mt-8">
                Don't have an account{" "}
                <Link
                  to="/Register"
                  className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
