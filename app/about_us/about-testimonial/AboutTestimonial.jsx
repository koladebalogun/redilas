"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";


export default function AboutTestimonial({ testimonials }) {
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
          {testimonials.map((item, index) => (
            <motion.div className={styles.item} key={index}>
              <motion.div className={styles.item_inner}>
                <h4>{documentToReactComponents(item.fields.testimony)}</h4>

                <div className={styles.author}>
                  <div>
                    <img
                      src={`https:${item.fields.authorImage.fields.file.url}`}
                      alt=""
                    />
                  </div>
                  <div>
                    <p>{item.fields.author}</p>
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
