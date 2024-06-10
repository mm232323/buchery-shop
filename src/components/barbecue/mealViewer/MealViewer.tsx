import styles from "./MealViewer.module.css";
const MealViewer: React.FC<{
  name: string;
  price: string;
  imgUrl: string;
  id: number;
  direction: string;
}> = (props) => {
  return (
    <div
      className={
        styles.meal__container +
        " " +
        (props.direction == "right_side" ? styles.right_side : styles.left_side)
      }
      key={props.id}
    >
      <img src={props.imgUrl} alt="Meal Img" />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <div className={styles.shadow__background} />
    </div>
  );
};
export default MealViewer;
