"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Convenience.module.scss";
import Image1 from "../../assets/images/convenience_image1.svg";
import Image2 from "../../assets/images/convenience_image2.svg";
import Image3 from "../../assets/images/convenience_image3.svg";

type TextOption = {
  id: number;
  title: string;
  description: string;
  extra: string;
};

const textOptions: TextOption[] = [
  {
    id: 1,
    title: "Настоящие отзывы",
    description:
      "Рейтинг врача основан на проверенных на проверенных отзывах его пациентов",
    extra:
      "Мы публикуем отзывы о враче только от его пациентов, побывавших на приёме",
  },
  {
    id: 2,
    title: "Запись на удобное время",
    description: "Выбирайте удобный день и время приёма",
    extra: "Записывайтесь на свободное время в два клика",
  },
  {
    id: 3,
    title: "Врачи рядом с вами",
    description: "Поиск врачей и клиник поблизости от местоположения",
    extra: "Тысячи клинок и врачей в Ташкенте и других регионах",
  },
];

const Convenience: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  const handleTextClick = (index: number) => {
    setSelectedIndex(index);
  };

  const cards = [
    { id: 1, src: <Image1 />, alt: "Card 1" },
    { id: 2, src: <Image2 />, alt: "Card 2" },
    { id: 3, src: <Image3 />, alt: "Card 3" },
  ];

  return (
    <div className={styles.convenience}>
      <div className={styles.convenienceWrapper}>
        <h1 className={styles.convenienceTitle}>
          Почему пользоваться Tez Shifo так удобно?
        </h1>
        <div className={styles.convenienceContainer}>
          <div className={styles.cardContainer}>
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 1 }}
                animate={{
                  opacity:
                    selectedIndex === null || selectedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.5 }}
                className={`${styles.card} ${styles[`card${index + 1}`]}`}
              >
                {card.src}
              </motion.div>
            ))}
          </div>
          <div className={styles.textOptions}>
            {textOptions.map((option, index) => (
              <motion.div
                key={option.id}
                className={`${styles.textOption} ${
                  index === selectedIndex ? styles.active : ""
                }`}
                onClick={() => handleTextClick(index)}
              >
                <h2>{option.title}</h2>
                <p>{option.description}</p>
                <p>{option.extra}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convenience;
