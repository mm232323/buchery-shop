import LoadingImg from "/loading.gif";
import styles from "./Loading.module.css";
export default function Loading() {
  return (
    <div className={styles.loadingP__container}>
      <center>
        <img className={styles.LoadingGif} src={LoadingImg} alt="loading img" />
      </center>
    </div>
  );
}
