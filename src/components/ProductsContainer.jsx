import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

function ProductsContainer() {
  const { meta } = useLoaderData();
  console.log(meta);
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const setActiveStyle = (pattern) => {
    return `text-xl btn-circle btn btn-primary btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-base-content"
    } `;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5 mb-10">
        <h4 className="font-medium">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyle("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={setActiveStyle("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="mt-16 text-2xl">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
}

export default ProductsContainer;
