import styles from "./SlaughterHouse.module.css";
import Header from "../../components/layout/header/Header";
import PageIder from "../../components/UI/pageIder/PageIder";
import SlaughterhouseIdImg from "/slaughterhouseIdImg.png";
import ToolsViewer from "../../components/slaughterhosue/toolsViewer/ToolsViewer";
import Tool1 from "/tool1.png";
import Tool2 from "/tool2.png";
import Tool3 from "/tool3.png";
import TransferingImg from "/transferImg.png";
import DeliveryIcon from "/deliveryIcon.png";
import { MdOutlinePhone } from "react-icons/md";
import { FaHotjar } from "react-icons/fa";
export default function SlaughterHouse() {
  return (
    <div className={styles.slaughterhouse__container}>
      <Header theme="dark" />
      <PageIder img={SlaughterhouseIdImg} color="white">خدمات الذبح والجزارة</PageIder>
      <section className={styles.slaughterhouse__section1}>
        <ToolsViewer
          toolTitle="الات الذبح"
          toolImg={Tool1}
          bgColor="#210A0A"
          shadowColor="#130202"
          direction="rtl"
        >
          لدينا أحدث وأفضل التقنيات في معدات الذبح ذات الجودة العالية المتاحة
          لك. إذا كنت بحاجة إلى أدوات ذبح موثوقة وفعالة، فلا تبحث أكثر. تم تصميم
          منتجاتنا لتلبية احتياجاتك وضمان الأداء المتميزة
        </ToolsViewer>
        <hr />
        <ToolsViewer
          toolTitle="الات السلخ"
          toolImg={Tool2}
          bgColor="#0B0A21"
          shadowColor="#01000D"
          direction="ltr"
        >
          نقدم لكم أحدث وأرقى أدوات سلخ الحيوانات المضمونة والفعالة والنقية
          100%. تم تصميم مجموعتنا من آلات السلخ لتبسيط عملية السلخ، مما يوفر لك
          الوقت والجهد مع ضمان الدقة والنظافة.
        </ToolsViewer>
        <hr />
        <ToolsViewer
          toolTitle="أدوات الجزارة"
          toolImg={Tool3}
          bgColor="#21150A"
          shadowColor="#120900"
          direction="rtl"
        >
          جميع أدوات الجزار لدينا هي من الدرجة الأولى وغير ملوثة. يقوم موظفونا
          المحترفون باختيار كل أداة بعناية لضمان أعلى مستويات الجودة.
        </ToolsViewer>
        <hr />
      </section>
      <section className={styles.slaughterhouse__section2}>
        <h1>خدمات التوصيل</h1>
        <img
            src={TransferingImg}
            className={styles.transferingBg}
            alt="transfer image"
          />
        <div className={styles.fastDelivery}>
          <h2>توصيل سريع ومجّاني</h2>
          <img src={DeliveryIcon} alt="" />
        </div>
        <div className={styles.contacting}>
          <h2>للتواصل</h2>
          <div>
            <MdOutlinePhone className={styles.delivery__icon} size={47} color="white" />
            <p>الخط الرئيسي: 3734821695 +966</p>
          </div>
          <div>
            <MdOutlinePhone className={styles.delivery__icon} size={47} color="white" />
            <p>الخط الثاني: 4324864324 +966</p>
          </div>
          <div>
            <FaHotjar className={styles.delivery__icon} color="white" size={40} />
            <p>الخط الساخن: 23623</p>
          </div>
        </div>
      </section>
    </div>
  );
}
