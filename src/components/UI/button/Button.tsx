import { Link } from "react-router-dom";
import styles from "./Button.module.css";
const Button: React.FC<{ linkTo: string; children: string,Y:number,X:number }> = (props) => {
  return (
    <Link to={props.linkTo} style={{top:-(props.Y) + 'rem' ,left:props.X + 'rem'}}>
      <button className={styles.linkBut} style={{ fontFamily: "Tajawal",top:-(props.Y) + 'rem' ,left:props.X + 'rem'}}>
        {props.children}
      </button>
    </Link>
  );
};
export default Button;
