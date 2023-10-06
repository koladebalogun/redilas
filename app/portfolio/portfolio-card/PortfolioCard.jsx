"use client"
import { useEffect } from "react";

import Image from "next/image";
import styles from "./style.module.css";

// packages
import AOS from "aos";
import "aos/dist/aos.css";

export default function PortfolioCard({ data }) {
  const { title, link, image } = data.fields;
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className={styles.card_container}>
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <div className={styles.card_inner} data-aos="fade-up">
          <div className={styles.card_image}>
            <Image
              src={`https:${image.fields.file.url}`}
              width={300}
              height={300}
              quality={100}
            />
          </div>
          <div className={styles.card_content}>
            <h4>{title}</h4>
          </div>
        </div>
      </a>
    </div>
  );
}
