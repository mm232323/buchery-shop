import Header from "../components/layout/header/Header";
import Sheep404 from "/sheep404.gif";
import styles from "./notfound.module.css";
export default function NotFound() {
  return (
    <>
      <Header theme="dark" />
      <center>
        <div className={styles.notfound__container}>
          <img
            className={styles.notfound__image}
            src={Sheep404}
            alt="sheep animation"
          />
          <h1 className={styles.notfound__title}>404</h1>
          <p>يبدو أنك كتبت عنوان صفحة خاطئ</p>
        </div>
      </center>
    </>
  );
}
