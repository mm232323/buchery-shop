import styles from "./Service.module.css";
import { Link } from "react-router-dom";
const Service: React.FC<{ linkTo: string; img: string; text: string }> = (
  props
) => {
  return (
    <Link to={props.linkTo} className={styles.service__container} style={{fontFamily:"Tajawal"}}>
      <img src={props.img} alt={props.text} />
      <h2>{props.text}</h2>
    </Link>
  );
};
export default Service;
