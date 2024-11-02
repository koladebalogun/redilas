"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import style from "../app/styles/Servcies.module.css";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MobileServices = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);
    })();
  }, []);

  return (
    <div className={style.mobileWrapper}>
      <h3>About Us</h3>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="/ab1.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.4"
            >
              Pioneering the Future
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              We are committed to exploring new ideas, embracing change, and
              driving innovation to keep our solutions ahead of the curve.{" "}
              <br /> <br />
              Innovation is at the heart of our business, where every idea is
              encouraged and every voice is valued. We pursue new ways to solve
              challenges, improving value for our customers. <br /> <br />
              We believe that curiosity fuels progress. By asking questions and
              pushing boundaries, we develop solutions that redefine what’s
              possible.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="/ab2.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.4"
            >
              Creating Value with Every Interaction
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              Understanding our customers’ unique needs and challenges allows us
              to create solutions that truly resonate.
              <br />
              <br />
              Our goal is to consistently go above and beyond, delivering an
              exceptional customer experience every time. We listen, adapt, and
              respond to feedback to enhance every interaction.
              <br />
              <br />
              We build strong, trusting relationships with our customers,
              viewing each one as a partner in mutual success. Their feedback
              shapes our path forward, making them integral to our progress.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="/ab3.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.4"
            >
              Upholding Our Commitments
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              We are open and honest in every interaction. From our products to
              our promises, we maintain the highest standards of ethical
              behavior and transparent communication.
              <br />
              <br />
              We take responsibility for our decisions and actions, ensuring we
              meet our commitments. When mistakes happen, we own them and work
              to make things right.
              <br />
              <br />
              We treat everyone—customers, partners, employees, and
              communities—with fairness and respect, fostering a culture of
              inclusivity and ethical conduct.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className={style.mobile_hero}>
          <div className={style.mobile_hero_inner}>
            <img src="/ab4.jpg" />
            <div
              className={style.mobile_hero_header}
              data-scroll
              data-scroll-speed="0.4"
            >
              Building Trust Through Consistency
            </div>
          </div>
        </div>

        <div className={style.mobile_service_content}>
          <div className={style.mobile_service_content_inner}>
            <h3 data-scroll data-scroll-speed></h3>
            <p>
              Our customers can rely on us to deliver consistent quality, on
              time, every time. We are dedicated to maintaining high standards
              in everything we do.
              <br />
              <br />
              We anticipate challenges and respond proactively, ensuring our
              customers can rely on us even in uncertain times. Our commitment
              to stability supports them through every stage.
              <br />
              <br />
              We take pride in our work, maintaining a level of excellence that
              customers can trust, ensuring that we are a reliable partner
              through every challenge and opportunity.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MobileServices;
