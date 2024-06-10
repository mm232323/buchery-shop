import styles from "./Viewer.module.css";
import Button from "../../UI/button/Button";
import { mainData } from "../../../util/interfaces";
import { AnimatePresence, motion } from "framer-motion";
const Viewer: React.FC<{ mainData: mainData; display: boolean }> = (props) => {
  return (
    <AnimatePresence>
      {props.display && (
        <motion.div
          className={styles.viewer}
          key={props.mainData.key}
          style={{ fontFamily: "Tajawal" }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={styles.viewer__shadow} />
          <img src={props.mainData.img} className={styles.viewer__background} />
          <h1 className={styles.viewer__title}>{props.mainData.title}</h1>
          <p className={styles.viewer__desc}>{props.mainData.desc}</p>
          <Button Y={0} X={0} linkTo={props.mainData.url}>
            {props.mainData.urlText}
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Viewer;
