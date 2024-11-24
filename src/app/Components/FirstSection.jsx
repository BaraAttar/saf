import { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from './styles/FirstSection.module.css'

// icone
import targeting from "@/assets/targeting.png";

export default function FirstSection() {
  const [isFirstVisible, setIsFirstVisible] = useState(false);
  const [isSecondVisible, setIsSecondVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target.classList.contains(styles.first_paragraph)) {
          setIsFirstVisible(entry.isIntersecting);
        } else if (entry.target.classList.contains(styles.second_paragraph)) {
          setIsSecondVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.5  // 50% of the element should be visible
      }
    );

    const firstParagraphElement = document.querySelector(`.${styles.first_paragraph}`);
    const secondParagraphElement = document.querySelector(`.${styles.second_paragraph}`);

    if (firstParagraphElement) {
      observer.observe(firstParagraphElement);
    }
    if (secondParagraphElement) {
      observer.observe(secondParagraphElement);
    }

    return () => {
      if (firstParagraphElement) {
        observer.unobserve(firstParagraphElement);
      }
      if (secondParagraphElement) {
        observer.unobserve(secondParagraphElement);
      }
    };
  }, []);

  return (
    <section className={styles.first_section}>
        <p className={`${styles.first_paragraph} ${isFirstVisible ? styles.visible : ''}`}>
          منذ انطلاقتنا في عام 2022، في سعف، نؤمن أن كل فكرة هي بذرة تستحق
          العناية لقتنمو وتثمر. نزرع الإبداع بشغف، ونسقيه بالاحترافية، لنحصد
          تأثيزا يصنع فرقا ويبرز علامتك في سوق مليء بالتحديات، نقدم في سعف خدمات
          إنتاجية عالية الجودة تشمل صناعة المحتوى المرئي والإبداعي، إلى جانب
          حلول تسويقية متكاملة، من بناء الاستراتيجيات إلى تنفيذ الحملات، لنضمن
          لك التميز والانتشار .
        </p>
        <div className={`${styles.second_paragraph} ${isSecondVisible ? styles.visible : ''}`}>
          <h1>رؤيتنا</h1>
          <Image priority alt="icon" src={targeting} width={100} height={100}/>
          <p>
            أن نكون روادا في مجال التسويق والإنتاج الإبداعي على مستوى المملكة
            العربية السعودية والمنطقة، مستلهمين رؤية المملكة 2030 في دعم التحول
            الرقمي، وتعزيز الإبداع، وبناء علامات تجارية ذات تأثير مستدام. نهدف إلى
            زراعة الأفكار الملهمة وحصاد نتائج استثنائية تساهم في تحقيق تطلعات
            عملائنا وتعزيز مكانتهم في السوق المحلي والعالمي.
          </p>
        </div>
      </section>
  )
}
