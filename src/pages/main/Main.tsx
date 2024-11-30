import styles from "./Main.module.css";
import { lazy } from "react";
const Header = lazy(() => import("../../components/layout/header/Header"));
import background from "/mainPB.svg";
import { useLoaderData } from "react-router";
const Viewer = lazy(() => import("../../components/main/viewer/Viewer"));
import { useState } from "react";
const Detail = lazy(() => import("../../components/main/detail/Detail"));
import cowHealth from "/cowHealth.png";
import cowEat from "/cowEat.png";
import freshMeat from "/freshMeat.png";
const Service = lazy(() => import("../../components/main/service/Service"));
import camelInDesert from "/camelInDesert.png";
import freshRedMeat from "/freshRedMeatButchery.png";
import cookingMeat from "/cookingMeatOverTheFlames.png";
import { mainData } from "../../util/interfaces";
const Offer = lazy(() => import("../../components/main/offer/Offer"));
import smallGoat from "/smallGoat.png";
const MessageSender = lazy(
  () => import("../../components/main/messageSender/MessageSender")
);
export default function Main() {
  const data = useLoaderData() as mainData[];
  const [selectedId, setselectedId] = useState(0);
  function handleSelect(id: number) {
    setselectedId(id);
  }
  const showingView = data.map((view) =>
    view.id == selectedId ? (
      <Viewer key={view.key} mainData={view} display={true} />
    ) : (
      <Viewer key={view.key} mainData={view} display={false} />
    )
  );
  return (
    <div style={{ fontFamily: "Tajawal" }}>
      <Header theme="light" />
      <img className={styles.background} src={background} alt="background" />
      {showingView}
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
  const response = await fetch(
    `https://butchery-shop-api-production-7f0d.up.railway.app/main`
  );
  if (!response.ok)
    throw new Error("unexpected error happened when fetching your main data");
  const data: { title: string; desc: string; img: string; url: string }[] =
    await response.json();
  return data;
}
