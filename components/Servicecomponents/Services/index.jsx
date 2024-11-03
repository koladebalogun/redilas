"use client";
import React, { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import styles from "./style.module.css";

const List = [
  {
    title: "Managed IT Services",
    content: [
      "Proactive monitoring and management of IT infrastructure to minimize downtime.",
      "Regular maintenance, troubleshooting, and updates to keep systems optimized.",
      "Tailored support packages offering scalability and round-the-clock support.",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    content: [
      "Comprehensive security assessments to identify vulnerabilities.",
      "Implementation of firewalls, antivirus, intrusion detection, and secure access.",
      "Data protection and compliance consulting (e.g., GDPR, HIPAA).",
    ],
  },
  {
    title: "Digital Transformation Consulting",
    content: [
      "Solutions like CRM, ERP, and business intelligence to improve efficiency.",
      "Roadmap development for digitalization, covering process automation and new technologies.",
      "Strategy and implementation for transforming legacy systems.",
    ],
  },
  {
    title: "Network Solutions & Infrastructure",
    content: [
      "Design and deployment of reliable, secure networks to support organizational needs.",
      "Regular network monitoring, troubleshooting, and maintenance.",
      "Upgrades and scalability planning as business grows.",
    ],
  },
  {
    title: " Software Development & Custom Solutions",
    content: [
      "Full-cycle software development from planning to deployment and maintenance.",
      "Custom solutions (web, mobile, or desktop applications) based on client requirements.",
      "API integration and system modernization for seamless operations.",
    ],
  },
  {
    title: "IT Consulting & Strategy",
    content: [
      "Advisory services to help businesses align IT strategies with organizational goals.",
      "Risk assessment and budgeting to maximize IT investment ROI.",
      "Training and knowledge transfer for in-house teams.",
    ],
  },
  {
    title: "Disaster Recovery & Backup Solutions",
    content: [
      "Development and testing of disaster recovery plans.",
      "Implementation of backup solutions to ensure business continuity.",
      "Quick recovery and resilience-building strategies to minimize data loss.",
    ],
  },
  {
    title: "IoT & Edge Computing Solutions",
    content: [
      "IoT integration for industries like manufacturing, healthcare, and retail.",
      "Edge computing for real-time data processing closer to the data source.",
      "Maintenance and scaling of IoT systems for optimized performance.",
    ],
  },
];

export default function index() {
  return (
    <>
      <div style={{ color: "white" }} className={styles.wrapper}>
        <>
          {List.map((items, index) => (
            <AnimatedText key={index}>
              <div>
                <p>{items.title}</p>
                <ul>
                  {items.content.map((point, i) => (
                    <li key={i} className={styles.list}>{point}</li>
                  ))}
                </ul>
                <hr className={styles.line} />
              </div>
            </AnimatedText>
          ))}
        </>
        <h4 className={styles.subtext}>
          We recognize that each organization has distinct demands and issues,
          which is why we provide a variety of services geared to meet the
          various IT obstacles that businesses confront.
        </h4>
      </div>
    </>
  );
}

function AnimatedText({ children }) {
  const text = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=400px bottom",
        },
        opacity: 0,
        left: "-200px",
        ease: "power3.Out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <h3 ref={text} className={styles.description}>
      {children}
    </h3>
  );
}
