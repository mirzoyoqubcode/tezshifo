import React from "react";
import styles from "./Services.module.scss";
import Item from "../../assets/images/item_doctor.svg";
import AppleStore from "../../assets/images/appstore.svg";
import GooglePlay from "../../assets/images/googleplay.svg";
import Qr from "../../assets/images/qrcode.svg";
import Cubic from "../../assets/images/bricks.svg";
import Doctor from "../../assets/images/doctors.svg";
import ServiceRight from "../../assets/images/service_right.svg";

const Services: React.FC = () => {
  return (
    <div className={styles.container_services}>
      <div className={styles.services_middle}>
        <div className={styles.article_wrapper}>
          <article className={styles.services_article_1}>
            <Item className={styles.item} />
            <div className={styles.article_texts}>
              <h1 className={styles.medcard_title}>
                Медкарты всей семьи в <br /> одном аккаунте
              </h1>
              <p className={styles.medcard_description}>
                Следите за здоровьем своих близких, <br /> используя
                мультиаккаунт для всей семьи. <br /> Теперь у вас есть доступ к
                электронной <br />
                истории болезни каждого члена семьи с <br /> рекомендациями и
                назначениями врачей.
              </p>
            </div>
          </article>

          <article className={styles.services_article_2}>
            <div className={styles.article_texts}>
              <h1 className={styles.application_qr_title}>Приложения</h1>
              <p className={styles.application_qr_description}>
                Врачи проводят онлайн-консультации в любое время, без <br />
                перерыва на обед. Предварительная запись не нужна. <br /> Если у
                вас есть вопрос к врачу, просто начните <br /> консультацию:
              </p>
              <div className={styles.article_buttons}>
                <button className={styles.btn_download}>
                  <AppleStore />
                </button>
                <button className={styles.btn_download}>
                  <GooglePlay />
                </button>
              </div>
            </div>
            <Qr className={styles.qr} />
          </article>

          <article className={styles.services_article_3}>
            <div className={styles.article_texts}>
              <h1 className={styles.article_title}>
                Здоровье семьи под контролем
              </h1>
              <p className={styles.description_cubic}>
                Медицинская карта всегда под рукой — в <br /> любое время и на
                любом устройстве
              </p>
              <ul className={styles.cubic_list}>
                <li>История приёмов</li>
                <li>Рекомендации врача</li>
                <li>Результаты исследований</li>
                <li>Готовность анализа</li>
              </ul>
            </div>
            <Cubic className={styles.cubic} />
          </article>

          <article className={styles.services_article_4}>
            <Doctor className={styles.doctor} />
            <div className={styles.article_texts}>
              <h1 className={styles.doctor_title}>Заботимся о главном</h1>
              <p className={styles.doctor_description}>
                Основная задача нашего сервиса — сделать процесс записи <br />
                к врачу максимально прозрачным, удобным и быстрым
              </p>
            </div>
          </article>
        </div>
      </div>
      <ServiceRight className={styles.service_right} />
    </div>
  );
};

export default Services;
