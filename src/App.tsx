import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StartingPage from "./pages/start/Start";

import Main from "./pages/main/Main";
import Shop from "./pages/shop/Shop";
import SlaughterHouse from "./pages/slaughterhouse/SlaughterHouse";
import Barbecue from "./pages/barbecue/Barbecue";
import Contact from "./pages/contact/Contact";
import Locations from "./pages/locations/Locations";
import Cart from "./pages/shop/cart/Cart";
import MainLayout from "./Layout";
import ShopLayout from './pages/shop/shopLayout'
import {loader as mainLoader} from './pages/main/Main'
import NotFound from "./notfound/notfound";
const router = createBrowserRouter([
  { path: "/", element: <StartingPage />,errorElement:<NotFound /> },
  {
    path: "/main",
    element: <MainLayout />,
    children: [
      {path:'/main',element:<Main />,loader:mainLoader},
      {
        path: "/main/shop",
        element: <ShopLayout />,
        children: [{ path: "/main/shop", element: <Shop /> },{ path: "/main/shop/cart", element: <Cart /> }],
      },
      { path: "/main/slaughterhouse", element: <SlaughterHouse /> },
      { path: "/main/barbecue", element: <Barbecue /> },
      { path: "/main/contact", element: <Contact /> },
      { path: "/main/locations", element: <Locations /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
