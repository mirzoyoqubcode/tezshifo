import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Logo from "../../assets/images/logo.svg";

const Navbar: React.FC = () => {
  return (
    <div className={styles.container_navbar}>
      <div className={styles.middle}>
        <div className={styles.logo}>
          <Logo />
          <h1 className={styles.logo_title}>Tez shifo</h1>
        </div>
        <ul className={styles.navbar_links}>
          <Link href="/home" className={styles.link}>
            О нас
          </Link>

          <Link href="/" className={styles.link}>
            Возможности
          </Link>

          <Link href="/" className={styles.link}>
            ЧЗВ
          </Link>

          <Link href="/contact" className={styles.link}>
            Связатся с нами
          </Link>

          <button className={styles.btn_call}>+ 998 (99) 121 45 45</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
