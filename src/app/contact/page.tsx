import Contactnav from "@/components/Contactnav/Contactnav";
import Footer from "@/components/Footer/Footer";
import styles from "./contact.module.scss";
import React from "react";
import PhoneIcon from "../../assets/images/call_icon.svg";
import Envelope from "../../assets/images/envelope.svg";
import Location from "../../assets/images/location.svg";
import Twitter from "../../assets/images/twitter.svg";
import Instagram from "../../assets/images/instagram_icon.svg";
import Discord from "../../assets/images/discord.svg";

const Contact: React.FC = () => {
  return (
    <div className={styles.main_container}>
      <Contactnav />
      <div className={styles.wrapper_contact}>
        <div className={styles.container}>
          <div className={styles.information_location_wrapper}>
            <div className={styles.title_contact}>
              <h1>Контактная информация</h1>
              <p>Скажите что-нибудь, чтобы начать чат!</p>
            </div>
            <div className={styles.contact_info}>
              <div className={styles.phone_number}>
                <PhoneIcon />
                <p>+998 (99) 121 45 45</p>
              </div>
              <div className={styles.email}>
                <Envelope />
                <p>Tezshifo@support.com</p>
              </div>
              <div className={styles.location}>
                <Location />
                <p>
                  132 Dartmouth Street Boston, <br /> Massachusetts 02156 United
                  States
                </p>
              </div>
            </div>
            <div className={styles.social_icons}>
              <Twitter />
              <Instagram />
              <Discord />
            </div>
          </div>
          <div className={styles.wrapper_form}>
            <div className={styles.text_title_form}>
              <h1>Связатся с нами</h1>
              <p>Есть вопросы? Просто напишите нам сообщение!</p>
            </div>
            <form className={styles.form}>
              <div className={styles.line_input}>
                <div className={styles.name_input}>
                  <label htmlFor="">Имя</label>
                  <input type="text" placeholder="Введите имя" required />
                </div>
                <div className={styles.name_input}>
                  <label htmlFor="">Фамилия</label>
                  <input type="text" placeholder="Введите фамилию" required />
                </div>
              </div>
              <div className={styles.line_input}>
                <div className={styles.name_input}>
                  <label htmlFor="">Электронный адрес</label>
                  <input
                    type="email"
                    placeholder="Введите электронный адрес"
                    required
                  />
                </div>
                <div className={styles.name_input}>
                  <label htmlFor="">Номер телефона</label>
                  <input
                    type="tel"
                    placeholder="Введите номер телефона"
                    pattern="\d{10}"
                    required
                  />
                </div>
              </div>
              <div className={styles.line_input_message}>
                <label htmlFor="">Сообщение</label>
                <textarea placeholder="Пишите сообщение"></textarea>
              </div>
              <button className={styles.btn_send}>Отправить</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
