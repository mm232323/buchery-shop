import { FormEvent, useState } from "react";
import styles from "./MessageSender.module.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MessageSender:React.FC<{Y:number}> = (props) => {
  const formErrorsVar = {
    name: false,
    phone: false,
    email: false,
    message: false,
  };
  const [formErrors, setFormErrors] = useState({
    name: false,
    phone: false,
    email: false,
    message: false,
  });
  function formHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as {
      name: string;
      phone: string;
      email: string;
      message: string;
    }
    if (data.name.trim().split(" ").length < 3) formErrorsVar.name = true;
    if (data.phone.trim().length !== 11 || isNaN(+data.phone))
      formErrorsVar.phone = true;
    if (
      !data.email.includes("@") ||
      !data.email.includes(".") ||
      data.email.slice(0, data.email.indexOf("@")).length == 0 ||
      data.email.slice(data.email.indexOf(".")).length == 0
    )
      formErrorsVar.email = true;
    if (
      data.message.trim().split(" ").length < 5 ||
      data.message.trim().length < 6
    )
      formErrorsVar.message = true;
    event.currentTarget.reset();
    if (
      formErrorsVar.name ||
      formErrorsVar.email ||
      formErrorsVar.phone ||
      formErrorsVar.message
    ) {
      console.log(formErrorsVar);
      setFormErrors(formErrorsVar);
    } else {
      sendMessage(data);
      setFormErrors(formErrorsVar);
    }
  }
  return (
    <form
      style={{ top: props.Y +'rem'}}
      onSubmit={formHandler}
      className={styles.message_sender__container}
    >
      <label htmlFor="name">الأسم</label>
      <br></br> <br></br>
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="الأسم الثلاثي"
        className={formErrors.name ? styles.error : ""}
      />
      <br></br> <br></br>
      <label htmlFor="phone">رقم الهاتف</label>
      <br></br> <br></br>
      <input
        type="number"
        id="phone"
        minLength={11}
        name="phone"
        maxLength={11}
        required
        placeholder="رقم الهاتف المكون من 11 رقم"
        className={formErrors.phone ? styles.error : ""}
      />
      <br></br> <br></br>
      <label htmlFor="email">البريد الألكتروني</label>
      <br></br> <br></br>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="بريد ألكتروني صحيح"
        className={formErrors.email ? styles.error : ""}
      />
      <br></br> <br></br>
      <label htmlFor="message">الرسالة</label>
      <br></br> <br></br>
      <textarea
        name="message"
        id="message"
        required
        placeholder="رسالة لا تقل عن 5 كلمات"
        className={formErrors.message ? styles.error : ""}
      ></textarea>
      <br></br> <br></br>
      <button type="submit">إرسال</button>
    </form>
  );
}
function sendMessage(data: object) {
  fetch("http://localhost:3000/main/send-message", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export default MessageSender
