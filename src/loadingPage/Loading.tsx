import LoadingImg from "/loading.gif";
import styles from "./Loading.module.css";
export default function Loading() {
  return (
    <center>
      <img className={styles.LoadingGif} src={LoadingImg} alt="loading img" />
    </center>
  );
}
