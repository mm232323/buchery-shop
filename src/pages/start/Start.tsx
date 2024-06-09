import background from "/mainPP.png";
import titleP from "/mainTitle.png";
import styles from "./Start.module.css";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
export default function StartingPage() {
  return (
    <div className={styles.startPage}>
      <img src={background} className={styles.back} alt="background" />
      <div className={styles.container} style={{ fontFamily: "Tajawal" }}>
        <img src={titleP} className={styles.title} alt="title photo" />
        <Link to="/main">
          <button className={styles.but}>اضغط للبدأ</button>
        </Link>
        <img src={Logo} className={styles.logo} alt="logo" />
      </div>
    </div>
  );
}
