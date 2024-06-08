import styles from "./ChefViewer.module.css";

const ChefViewer: React.FC<{
  name: string;
  jobTitle: string;
  imgUrl: string;
}> = (props) => {
  return (
    <div className={styles.chef__container}>
      <img src={props.imgUrl} alt="chef image" />
      <h1 className={styles.chef__name}>{props.name}</h1>
      <h4>{props.jobTitle}</h4>
    </div>
  );
};
export default ChefViewer;
