import styles from "./Viewer.module.css";
import Button from "../../UI/button/Button";
import { mainData } from "../../../util/interfaces";
import ImageComponent from "../../UI/ImageComp/ImageComponent";
const Viewer: React.FC<mainData> = (props) => {
  return (
    <div
      className={styles.viewer}
      key={props.key}
      style={{ fontFamily: "Tajawal" }}
    >
      <div className={styles.viewer__shadow} />
      <ImageComponent
        src={props.img}
        className={styles.viewer__background}
      />
      <h1 className={styles.viewer__title}>{props.title}</h1>
      <p className={styles.viewer__desc}>{props.desc}</p>
        <Button Y={0} X={0} linkTo={props.url}>{props.urlText}</Button>
    </div>
  );
};
export default Viewer;
