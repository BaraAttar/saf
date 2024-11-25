"use client";
import Link from "next/link";
import styles from "./page.module.css";
import Contact from "./Components/Contact";

import FirstSection from "./Components/FirstSection";
import SecondSection from "./Components/SecondSection";
import OurServices from "./Components/OurServices";

export default function Home() {
  return (
    <div>
      <Contact />
      <main className={styles.main}>
        <video
          className={styles.background_video}
          autoPlay
          muted
          loop
          aria-label="Background video showing creative process"
        >
          <source src="/saf-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>سعف.. نزرع الإبداع ونحصد التأثير</h1>
        <p>لأننا نؤمن بأن كل فكرة تُزرع بالشغف تُثمر نجاحاً مستداماً</p>
        <Link href={"/"} className={styles.know_us}>
          تعرف علينا
        </Link>
      </main>
      <FirstSection/>
      <SecondSection/>
      <OurServices/>
    </div>
  );
}
