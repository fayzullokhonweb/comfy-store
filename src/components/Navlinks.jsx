import React from "react";
import { Link } from "react-router-dom";
const links = [
  {
    id: "1",
    text: "Home",
    path: "/",
  },
  {
    id: "2",
    text: "About",
    path: "/about",
  },
  {
    id: "3",
    text: "Products",
    path: "/products",
  },
  {
    id: "4",
    text: "Cart",
    path: "/cart",
  },
  {
    id: "5",
    text: "Contact",
    path: "/contact",
  },
];

function Navlinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li
            key={link.id}
            className="max-lg:border-b  max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300 "
          >
            <Link
              to={link.path}
              className="text-[#333] block text-sm font-light"
            >
              {link.text}
            </Link>
          </li>
        );
      })}
    </>
  );
}

export default Navlinks;
