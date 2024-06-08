import styles from "./Footer.module.css";
import logo from "/whiteLogo.svg";
import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div
      className={styles.footer__container}
      style={{ fontFamily: "Tajawal"}}
    >
      <Link to="/">
        <img className={styles.footer__logo} src={logo} alt="logo" />
      </Link>
      <div className={styles.footer__links}>
        <Link to="/main/locations">
          <h3>الفروع</h3>
        </Link>
        <Link to="/main/barbecue">
          <h3>الشوي والتسوية</h3>
        </Link>
        <Link to="/main/slaughterhouse">
          <h3>الذبح والجزارة</h3>
        </Link>
        <Link to="/main/shop">
          <h3>السوق</h3>
        </Link>
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
}
