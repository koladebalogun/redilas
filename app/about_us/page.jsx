import React from "react";
import AboutBanner from "./aboutbanner/AboutBanner";
import AboutList from "./aboutlist/AboutList";
import AboutTestimonial from "./about-testimonial/AboutTestimonial";

async function getAbout() {
  const res = await fetch("http://localhost:5000/about_us", {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}


export default async function page() {
  const data = await getAbout();
  return (
    <div>
      <AboutBanner />
      <AboutList data={data} />
      <AboutTestimonial />
    </div>
  );
}
