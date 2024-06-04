import { Form, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { formatPrice } from "../utils";
import FilterSelect from "./FilterSelect";

function Filters() {
  const { meta } = useLoaderData();

  const [price, setPrice] = useState(500000);
  const maxPrice = 1000000;

  const handlePriceChange = (e) => {
    setPrice(e.target.value * (maxPrice / 100));
  };

  return (
    <Form className="bg-base-200 rounded-md p-9 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-x-3">
      <div>
        <label className="form-control w-full max-w-xs mb-7">
          <div className="label">
            <span className="label-text text-base">Search Product</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs h-10"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Select Price</span>
            <span className="label-text-alt text-bold text-lg">
              {formatPrice(price)}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max="100"
            value={price / (maxPrice / 100)}
            className="range range-primary range-sm"
            onChange={handlePriceChange}
          />
          <div className="label text-2xl font-bold">
            <span className="label-text-alt">0</span>
            <span className="label-text-alt">Max: {formatPrice(maxPrice)}</span>
          </div>
        </label>
      </div>
      <div>
        <FilterSelect
          name="company"
          label="Select Category"
          list={meta.categories}
          size="select-sm"
        />
        <div className="form-control mt-12">
          <label className="label flex flex-col cursor-pointer">
            <span className="label-text">Free Shipping</span>
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
      </div>
      <div>
        <FilterSelect
          name="company"
          label="Select Company"
          list={meta.companies}
          size="select-sm"
        />
        <div className="h-1 mt-16">
          <button className="btn btn-sm btn-primary btn-block text-md uppercase">
            Search{" "}
          </button>
        </div>
      </div>
      <div>
        <FilterSelect
          name="sort"
          label="Sort By"
          list={["a-z", "z-a", "high", "low"]}
          size="select-sm"
        />
        <div className="h-1 mt-16">
          <button className="btn btn-sm btn-secondary btn-block text-md uppercase">
            Reset
          </button>
        </div>
      </div>
    </Form>
  );
}

export default Filters;
