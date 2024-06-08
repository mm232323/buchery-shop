import React from "react";
import styles from "./PageIder.module.css";
const PageIder: React.FC<{ children:string,img: string,color:string }> = (props) => {
  return (
    <div className={styles.ider__container}>
      <img src={props.img} alt={props.children} />
      <h1 style={{color:props.color == 'dark' ? "#260606" : 'white'}}>{props.children}</h1>
    </div>
  );
};
export default PageIder;
