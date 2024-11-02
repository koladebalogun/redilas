"use client";
import { useEffect } from "react";
import Intro from "../../components/Servicecomponents/Intro";
import Services from "../../components/Servicecomponents/Services";

const Service = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <>
      <main>
        <Intro />
        <Services />
      </main>
    </>
  );
};

export default Service;
