import React from "react";
import styles from "./Application.module.scss";
import TezshifoApp from "../../assets/images/tez_shifo_app_logo.svg";
import TezshifoDoctor from "../../assets/images/tez_shifo_doctor_logo.svg";
import TezshifoQr from "../../assets/images/tezshifoqr.svg";
import TezshifoDoctorQr from "../../assets/images/tezshifodoctor.svg";
import ApplicationImage from "../../assets/images/application_image.svg";
const Application: React.FC = () => {
  return (
    <div className={styles.application}>
      <div className={styles.application_wrapper}>
        <div className={styles.application_text}>
          <h1 className={styles.application_title}>
            Приложение для всех: удобная запись и <br /> управление визитами!
          </h1>
          <div className={styles.application_lines}>
            <article className={styles.application_line_1}>
              <div className={styles.line_1_title}>
                <TezshifoApp />
                <h1>Tez Shifo</h1>
              </div>
              <TezshifoQr className={styles.tezshifo_qr} />
              <p>Для пользователей мед. услуг</p>
            </article>
            <article className={styles.application_line_2}>
              <div className={styles.line_2_title}>
                <TezshifoDoctor />
                <h1>Tez Shifo doctor</h1>
              </div>
              <TezshifoDoctorQr className={styles.tezshifo_qr} />
              <p>Для сотрудников медицины</p>
            </article>
          </div>
        </div>
        <ApplicationImage className={styles.application_image} />
      </div>
    </div>
  );
};

export default Application;
