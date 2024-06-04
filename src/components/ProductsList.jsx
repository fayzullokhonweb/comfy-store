import { useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";
import { Link } from "react-router-dom";

function ProductsList() {
  const { products } = useLoaderData();

  return (
    <ul className="w-full flex flex-col gap-4">
      {products.map((product) => {
        const { image, title, company, price, id } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <li
            key={id}
            className="flex  justify-between w-full p-8 shadow-md hover:shadow-2xl rounded-md"
          >
            <div className="flex gap-10">
              <img src={image} className="w-36 rounded-md h-36" alt="" />
              <div className="mt-2">
                <h3 className="font-semibold capitalize text-xl">{title}</h3>
                <h3 className=" capitalize text-md">{company}</h3>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="font-semibold mb-10">{dollarAmount}</h2>
              <Link to={`/product/${product.id}`}>
                <button
                  type="button"
                  className="btn-block mt-5 px-6  py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-sky-700 hover:bg-sky-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    fill="#fff"
                    className="mr-2 inline"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M1 1a1 1 0 1 0 0 2h1.78a.694.694 35.784 0 1 .657.474l3.297 9.893c.147.44.165.912.053 1.362l-.271 1.087C6.117 17.41 7.358 19 9 19h12a1 1 0 1 0 0-2H9c-.39 0-.64-.32-.545-.697l.205-.818A.64.64 142.028 0 1 9.28 15H20a1 1 0 0 0 .95-.684l2.665-8A1 1 0 0 0 22.666 5H6.555a.694.694 35.783 0 1-.658-.474l-.948-2.842A1 1 0 0 0 4 1zm7 19a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                      data-original="#000000"
                      paintOrder="fill markers stroke"
                    />
                  </svg>
                  Buy
                </button>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductsList;
