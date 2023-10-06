"use client";
import React, { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Preloader() {
  const tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(".loader-wrapper", 2, {
        scale: 0.9,
        ease: "power1.inOut",
      })

      .from(".loader", 1, {
        top: "100%",
        ease: "power3.inOut",
      })

      .to(
        ".loader-wrapper, .pre-loader",
        0.2,
        {
          opacity: 0,
          display: "none",
          ease: "power3.inOut",
          delay: 2.1,
        },
        "-=1"
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="pre-loader block">
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      </div>
    </div>
  );
}
