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
        },
        {
          path: "/products",
          element: <Products />,
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
          path: "/products/:id",
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
