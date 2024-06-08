import styles from "./Detail.module.css";
import { motion } from "framer-motion";
const Detail: React.FC<{
  title: string;
  desc: string;
  img: string;
  roundedDirections: string[];
}> = (props) => {
  let right = { top: 5, bottom: 5 };
  let left = { top: 5, bottom: 5 };
  if (props.roundedDirections.includes("all")) {
    right = { top: 49, bottom: 49 };
    left = { top: 49, bottom: 49 };
  } else {
    for (const direction of props.roundedDirections) {
      if (direction == "left") {
        left = { top: 49, bottom: 49 };
      } else {
        right = { top: 49, bottom: 49 };
      }
    }
  }
  return (
    <>
      <motion.div
        layout
        className={styles.detail__container}
        exit={{opacity:0}}
        style={{
          fontFamily: "Tajawal",
          borderTopLeftRadius: left.top,
          borderBottomLeftRadius: left.bottom,
          borderTopRightRadius: right.top,
          borderBottomRightRadius: right.bottom,
        }}
      >
        <h2 className={styles.detail__title}>{props.title}</h2>
        <img className={styles.detail__img} src={props.img} alt={props.title} />
        <p className={styles.detail__desc}>{props.desc}</p>
      </motion.div>
    </>
  );
};
export default Detail;
