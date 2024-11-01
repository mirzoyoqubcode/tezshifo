import React from "react";
import styles from "./Possibilities.module.scss";
import Possible_doctor_calendar from "../../assets/images/possible_doctor_calendar.svg";
import Patient from "../../assets/images/patient_image.svg";
import Clinic from "../../assets/images/clinic_image.svg";
const Possibilities: React.FC = () => {
  return (
    <div className={styles.possibilities}>
      <div className={styles.possibilities_wrapper}>
        <h1 className={styles.possibilities_title}>Возможности</h1>
        <div className={styles.possibilities_content_wrapper}>
          <div className={styles.possibilities_content}>
            <h1 className={styles.possibilities_content_title}>Докторам</h1>
            <p className={styles.possibilities_content_list}>
              <strong>Эффективное управление расписанием:</strong> Упрощенная
              система ведения <br /> календаря и гибкость в планировании.
            </p>
            <p className={styles.possibilities_content_list}>
              <strong>Меньше административной работы:</strong> Автоматизация
              записи и <br /> уведомлений снижает нагрузку на персонал.
            </p>
            <p className={styles.possibilities_content_list}>
              <strong>История пациентов:</strong> Удобный доступ к данным
              пациента, что улучшает <br /> качество консультации.
            </p>
            <p className={styles.possibilities_content_list}>
              <strong>Уведомления и оповещения:</strong> Напоминания о записях и
              возможность <br /> переноса приемов с уведомлением пациента.
            </p>
          </div>
          <Possible_doctor_calendar
            className={styles.possible_doctor_calendar}
          />
        </div>
        <div className={styles.possibilities_content_wrapper}>
          <Patient className={styles.possible_patient_image} />
          <div className={styles.possibilities_content}>
            <h1 className={styles.possibilities_content_title}>Пациентам</h1>
            <p className={styles.possibilities_content_list}>
              <strong>Быстрая и удобная запись:</strong> Запись к врачу в
              несколько кликов без <br /> необходимости звонков и ожиданий.
            </p>
            <p className={styles.possibilities_content_list}>
              <strong>Напоминания о приеме:</strong> Автоматические уведомления,
              чтобы не <br /> пропустить важный визит.
            </p>
            <p className={styles.possibilities_content_list}>
              <strong>Доступ к медицинской истории:</strong> Легкий доступ к
              результатам анализов и <br /> истории посещений.
            </p>
            <p className={styles.possibilities_content_list}>
              <strong>Поддержка онлайн-консультаций:</strong> Возможность
              записаться на <br /> дистанционный прием или видеоконсультацию.
            </p>
            <p className={styles.possibilities_content_list}>
              <strong>Фильтрация врачей и клиник:</strong>Удобный выбор врача по
              специализации, <br /> рейтингу и отзывам.
            </p>
          </div>
        </div>
        <div className={styles.possibilities_content_wrapper}>
          <div className={styles.possibilities_content}>
            <h1 className={styles.possibilities_content_title}>Клиникам</h1>
            <p className={styles.possibilities_content_list}>
              <strong>Оптимизация рабочего процесса:</strong> Возможность
              мониторинга посещаемости, <br /> загрузки врачей и другой важной
              статистики.
            </p>
            <p className={styles.possibilities_content_list}>
              <strong>Статистика и аналитика:</strong> Возможность мониторинга
              посещаемости,
              <br /> загрузки врачей и другой важной статистики.
            </p>
            <p className={styles.possibilities_content_list}>
              <strong>Повышение удовлетворенности пациентов:</strong> Удобный
              интерфейс и <br /> простой процесс записи повышают лояльность и
              удовлетворение <br /> пациентов.
            </p>
            <p className={styles.possibilities_content_list}>
              <strong>Брендирование:</strong> Возможность интеграции логотипа и
              дизайна клиники в <br /> приложение для усиления бренда.
            </p>
          </div>
          <Clinic className={styles.possibilities_clinic_image} />
        </div>
      </div>
    </div>
  );
};

export default Possibilities;
