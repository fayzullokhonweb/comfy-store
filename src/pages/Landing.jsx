import React from "react";
import LandingList from "../components/LandingList";

function Landing() {
  return (
    <div className="bg-white font-[sans-serif] my-4">
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
