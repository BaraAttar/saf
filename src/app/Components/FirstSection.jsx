import { useEffect, useState } from "react";
import styles from "./styles/FirstSection.module.css";

export default function FirstSection() {
  const [isFirstVisible, setIsFirstVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target.dataset.paragraph === "first" && !isFirstVisible) {
          if (entry.isIntersecting) {
            setIsFirstVisible(true);
          }
        }
      },
      {
        threshold: 0.5, 
      }
    );

    const firstParagraphElement = document.querySelector("[data-paragraph='first']");

    if (firstParagraphElement) {
      observer.observe(firstParagraphElement);
    }

    return () => {
      if (firstParagraphElement) {
        observer.unobserve(firstParagraphElement);
      }
    };
  }, [isFirstVisible]);

  return (
    <section className={styles.first_section}>
      <p
        data-paragraph="first"
        className={`${styles.first_paragraph} ${
          isFirstVisible ? styles.visible : ""
        }`}
      >
        منذ انطلاقتنا في عام 2022، في سعف، نؤمن أن كل فكرة هي بذرة تستحق العناية
        لقتنمو وتثمر. نزرع الإبداع بشغف، ونسقيه بالاحترافية، لنحصد تأثيزا يصنع
        فرقا ويبرز علامتك في سوق مليء بالتحديات، نقدم في سعف خدمات إنتاجية
        عالية الجودة تشمل صناعة المحتوى المرئي والإبداعي، إلى جانب حلول
        تسويقية متكاملة، من بناء الاستراتيجيات إلى تنفيذ الحملات، لنضمن لك
        التميز والانتشار.
      </p>
    </section>
  );
}
