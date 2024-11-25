import Image from "next/image";
import styles from "./styles/OurServices.module.css";

// icon

import digital_marketing from "@/assets/digital-marketing.png";
import Link from "next/link";

const list = [
  {
    key: 1,
    service: "خدمات التسويق الرقمي",
    list: [
      { title: "إدارة الحملات الإعلانية", describe: "" },
      { title: "تعزيز الحضور الرقمي", describe: "" },
      { title: "تحليل الأداء", describe: "" },
    ],
  },
  {
    key: 2,
    service: "إدارة حسابات التواصل الاجتماعي",
    list: [
      { title: "إستراتيجيات مدروسة", describe: "" },
      { title: "محتوى إبداعي", describe: "" },
      { title: "متابعة الأداء", describe: "" },
    ],
  },
  {
    key: 3,
    service: "الاستشارات التسويقية",
    list: [
      { title: "تحليل السوق والمنافسين", describe: "" },
      { title: "إدارة الميزانيات", describe: "" },
      { title: "استراتيجيات التواصل", describe: "" },
      { title: "توجيه الهوية التجارية", describe: "" },
    ],
  },
  {
    key: 4,
    service: "الخدمات الإنتاجية",
    list: [
      { title: "كتابة المحتوى", describe: "" },
      { title: "إنتاج الفيديو", describe: "" },
      { title: "التصوير الفوتوغرافي", describe: "" },
      { title: "التغطيات الإعلامية", describe: "" },
      { title: "الخدمات الإنتاجية الإبداعية", describe: "" },
    ],
  },
];

export default function OurServices() {
  return (
    <div className={styles.ourServices}>
      <h1>خدماتنا</h1>
      <p>
        في سعف، نزرع الإبداع في التسويق والإنتاج لنحصد تأثيزا يعزز حضور علامتك
        التجارية، ويحقق أهدافها بجودة واحترافية .
      </p>

      <div className={styles.serviceCardsList}>
        {/* card start */}
        {list.map((service)=>(
             <div key={service.key} className={styles.serviceCard}>
             <Image
               className={styles.icon}
               alt="icon"
               src={digital_marketing}
               width={100}
               height={100}
             />
             <p className={styles.title}>{service.service}</p>
             <ul>
                {service.list.map((i)=>(
                    <li key={i.title}>{i.title}</li>
                ))}
             </ul>
           </div>
        ))}
        
      </div>
        <Link href={"/"} className={styles.button}>للمزيد من التفاصيل</Link>
    </div>
  );
}
