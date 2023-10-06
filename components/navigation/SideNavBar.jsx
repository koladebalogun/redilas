"use client";
import React, { useLayoutEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function SideNavBar() {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.to(".clipper-left", 2, {
        delay: 2.8,
        clipPath: "inset(0 100% 0 0)",
        ease: "power4.inOut",
      })
        .to(".clipper-right", 2, {
          clipPath: "inset(0 0 0 100%)",
          ease: "power4.inOut",
        })

        .from(".sidebar-nav > *, .site-nav > *", 1, {
          opacity: 0,
          x: 40,
          ease: "power4.inOut",
          stagger: {
            amount: 0.5,
          },
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="sidebar-nav">
        <div className="logo">
          <Link href="#">PrimeCare</Link>
        </div>
      </div>
      <div className="clipper-left">
        <div className="loader-text">PRIMECARE</div>
      </div>
      <div className="clipper-right">
        <div className="loader-text">PROPERTIES</div>
      </div>
    </>
  );
}
