"use client";
import React, { useState } from "react";
import styles from "./FaqSection.module.scss";
import Minus from "../../assets/images/minus.svg";
import Plus from "../../assets/images/minus_solid.svg";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Как зарегистрироваться в приложении?",
    answer:
      "Зарегистрироваться можно с помощью номера телефона или электронной почты. Заполните необходимые данные и подтвердите регистрацию через код из SMS или email.",
  },
  {
    question: "Как клиника может управлять расписанием всех врачей?",
    answer:
      "Администраторы клиники имеют доступ к общему расписанию всех врачей и могут вносить изменения, переназначать приемы и управлять доступными слотами.",
  },
  {
    question: "Как записаться на прием к врачу?",
    answer:
      "Приложение предоставляет детализированные отчеты о посещаемости, эффективности врачей, количестве записей и других ключевых показателях.",
  },
  {
    question: "Могу ли я отменить или перенести запись?",
    answer:
      "Да, клиника может интегрировать свои логотипы, цвета и стилистику в приложение для усиления бренда.",
  },
  {
    question: "Как клиника может получать обратную связь от пациентов?",
    answer:
      "Пациенты могут оставлять отзывы после визитов, и клиника может получать уведомления о новых отзывах для анализа и улучшения качества обслуживания.",
  },
];

const FaqSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    faqs.map((_, i) => i)
  );

  const toggleOpen = (index: number) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <div className={styles.faqSection}>
      <div className={styles.faqSection__container}>
        <div className={styles.faqSection__header}>
          <h2 className={styles.faqSection__title}>Часто задаваемые вопросы</h2>
          <p className={styles.faqSection__description}>
            Все, что вам нужно знать о продукте. Не можете найти ответ? <br />
            Пожалуйста, свяжитесь с нашей дружной <br /> командой.
          </p>
        </div>
        <div className={styles.faqSection__content}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqSection__item}>
              <div
                className={styles.faqSection__question}
                onClick={() => toggleOpen(index)}
              >
                <span>{faq.question}</span>
                <span className={styles.icon}>
                  {openIndexes.includes(index) ? <Plus /> : <Minus />}
                </span>
              </div>
              {openIndexes.includes(index) && (
                <div className={styles.faqSection__answer}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
