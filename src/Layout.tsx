import { Outlet } from "react-router";
import { lazy } from "react";
const ScrollToTop = lazy(() => import("./scrollToTop"));
const Footer = lazy(() => import("./components/layout/footer/Footer"));
export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}
