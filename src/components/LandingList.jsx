import React from "react";
import { Link } from "react-router-dom";

function LandingList({ title, description, src }) {
  return (
    <div className="bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
      <img src={src} alt="Blog Post 1" className="w-full h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#333]">{title}</h3>
        <hr className="my-6" />
        <p className="text-gray-400 text-sm">{description}</p>
        <Link className="">Read More</Link>
      </div>
    </div>
  );
}

export default LandingList;
