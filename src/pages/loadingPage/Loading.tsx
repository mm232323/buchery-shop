import LoadingImg from "/loading.gif";
import styles from "./Loading.module.css";
import {motion} from 'framer-motion'
const Loading:React.FC<{top?:number}> = ({top}) => {
  return (
    <div className={styles.loadingP__container}>
      <center>
        <motion.img animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0}} style={{top:(top!) + 'rem'}} className={styles.LoadingGif} src={LoadingImg} alt="loading img" />
      </center>
    </div>
  );
}
export default Loading