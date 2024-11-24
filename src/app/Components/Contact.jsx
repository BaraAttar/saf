"use client";
import styles from "./styles/Contact.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

// icons
import message from "../../assets/message.svg";
import whatsApp from "../../assets/whatsapp.svg";
import phone from "../../assets/phone.svg";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div className={`${styles.contactWrapper} ${isOpen ? styles.open : ""}`}>
      {/* الزر الأساسي */}
      <div
        className={styles.contact}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Image alt="contactUs" src={message} width={25} height={25} />
      </div>

      {/* العناصر الإضافية */}
      <div className={styles.contactElements}>
        <div className={styles.phone}>
          <Image alt="phone" src={phone} width={25} height={25} />
        </div>
        <div className={styles.whatsapp}>
          <Image alt="whatsApp" src={whatsApp} width={25} height={25} />
        </div>
      </div>
    </div>
  );
}
