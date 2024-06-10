import { SpeedInsights } from "@vercel/speed-insights/next";
import { Outlet } from "react-router";
import Footer from "./components/layout/footer/Footer";
export default function MainLayout() {
  return (
    <>
      <SpeedInsights />
      <Outlet />
      <Footer />
    </>
  );
}
