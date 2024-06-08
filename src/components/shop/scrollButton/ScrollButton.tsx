import styles from "./ScrollButton.module.css";
const ScrollButton: React.FC<{ children: string; color: string;scrollPos:number }> = (props) => {
  function scrollHandler(scrollVal:number) {
    window.scrollTo({
      top:scrollVal,
      behavior:'smooth'
    })
  }
  return (
    <button
      className={styles.scroll_button__container}
      style={{ backgroundColor: props.color}}
      onClick={() => scrollHandler(props.scrollPos)}
    >
      {props.children}
    </button>
  );
};
export default ScrollButton;
