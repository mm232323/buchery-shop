import styles from "./Main.module.css";
import Header from "../../components/layout/header/Header";
import background from "/mainPB.svg";
import { useLoaderData } from "react-router";
import Viewer from "../../components/main/viewer/Viewer";
import { useState } from "react";
import Detail from "../../components/main/detail/Detail";
import cowHealth from "/cowHealth.png";
import cowEat from "/cowEat.png";
import freshMeat from "/freshMeat.png";
import Service from "../../components/main/service/Service";
import camelInDesert from "/camelInDesert.png";
import freshRedMeat from "/freshRedMeatButchery.png";
import cookingMeat from "/cookingMeatOverTheFlames.png";
import { mainData } from "../../util/interfaces";
import Offer from "../../components/main/offer/Offer";
import smallGoat from '/smallGoat.png'
import MessageSender from "../../components/main/messageSender/MessageSender";
export default function Main() {
  const data = useLoaderData() as mainData[];
  const [selectedId, setselectedId] = useState(0);
  function handleSelect(id: number) {
    setselectedId(id);
  }
  const view = data.filter((view) => view.id == selectedId)[0];
  return (
    <div style={{fontFamily:"Tajawal"}}>
      <Header theme="light" />
      <img className={styles.background} src={background} alt="background" />
      <Viewer
        key={view.key}
        title={view.title}
        desc={view.desc}
        img={view.img}
        url={view.url}
        urlText={view.urlText}
      />
      <div
        className={`${styles.main__point1} active ${
          selectedId == 0 ? styles.active : ""
        }`}
        onClick={() => handleSelect(0)}
      ></div>
      <div
        className={`${styles.main__point2} ${
          selectedId == 1 ? styles.active : ""
        }`}
        onClick={() => handleSelect(1)}
      ></div>
      <div
        className={`${styles.main__point3} ${
          selectedId == 2 ? styles.active : ""
        }`}
        onClick={() => handleSelect(2)}
      ></div>
      <section className={styles.main__section2}>
        <h1>مهمتنا</h1>
        <div className={styles.details__container}>
          <Detail
            title="لحوم فاخرة"
            desc="نود أن نعلمكم بأننا نقدم لكم الآن أفضل أنواع اللحوم الفاخرة، سواء كانت طازجة أو مجمدة، وذلك بعناية شديدة جداً فيما يتعلق بنظافة أدواتنا وحفظ لحوم الحيوانات"
            img={freshMeat}
            roundedDirections={["left"]}
          />
          <Detail
            title="خبراء التعليف"
            desc="إذا كنت ترغب في ضمان صحة الماشية ورفاهيتها، فلا تنظر إلى أبعد من فريق المتخصصين لدينا. إنهم مكرسون لتوفير أفضل تغذية لحيواناتك."
            img={cowEat}
            roundedDirections={[]}
          />
          <Detail
            title="رعاية خاصة"
            desc="نقدم لكم رعاية خاصة لحيوانات المراعي ونحافظ ايضاً علي صحتها من الامراض لكي تكون ارقي وأجمل انواع اللحوم عندنا"
            img={cowHealth}
            roundedDirections={["right"]}
          />
        </div>
      </section>
      <section className={styles.main__section3}>
        <h1>خدمتنا</h1>
        <div className={styles.services__container}>
          <Service
            linkTo="/main/barbecue"
            img={cookingMeat}
            text="الشوي والتسوية"
          />
          <Service
            linkTo="/main/slaughterhouse"
            img={freshRedMeat}
            text="الذبح والجزارة"
          />
          <Service linkTo="/main/shop" img={camelInDesert} text="تربية و بيع" />
        </div>
      </section>
      <section className={styles.main__section4}>
        <Offer />
      </section>
      <section className={styles.main__section5}>
          <h1>تواصل معنا</h1>
          <img src={smallGoat} alt="small goat" />
          <MessageSender Y={10} />
      </section>
    </div>
  );
}



// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const response = await fetch("https://butchery-shop-api-production.up.railway.app//main");
  if (!response.ok)
    throw new Error("unexpected error happened when fetching your main data");
  const data: { title: string; desc: string; img: string; url: string }[] =
    await response.json();
  return data;
}
