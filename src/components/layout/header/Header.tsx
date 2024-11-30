import whiteLogo from "/whiteLogo.svg";
import darkLogo from "/logo.svg";
import styles from "./Header.module.css";
import cartLogo from "/cartL.svg";
import saveLogo from "/saveL.svg";
import { NavLink } from "react-router-dom";
import { memo, Suspense, lazy } from "react";
const Loading = lazy(() => import("../../../pages/loadingPage/Loading"));
const Header: React.FC<{ theme: string }> = memo(({ theme }) => {
  return (
    <Suspense fallback={<Loading />}>
      <header
        className={theme == "dark" ? styles.dark : styles.light}
        style={{ fontFamily: "Tajawal" }}
      >
        {theme == "light" && (
          <NavLink to="/">
            <img src={whiteLogo} alt="logo" className={styles.logo} />
          </NavLink>
        )}
        {theme == "dark" && (
          <NavLink to="/">
            <img src={darkLogo} alt="logo" className={styles.logo} />
          </NavLink>
        )}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? theme == "dark"
                ? styles.darkActive
                : styles.lightActive
              : ""
          }
          to="/main"
          end
        >
          <h1>الصفحة الرئيسية</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? theme == "dark"
                ? styles.darkActive
                : styles.lightActive
              : ""
          }
          to="/main/shop"
          end
        >
          <h1>السوق</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? theme == "dark"
                ? styles.darkActive
                : styles.lightActive
              : ""
          }
          to="/main/slaughterhouse"
          end
        >
          <h1>الذبح و الجزارة</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? theme == "dark"
                ? styles.darkActive
                : styles.lightActive
              : ""
          }
          to="/main/barbecue"
          end
        >
          <h1>الشوي و التسوية</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? theme == "dark"
                ? styles.darkActive
                : styles.lightActive
              : ""
          }
          to="/main/contact"
          end
        >
          <h1>التواصل</h1>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? theme == "dark"
                ? styles.darkActive
                : styles.lightActive
              : ""
          }
          to="/main/locations"
          end
        >
          <h1>الفروع</h1>
        </NavLink>
        {theme == "dark" && (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.header__activeCart : styles.header__normalCart
              }
              to="/main/shop/cart"
            >
              <img src={cartLogo} alt="cart logo" className={styles.cart} />
            </NavLink>
            <img src={saveLogo} alt="save logo" className={styles.save} />
          </>
        )}
        {theme == "dark" && <div className={styles.seperator}></div>}
      </header>
    </Suspense>
  );
});
export default Header;
