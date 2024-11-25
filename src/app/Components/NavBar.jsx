"use client";
import { useEffect, useState } from "react";
import styles from "./styles/Navbar.module.css";
import Link from "next/link";

// const liks = [
//   { href: "/", title: "الرئيسية" },
//   { href: "/about", title: "عن سعف" },
//   { href: "/servers", title: "خدماتنا" },
//   { href: "/projects", title: "مشاريعنا" },
//   { href: "/contact", title: "تواصل معنا" },
// ];
const liks = [
  { key: 1, href: "/", title: "الرئيسية" },
  { key: 2, href: "/", title: "عن سعف" },
  { key: 3, href: "/", title: "خدماتنا" },
  { key: 4, href: "/", title: "مشاريعنا" },
  { key: 5, href: "/", title: "تواصل معنا" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav role="navigation" className={styles.navbar}>
      <div>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className={`${styles.span} ${isOpen ? styles.close : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`${styles.menu} ${isOpen ? styles.isOpen : ""}`}>
          {liks.map((like) => {
            return (
              <li key={like.key} onClick={() => setIsOpen((prev) => !prev)}>
                <Link href={like.href}>
                  <label htmlFor="menuCheckbox">{like.title}</label>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <h1 className={styles.logo}>سعف</h1>
    </nav>
  );
}
