import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./styles/SecondSection.module.css";

// icone
import targeting from "@/assets/targeting.png";

export default function SecondSection() {
  const [isSecondVisible, setIsSecondVisible] = useState(false);
  const secondParagraphRef = useRef(null); // Use ref instead of querySelector

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Directly observe the second paragraph using ref
        if (entry.target === secondParagraphRef.current) {
          setIsSecondVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.5,
      }
    );

    const secondParagraphElement = secondParagraphRef.current;

    if (secondParagraphElement) {
      observer.observe(secondParagraphElement);
    }

    return () => {
      if (secondParagraphElement) {
        observer.unobserve(secondParagraphElement);
      }
    };
  }, []);

  return (
    <div className={styles.second_section}>
      <div
        ref={secondParagraphRef} // Attach the ref here
        className={`${styles.second_paragraph} ${
          isSecondVisible ? styles.visible : ""
        }`}
      >
        <h1>رؤيتنا</h1>
        <Image priority alt="icon" src={targeting} width={100} height={100} />
        <p>
          أن نكون روادا في مجال التسويق والإنتاج الإبداعي على مستوى المملكة
          العربية السعودية والمنطقة، مستلهمين رؤية المملكة 2030 في دعم التحول
          الرقمي، وتعزيز الإبداع، وبناء علامات تجارية ذات تأثير مستدام. نهدف إلى
          زراعة الأفكار الملهمة وحصاد نتائج استثنائية تساهم في تحقيق تطلعات
          عملائنا وتعزيز مكانتهم في السوق المحلي والعالمي .
        </p>
      </div>
    </div>
  );
}
