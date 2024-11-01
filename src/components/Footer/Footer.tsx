import React from "react";
import styles from "./Footer.module.scss";
import FooterLogo from "../../assets/images/footer_logo.svg";
import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";
import Youtube from "../../assets/images/youtube.svg";
import ArrowUp from "../../assets/images/uparrow.svg";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper_footer}>
        <div className={styles.footer_logo}>
          <FooterLogo />
        </div>
        <div className={styles.wrapper_footer_links}>
          <article className={styles.footer_texts}>
            <p className={styles.footer_title}>
              Все права на материалы принадлежат ООО «company».
              <br /> Любое использование материалов возможно только с <br />
              письменного разрешения правообладателя.
            </p>
          </article>
          <article className={styles.footer_links}>
            <h2 className={styles.footer_links_title}>Информация</h2>
            <ul className={styles.footer_links_list_wrapper}>
              <li className={styles.footer_links_list}>О нас</li>
              <li className={styles.footer_links_list}>Возможности</li>
              <li className={styles.footer_links_list}>ЧЗВ</li>
              <li className={styles.footer_links_list}>Связатся с нами</li>
            </ul>
          </article>
          <article className={styles.footer_contacts}>
            <h2 className={styles.footer_contacts_title}>Контакты</h2>
            <ul className={styles.footer_contacts_list_wrapper}>
              <li>+998 (93) 240 94 49 </li>
              <li>Tezshifo@support.com</li>
            </ul>
          </article>
          <article className={styles.social_media}>
            <Instagram className={styles.icon_social} />
            <Facebook className={styles.icon_social} />
            <Youtube className={styles.icon_social} />
          </article>
        </div>
        <div className={styles.bottom_footer}>
          <p className={styles.copyright}>© 2024 — “Intersoft” Tech</p>

          <ArrowUp className={styles.arrow_up} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
