import styles from "./LoadingSpinner.module.css";
export default function LoadingSpinner() {
  return (
    <div className={styles.spinner__container}>
      <div className={styles.spinner}></div>
      <p>يتم إستدعاء البيانات</p>
    </div>
  );
}
