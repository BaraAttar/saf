"use client";
import styles from "./styles/OurServices.module.css";
import CardSlider from "./CardSlider";
import { useRef } from "react";

import arrowLeft from "@/assets/arrow-left.svg";
import arrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";


export default function OurServices() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth; // التمرير لليسار
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth; // التمرير لليمين
    }
  };

  return (
    <div className={styles.ourServices}>
      <h1>خدماتنا</h1>
      <p>
        في سعف، نزرع الإبداع في التسويق والإنتاج لنحصد تأثيزا يعزز حضور علامتك
        التجارية، ويحقق أهدافها بجودة واحترافية .
      </p>

      <div className={styles.serviceCardsList}>
      <Image src={arrowLeft} width={30} height={30} alt="icon" onClick={slideLeft} className={styles.navButton}/>
        <CardSlider sliderRef={sliderRef} />
        <Image src={arrowRight} width={30} height={30} alt="icon" onClick={slideRight} className={styles.navButton}/>

      </div>
    </div>
  );
}
