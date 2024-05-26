import React from "react";
import { LandingList } from "../components";
import { Link } from "react-router-dom";

const images = [
  {
    url: "./hero1.webp",
  },
  {
    url: "./hero2.webp",
  },
  {
    url: "./hero3.webp",
  },
  {
    url: "./hero4.webp",
  },
];

function Landing() {
  return (
    <div className="bg-white font-[sans-serif] my-4 ">
      <div className="grid md:grid-cols-2 items-center  mb-32  md:gap-10 gap-8 font-[sans-serif] text-[#333] max-w-5xl max-md:max-w-md mx-auto">
        <div className="max-md:order-1 max-md:text-center ">
          <h3 className="md:text-6xl   text-2xl md:leading-20">
            We are changing the way people shop
          </h3>
          <p className="mt-4 text-sm">
            Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
            officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
            tempor ut reprehenderit.
          </p>
          <Link to="/products">
            <button
              type="button"
              className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-[#333] hover:bg-[#333] hover:text-white transition-all duration-300"
            >
              Our Products
            </button>
          </Link>
        </div>
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          {images.map((image) => {
            return (
              <div key={image.url} className="carousel-item">
                <img
                  src={image.url}
                  alt=""
                  className="h-96 rounded-xl w-80 object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
            LATEST BLOGS
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
          <LandingList
            title="A Guide to Igniting Your Imagination"
            description="Lorem "
            src="https://readymadeui.com/Imagination.webp"
          />
          <LandingList
            title="A Guide to Igniting Your Imagination"
            description="Lorem "
            src="https://readymadeui.com/Imagination.webp"
          />
          <LandingList
            title="A Guide to Igniting Your Imagination"
            description="Lorem "
            src="https://readymadeui.com/Imagination.webp"
          />
          <LandingList
            title="A Guide to Igniting Your Imagination"
            description="Lorem "
            src="https://readymadeui.com/Imagination.webp"
          />
          <LandingList
            title="A Guide to Igniting Your Imagination"
            description="Lorem "
            src="https://readymadeui.com/Imagination.webp"
          />
          <LandingList
            title="A Guide to Igniting Your Imagination"
            description="Lorem "
            src="https://readymadeui.com/Imagination.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
