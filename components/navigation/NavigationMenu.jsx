"use client";
import styles from "./style.module.css";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

export default function NavigationMenu() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const tl = gsap.timeline();
  const navRef = useRef();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.to(navRef.current, 1, {
        opacity: 1,
        delay:4,
        ease: "power4.inOut",
        // stagger: {
        //   amount: 0.5,
        // },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header} ref={navRef}>
          <Link href="/">
            <Image src="/logo.jpg" width={120} height={40} />
          </Link>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
