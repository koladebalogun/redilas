"use client";
import Preloader from "../components/Preloader";
import Link from "next/link";
import SideNavBar from "../components/navigation/SideNavBar";
import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Home() {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(".h1", 1, {
        opacity: 0,
        // delay: 4,
        y: 700,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });
      tl.from(".hero", 1, {
        opacity: 0,
        // delay: 0.2,
        y: 400,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="wrapper">

      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="container">
        <nav></nav>

        <div className="header">
          <div className="h1">R</div>
          <div className="h1">E</div>
          <div className="h1">D</div>
          <div className="h1">I</div>
          <div className="h1">L</div>
          <div className="h1">A</div>
          <div className="h1">S</div>
        </div>

        <div className="hero">
          <img src="/ab1.jpg" />
        </div>
      </div>
    </main>
  );
}
