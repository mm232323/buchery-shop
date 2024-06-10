import styles from "./Footer.module.css";
import logo from "/whiteLogo.svg";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import {memo} from 'react'
const Footer = memo(() => {
  return (
    <div className={styles.footer__container} style={{ fontFamily: "Tajawal" }}>
      <NavLink to="/">
        <img className={styles.footer__logo} src={logo} alt="logo" />
      </NavLink>
      <div className={styles.footer__links}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? styles.active__footer__link
              : styles.unactive__footer__link
          }
          to="/main/locations"
        >
          <h3>الفروع</h3>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? styles.active__footer__link
              : styles.unactive__footer__link
          }
          to="/main/barbecue"
        >
          <h3>الشوي والتسوية</h3>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? styles.active__footer__link
              : styles.unactive__footer__link
          }
          to="/main/slaughterhouse"
        >
          <h3>الذبح والجزارة</h3>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? styles.active__footer__link
              : styles.unactive__footer__link
          }
          to="/main/shop"
        >
          <h3>السوق</h3>
        </NavLink>
      </div>
      <div className={styles.footer__socials}>
        <CiFacebook
          className={styles.logos}
          color="white"
          size="36"
          opacity="70%"
        />
        <CiTwitter
          className={styles.logos}
          color="white"
          size="36"
          opacity="70%"
        />
        <CiInstagram
          className={styles.logos}
          color="white"
          size="36"
          opacity="70%"
        />
      </div>
    </div>
  );
})
export default Footer
