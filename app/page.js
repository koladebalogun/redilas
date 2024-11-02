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
      tl.to(".site-header", 2, {
        opacity: 1,
        delay: 5.5,
        y: -40,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="container">
      <Preloader />
      <SideNavBar />
      <div className="site-content">
        <div className="video-container" id="video-container">
          <video autoPlay loop muted playsInline className="video">
            <source src="/video.mp4" />
          </video>
        </div>

        <div className="site-header">
          <div className="site-header-title">
            <h1>Welcome to Redilas</h1>
          </div>

          <div className="site-header-content">
            <p>Where challenges are translated into seamless solutions</p>

            <Link href="/services">
              <button>Check our services</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
