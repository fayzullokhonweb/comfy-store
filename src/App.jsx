import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Landing,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
  About,
  Contact,
} from "./pages";

// loader
import { loader as LandingLoader } from "./pages/Landing";
import { loader as ProductsLoader } from "./pages/Products";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: LandingLoader,
        },
        {
          path: "/products",
          element: <Products />,
          loader: ProductsLoader,
        },
        {
          path: "/Cart",
          element: <Cart />,
        },
        {
          path: "/Checkout",
          element: <Checkout />,
        },
        {
          path: "/product/:id",
          element: <SingleProduct />,
        },
        {
          path: "/Orders",
          element: <Orders />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
