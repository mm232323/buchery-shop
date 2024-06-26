import background from "/mainPP.png";
import titleP from "/mainTitle.png";
import styles from "./Start.module.css";
import { Link } from "react-router-dom";
import Logo from "/logo.png";
import { lazy, useState } from "react";
const  Loading =  lazy(() => import("../loadingPage/Loading"))
export default function StartingPage() {
  const [pathLoading,setPathLoading] = useState(false)
  function handleLinkText() {
    setPathLoading(true)
  }
  if (pathLoading) return <Loading top={18} />
  return (
    <div className={styles.startPage}>
      <img src={background} className={styles.back} alt="background" />
      <div className={styles.container} style={{ fontFamily: "Tajawal" }}>
        <img src={titleP} className={styles.title} alt="title photo" />
        <Link to="/main">
          <button onClick={handleLinkText} className={styles.but}>اضغط للبدء</button>
        </Link>
        <img src={Logo} className={styles.logo} alt="logo" />
      </div>
    </div>
  );
}
