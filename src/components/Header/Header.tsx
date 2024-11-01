import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import AppleStore from "../../assets/images/appstore.svg";
import GooglePLay from "../../assets/images/googleplay.svg";
import Phone from "../../assets/images/header_phone.svg";

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Navbar />
      <main className={styles.header_main}>
        <div className={styles.header_text_wrapper}>
          <h1 className={styles.title_header}>
            Tezshifo – Платформа для <br /> клиники, врача и пациента
          </h1>
          <p className={styles.description_header}>
            Мы даем возможность пациентам легко бронировать как онлайн, так и
            оффлайн <br /> консультации с врачами, выбирая удобное время и
            формат общения.
          </p>
          <div className={styles.header_buttons}>
            <button className={styles.btn_download}>
              <AppleStore />
            </button>
            <button className={styles.btn_download}>
              <GooglePLay />
            </button>
          </div>
        </div>
        <div className={styles.header_image}>
          <Phone className={styles.phone} />
        </div>
      </main>
    </div>
  );
};

export default Header;
