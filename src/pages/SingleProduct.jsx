import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await customFetch.get(`/${id}`);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const { image, title, description, price, company, colors } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  console.log(colors);
  return (
    <div className=" grid lg:grid-cols-2 md:grid-cols-1 lg:gap-10 lg:max-w-7xl sm:max-w-full mx-auto p-4">
      <div className="">
        <img
          src={image}
          className="w-full shadow-2xl object-cover rounded-2xl  lg:h-[70vh] "
          alt={title}
        />
      </div>
      <div className="mt-7">
        <div className="mb-9">
          <h2 className="text-4xl capitalize font-serif  font-medium mb-2">
            {title}
          </h2>
          <h3 className="text-2xl mb-2 capitalize font-serif text-gray-500 ">
            {company}
          </h3>
          <h3 className="text-2xl font-serif">{dollarAmount}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          {colors.map((color) => {
            return (
              <button
                id={color}
                type="button"
                style={{ backgroundColor: color }}
                className="w-7 h-7 rounded-full"
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
