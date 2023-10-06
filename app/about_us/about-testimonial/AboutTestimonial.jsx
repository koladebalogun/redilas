"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.css";

const List = [
  {
    name: "Kolade Balogun",
    remarks:
      "Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip,Lorem ipsum dolor sit amet, consectetur adip",
    src: "/ab2.jpg",
  },
  {
    name: "Kolade Balogun",
    remarks: "Lorem ipsum dolor sit amet, consectetur adip",
    src: "/ab2.jpg",
  },
  {
    name: "Kolade Balogun",
    remarks: "Lorem ipsum dolor sit amet, consectetur adip",
    src: "/ab2.jpg",
  },
  {
    name: "Kolade Balogun",
    remarks: "Lorem ipsum dolor sit amet, consectetur adip",
    src: "/ab2.jpg",
  },
  {
    name: "Kolade Balogun",
    remarks: "Lorem ipsum dolor sit amet, consectetur adip",
    src: "/ab2.jpg",
  },
];

export default function AboutTestimonial() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Testimonials</h1>
      <motion.div className={styles.carousel} ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className={styles.inner_carousel}
        >
          {List.map((item, index) => (
              <motion.div className={styles.item} key={index}>
                  <motion.div className={styles.item_inner}>
                      <h4>{item.remarks}</h4>
                      
                      <div className={styles.author}>
                          <div>
                              <img src={item.src} alt="" />
                          </div>
                          <div>
                              <p>{item.name}</p>
                          </div>
                      </div>
                  </motion.div>
             
            </motion.div>
          ))}
          {/* <motion.div className={styles.item}>
            <img src="/ab2.jpg" alt="" />
          </motion.div>
          <motion.div className={styles.item}>
            <img src="/ab2.jpg" alt="" />
          </motion.div>
          <motion.div className={styles.item}>
            <img src="/ab2.jpg" alt="" />
          </motion.div>
          <motion.div className={styles.item}>
            <img src="/ab2.jpg" alt="" />
          </motion.div>
          <motion.div className={styles.item}>
            <img src="/ab2.jpg" alt="" />
          </motion.div> */}
        </motion.div>
      </motion.div>
    </div>
  );
}
