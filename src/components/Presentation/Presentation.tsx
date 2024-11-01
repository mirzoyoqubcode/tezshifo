import React from "react";
import styles from "./Presentation.module.scss";
import Doctor_calendar from "../../assets/images/doctor_calendar.svg";
const Presentation: React.FC = () => {
  return (
    <div className={styles.presentation}>
      <div className={styles.presentation_wrapper}>
        <div className={styles.presentation_text}>
          <h1 className={styles.presentation_title}>
            Управляйте записями легко и эффективно
          </h1>
          <p className={styles.presentation_description}>
            Автоматизация расписания, снижение административной нагрузки и
            улучшенное <br /> взаимодействие с пациентами. Все это – в одном
            удобном сервисе
          </p>
          <button className={styles.presentation_btn}>
            Запросить полную презентацию
          </button>
        </div>
        <Doctor_calendar className={styles.doctor_calendar} />
      </div>
    </div>
  );
};
export default Presentation;
