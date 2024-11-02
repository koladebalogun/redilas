"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import style from "../styles/Servcies.module.css";
import Image from "next/image";
// import Navbar from "@/components/Navbar";
import MobileServices from "@/components/MobileServices";

const services = () => {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      console.log(locomotiveScroll);
    })();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const girlImage = images.firstElementChild;
      const boyImage = images.lastElementChild;

      const headlineFirst = content.children[0].children[0];

      const contentP = content.children[1];
      const contentButton = content.children[2];

      gsap.to(app, 0, { css: { visibility: "visible" } });

      tl.from(girlImage, 1.2, { y: 40, ease: "Power3.easeOut" }, "Start")
        .from(
          girlImage.firstElementChild,
          2,
          { scale: 1.6, ease: "Power3.easeOut" },
          0.2
        )
        .from(boyImage, 1.4, { y: 1280, ease: "Power3.easeOut" }, 0.2)
        .from(
          boyImage.firstElementChild,
          2,
          { scale: 1.6, ease: "Power3.easeOut" },
          0.2
        );

      //Content Animation
      tl.from(
        [headlineFirst.children],
        1,
        {
          y: 44,
          ease: "Power3.easeOut",
          delay: 0.8,
        },
        0.15,
        "Start"
      )
        .from(contentP, 1, { y: 20, opacity: 0, ease: "Power3.easeOut" }, 1.4)
        .from(
          contentButton,
          1,
          { y: 20, opacity: 0, ease: "Power3.easeOut" },
          1.6
        );
    });

    return () => ctx.revert();
  }, [tl]);

  return (
    <>
      {/* <Navbar /> */}
      <div className={style.hero} ref={(el) => (app = el)}>
        <div className={style.container}>
          <div className={style.hero_inner}>
            <div className={style.hero_content}>
              <div
                className={style.hero_content_inner}
                ref={(el) => (content = el)}
              >
                <h1 data-scroll data-scroll-speed=".4">
                  <div className={style.hero_content_line}>
                    <div className="hero-content-line-inner">About Us</div>
                  </div>
                </h1>
                <p>
                  In today&#39;s fast-paced company climate, technology is the
                  backbone of success—but the complexity of managing IT systems
                  frequently generates issues that impede growth, productivity,
                  and security. At REDILAS, we specialize in translating these
                  IT challenges into seamless solutions, allowing businesses to
                  focus on their primary goals without being concerned about
                  technological barriers.
                  <br />
                  <br />
                  Our company&#39;s aim is straightforward: to provide
                  customized, dependable, and innovative IT solutions that
                  enable businesses to prosper in an increasingly digital
                  environment.
                </p>
                <div className={style.btn_row}>
                  <button className={style.explore_button}>
                    Explore
                    <div className={style.arrow_icon}>
                      <Image src="/arrow-right.svg" fill={true} alt="row" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={style.hero_images}>
              <div
                ref={(el) => (images = el)}
                className={style.hero_images_inner}
              >
                <div
                  className={`${style.hero_image} ${style.girl}`}
                  data-scroll
                  data-scroll-speed=".3"
                >
                  <Image src="/ab1.jpg" alt="girl" fill={true} />
                </div>
                <div className={`${style.hero_image} ${style.boy}`} data-scroll>
                  <Image src="/ab2.jpg" alt="boy" fill={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class={style.section}>
        <div className={style.inner_section}>
          <div className={style.section_content}>
            <h3 data-scroll data-scroll-speed="0.2">
              Pioneering the Future
            </h3>
            <p data-scroll data-scroll-speed="0.3">
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
          <Image
            src="/ab3.jpg"
            width={550}
            height={400}
            className={style.inner_section_image}
            data-scroll
            data-scroll-speed="0.1"
          />
        </div>

        <div className={style.inner_section}>
          <Image
            src="/ab4.jpg"
            width={550}
            height={400}
            className={style.inner_section_image}
            data-scroll
            data-scroll-speed="0.1"
          />
          <div className={style.section_content}>
            <h3 data-scroll data-scroll-speed="0.2">
              Creating Value with Every Interaction
            </h3>
            <p data-scroll data-scroll-speed="0.3">
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

        <div className={style.inner_section}>
          <div className={style.section_content}>
            <h3 data-scroll-speed="0.2">Upholding Our Commitments</h3>
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
          <Image
            src="/ab5.jpg"
            width={550}
            height={400}
            className={style.inner_section_image}
            data-scroll
            data-scroll-speed="0.1"
          />
        </div>

        <div className={style.inner_section}>
          <Image
            src="/ab6.jpg"
            width={550}
            height={400}
            className={style.inner_section_image}
            data-scroll
            data-scroll-speed="0.1"
          />
          <div className={style.section_content}>
            <h3 data-scroll data-scroll-speed="0.2">
              Building Trust Through Consistency
            </h3>
            <p data-scroll data-scroll-speed="0.3">
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

       
      </section>
      <MobileServices />
    </>
  );
};

export default services;
