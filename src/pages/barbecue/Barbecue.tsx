import styles from "./Barbecue.module.css";
import {lazy} from 'react'
const  Header  = lazy(() => import("../../components/layout/header/Header"));
import background from "/barbecuePB.svg";
const PageIder =  lazy(() => import("../../components/UI/pageIder/PageIder"))
import barbecueIdImg from "/barbecueIdImg.png";
import cookingPan from "/cookingPan.png";
import { useQuery } from "@tanstack/react-query";
import { fetchMeals } from "../../util/http";
const  MealViewer  = lazy(() => import("../../components/barbecue/mealViewer/MealViewer"))
const  LoadingSpinner = lazy(() => import("../../components/UI/loadingSpinner/LoadingSpinner"))
const  ChefViewer = lazy(() => import("../../components/barbecue/chefViewer/ChefViewer"))
import Chef1 from "/chef1.png";
import Chef2 from "/chef2.png";
import Chef3 from "/chef3.png";
export default function Barbecue() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["meals"],
    queryFn: fetchMeals,
  });
  let content;
  if (isError)
    content = (
      <p>
        {error.name}:{error.message}
      </p>
    );
  if (isPending) content = <LoadingSpinner />;
  if (data)
    content = data.map((meal) => (
      <MealViewer
        key={meal.id}
        id={meal.id}
        name={meal.name}
        price={meal.price}
        imgUrl={meal.imgUrl}
        direction={meal.id % 2 == 0 ? "right_side" : "left_side"}
      />
    ));
  return (
    <div className={styles.barbecue__container}>
      <Header theme="dark" />
      <img src={background} className={styles.background} alt="background" />
      <PageIder img={barbecueIdImg} color="white">
        خدمات الشوي و التسوية
      </PageIder>
      <section className={styles.barbecue__section1}>
        <img src={cookingPan} className={styles.cookingPan} alt="cooking pan" />
        <h1>أفضل الأطباق المبتكرة</h1>
        <p>
          يقدم متجر الشواء الآن مجموعة من الأطباق المبتكرة التي من المؤكد أنها
          ستثير ذوقك. من أطباق شرائح اللحم الفريدة إلى الأطباق الجانبية
          المبتكرة، لدينا ما يستمتع به الجميع.
          <br></br>
          <br></br>
          بدءًا من شرائح لحم البقر الواغيو اللذيذة وحتى شرائح لحم الريب آي
          المجففة اللذيذة، قمنا بتنسيق قائمة تعرض أرقى قطع اللحوم المطبوخة
          بإتقان على الشواية.
          <br></br>
          <br></br>
          يسعدنا أن نعلن عن إطلاق أحدث عناصر القائمة لدينا في متجر الشواء -
          أطباق شرائح اللحم المبتكرة. لقد بذل فريقنا قصارى جهده لإتقان هذه
          الإبداعات الجديدة ليقدم لك تجربة طعام فريدة ولذيذة.
        </p>
      </section>
      <section className={styles.barbecue__section2}>
        <h1 className={styles.title}>أشهر الأطباق وأكثرها طلباً</h1>
        {isPending && content}
        {data && <div className={styles.mealsContainer}>{content}</div>}
      </section>
      <section className={styles.barbecue__section3}>
        <h1 className={styles.title}>أفضل و أحرف طبّاخينا</h1>
        <div className={styles.chefsContainer}>
          <ChefViewer
            imgUrl={Chef1}
            name="سريّ الدين حمدي"
            jobTitle="مدير الطباخين"
          />
          <ChefViewer
            imgUrl={Chef2}
            name="عزّت يوسف"
            jobTitle="طبّاخ لحوم رتبة أولي"
          />
          <ChefViewer
            imgUrl={Chef3}
            name="حسن صبحي"
            jobTitle="طبّاخ صلصه رتبة أولي"
          />
        </div>
      </section>
    </div>
  );
}
