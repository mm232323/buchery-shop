import { Outlet } from "react-router";
import Footer from "./components/layout/footer/Footer";
export default function MainLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
