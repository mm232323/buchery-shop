import styles from "./LocViewer.module.css";
const LocViewer: React.FC<{
  name: string;
  phone: string;
  WK: string;
  address: string;
  imgUrl: string;
}> = (props) => {
  return <div className={styles.location__container} dir="rtl">
    <h1>الأسم:{props.name}</h1>
    <h1>رقم الهاتف:{props.phone}</h1>
    <h1>ساعات العمل:{props.WK}</h1>
    <h1>العنوان:{props.address}</h1>
    <img src={props.imgUrl} alt="location image" />
  </div>
};
export default LocViewer;
