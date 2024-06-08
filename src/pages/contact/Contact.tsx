import Header from "../../components/layout/header/Header";
import MessageSender from "../../components/main/messageSender/MessageSender";
import PageIder from "../../components/UI/pageIder/PageIder";
import styles from "./Contact.module.css";
import contactIdImg from "/contactIdImg.png";
import contactBg from "/contactBg.png";
import contactingIcon1 from "/contactingIcon1.png";
import contactingIcon2 from "/contactingIcon2.png";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import locationLinkImg from "/locationLinkImg.png";
import Button from "../../components/UI/button/Button";
export default function Contact() {
  return (
    <div className={styles.contact__container}>
      <Header theme="dark" />
      <PageIder img={contactIdImg} color="dark">
        التواصل
      </PageIder>
      <img
        className={styles.contact__background}
        src={contactBg}
        alt="contact page background"
      />
      <div className={styles.contact__section1}>
        <h1>خدمة العملاء</h1>
        <p>
          من خلال الاتصال بنا عبر الهاتف، يمكنك بسهولة توصيل تفضيلاتك ومتطلباتك،
          مما يضمن حصولك على ما تريده بالضبط. موظفونا ذوو الخبرة متاحون للإجابة
          عن إي الأسئلة
        </p>
      </div>
      <div className={styles.contact__section2}>
        <img
          className={styles.ico1}
          src={contactingIcon1}
          alt="contacting phone icon"
        />
        <h1>تواصل عبر رسالة</h1>
        <MessageSender Y={75} />
      </div>
      <hr />
      <div className={styles.contact__section3}>
        <img
          className={styles.ico2}
          src={contactingIcon2}
          alt="customer service icon"
        />
        <h1>تواصل مع خدمة العملاء</h1>
        <div className={styles.icons}>
          <MdOutlinePhoneInTalk
            color="#571D1D"
            size={39}
            className={styles.icon}
          />
          <MdOutlinePhoneInTalk
            color="#571D1D"
            size={39}
            className={styles.icon}
          />
          <MdOutlinePhoneInTalk
            color="#571D1D"
            size={39}
            className={styles.icon}
          />
          <IoLogoWhatsapp color="#25D366" size={39} className={styles.icon} />
        </div>
        <h3>الخط الرئيسي: 3734821695 +966</h3>
        <h3>الخط الثاني: 5295701252 +966</h3>
        <h3>الخط الساخن: 23623</h3>
        <h3>واتساب: 57295235612 +966</h3>
      </div>
      <div className={styles.contact__section4}>
        <img src={locationLinkImg} alt="location link image" />
        <h1>الفروع</h1>
        <p>
          سواء كنت تتطلع إلى التسوق للحصول على أحدث الصيحات أو ببساطة الاستمتاع
          بيوم هادئ في الطبيعة، فإن مواقعنا توفر شيئًا للجميع. نحن ندعوك لزيارة
          أي من متاجرنا أو مزارعنا وتجربة العروض الفريدة التي يقدمها كل موقع.
        </p>
        <Button Y={10} X={36} linkTo='/main/locations'>تصفح الفروع</Button>
      </div>
    </div>
  );
}
