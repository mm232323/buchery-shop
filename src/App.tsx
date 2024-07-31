import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { loader as mainLoader } from "./pages/main/Main";

import { lazy, Suspense } from "react";

const StartingPage = lazy(() => import("./pages/start/Start"));

const Main = lazy(() => import("./pages/main/Main"));

const MainLayout = lazy(() => import("./Layout"));

const Shop = lazy(() => import("./pages/shop/Shop"));

const Cart = lazy(() => import("./pages/shop/cart/Cart"));

const ShopLayout = lazy(() => import("./pages/shop/shopLayout"));

const SlaughterHouse = lazy(
  () => import("./pages/slaughterhouse/SlaughterHouse")
);

const Locations = lazy(() => import("./pages/locations/Locations"));

const Contact = lazy(() => import("./pages/contact/Contact"));

const Barbecue = lazy(() => import("./pages/barbecue/Barbecue"));

const NotFound = lazy(() => import("./notfound/notfound"));

const Loading = lazy(() => import("./pages/loadingPage/Loading"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <StartingPage />
      </Suspense>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/main",
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/main",
        element: (
          <Suspense fallback={<Loading />}>
            <Main />
          </Suspense>
        ),
        // loader: mainLoader,
      },

      {
        path: "/main/shop",
        element: (
          <Suspense fallback={<Loading />}>
            <ShopLayout />
          </Suspense>
        ),
        children: [
          {
            path: "/main/shop",
            element: (
              <Suspense fallback={<Loading />}>
                <Shop />
              </Suspense>
            ),
          },

          {
            path: "/main/shop/cart",
            element: (
              <Suspense fallback={<Loading />}>
                <Cart />
              </Suspense>
            ),
          },
        ],
      },

      {
        path: "/main/slaughterhouse",
        element: (
          <Suspense fallback={<Loading />}>
            <SlaughterHouse />
          </Suspense>
        ),
      },

      {
        path: "/main/barbecue",
        element: (
          <Suspense fallback={<Loading />}>
            <Barbecue />
          </Suspense>
        ),
      },

      {
        path: "/main/contact",
        element: (
          <Suspense fallback={<Loading />}>
            <Contact />
          </Suspense>
        ),
      },

      {
        path: "/main/locations",
        element: (
          <Suspense fallback={<Loading />}>
            <Locations />
          </Suspense>
        ),
      },
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
