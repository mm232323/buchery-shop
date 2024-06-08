import styles from "./Offer.module.css";
import offerImg from "/tornPaperWithMeat.png";
import CountDown from "react-countdown";
export default function Offer() {
  const endDate = new Date("2024-6-19");
  return (
    <div className={styles.offer__container} style={{ fontFamily: "Tajawal" }}>
      <img
        className={styles.offer__img}
        src={offerImg}
        alt="torn paper with meat"
      />
      <h1 className={styles.offer__title1}>عرض خاص لذبائح العيد</h1>
      <h1 className={styles.offer__title2}>30% خصم لكل كيلو</h1>
      <h5 className={styles.timer}>
        <CountDown date={endDate} />
      </h5>
    </div>
  );
}
