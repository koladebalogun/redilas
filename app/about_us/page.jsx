import React from "react";
import AboutBanner from "./aboutbanner/AboutBanner";
import AboutList from "./aboutlist/AboutList";
import AboutTestimonial from "./about-testimonial/AboutTestimonial";
import data from '../../data/about.json'


export default async function page() {
  const about = data.about_us
  return (
    <div>
      <AboutBanner />
      <AboutList data={about} />
      <AboutTestimonial />
    </div>
  );
}
