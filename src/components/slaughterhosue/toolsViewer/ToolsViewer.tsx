import styles from "./ToolsViewer.module.css";

const ToolsViewer: React.FC<{
  toolTitle: string;
  children: string;
  toolImg: string;
  bgColor: string;
  shadowColor: string;
  direction:string
}> = (props) => {
  return (
    <div
      className={`${styles.tool__container} ${props.direction  == 'ltr' ? styles.ltr : styles.rtl}`}
      style={{ backgroundColor: props.bgColor }}
    >
      <img src={props.toolImg} alt={`${props.toolTitle} image`} />
      <h1>{props.toolTitle}</h1>
      <p>{props.children}</p>
      <div
        className={styles.backShadow}
        style={{
          backgroundImage:
            "linear-gradient(to left," + props.shadowColor + ",transparent)",
        }}
      ></div>
    </div>
  );
};
export default ToolsViewer;
