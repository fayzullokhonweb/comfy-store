import axios, { Axios } from "axios";

const productsURL = "https://strapi-store-server.onrender.com/api/products";

export const customFetch = axios.create({
  baseURL: productsURL,
});

// format price
export const formatPrice = (price) => {
  const dollarAmount = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format((price / 100).toFixed(2));

  return dollarAmount;
};
