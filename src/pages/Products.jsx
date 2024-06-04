import Filters from "../components/Filters";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";

// loader
export const loader = async () => {
  const request = await customFetch.get("/");
  const products = request.data.data;
  const meta = request.data.meta;
  return { products, meta };
};

function Products() {
  return (
    <div className="font-[sans-serif]">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <Filters />
        <ProductsContainer />
      </div>
    </div>
  );
}

export default Products;
