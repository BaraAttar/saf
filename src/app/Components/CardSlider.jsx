"use client";
import styles from "./styles/CardSlider.module.css";
import Link from "next/link";
import Image from "next/image";

import digital_marketing from "@/assets/digital-marketing.png";
import arrow from "@/assets/arrow-left.svg";

const CardSlider = ({ sliderRef }) => {
  const cards = [
    {
      key: 1,
      title: "خدمات التسويق الرقمي",
      description:
        "نستهدف جمهورك ونروج لعلامتك التجارية بأفضل الاستراتيجيات. نقدم إدارة فعالة للحملات الإعلانية الممولة، حيث نحلل سلوكيات واهتمامات الجمهور لضمان وصول الرسالة بفعالية. كما نقدم استراتيجيات تسويقية مبتكرة لزيادة المبيعات وتعزيز الوعي بالعلامة التجارية",
    },
    {
      key: 2,
      title: "إدارة حسابات التواصل الاجتماعي",
      description:
        "نستهدف جمهورك ونروج لعلامتك التجارية بأفضل الاستراتيجيات. نقدم إدارة فعالة للحملات الإعلانية الممولة، حيث نحلل سلوكيات واهتمامات الجمهور لضمان وصول الرسالة بفعالية. كما نقدم استراتيجيات تسويقية مبتكرة لزيادة المبيعات وتعزيز الوعي بالعلامة التجارية",
    },
    {
      key: 3,
      title: "الاستشارات التسويقية",
      description:
        "نستهدف جمهورك ونروج لعلامتك التجارية بأفضل الاستراتيجيات. نقدم إدارة فعالة  المبيعات وتعزيز الوعي بالعلامة التجارية",
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider} ref={sliderRef}>
        {cards.map((card) => (
          <div key={card.key} className={styles.card}>
            <div>
              <Image
                className={styles.icon}
                alt="icon"
                src={digital_marketing}
                width={100}
                height={100}
              />
              <p className={styles.title}>{card.title}</p>
              <p className={styles.description}>{card.description}</p>
            </div>
            <Link href={"/"} className={styles.request_service}>
              <p>اطلب الخدمة</p>
              <Image alt="icon" src={arrow} width={30} height={30} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
