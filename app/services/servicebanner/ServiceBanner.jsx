"use client";
import { useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import gsap from "gsap";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const flow = useRef();
  let tl = gsap.timeline();
  
  
  useLayoutEffect(() => {
    console.log(flow.current);

    let ctx = gsap.context(() => {
      tl.to(flow.current, 1.5, {
        yPercent: -100,
      })
        .from(".image", 1.5, {
          xPercent: -10,
          yPercent: -10,
          scale: 1.3,
          delay: -1.6,
          ease: " power2.inOut",
        })

        .from(".intro1", 2, {
          opacity: 0,
          y: 40,
          ease: "power4.inOut",
          stagger: {
            amount: 0.5,
          },
        });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className={styles.img_container}>
      <div className={styles.mask}>
        <div className={styles.flow} ref={flow}></div>
        <img src="/ab2.jpg" alt="" className="image" />
        <div className={styles.intro_header}>
          <h2 className="intro1">Our</h2>
          <h1 className="intro1">Services</h1>
        </div>
      </div>
    </div>
  );
}
