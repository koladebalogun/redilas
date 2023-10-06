"use client";
import { useEffect } from "react";

// packages
import AOS from "aos";
import "aos/dist/aos.css";

// styles
import styles from "./style.module.css";

export default function AboutList({ data }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ color: "white" }} className={styles.wrapper}>
      <>
        {data.map((items, index) => (
          <div key={index}>
            <div className={styles.description} data-aos="fade-up">
              <p>{items.title}</p>
              <p>{items.content}</p>
              <hr className={styles.line} />
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
