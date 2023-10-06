import Image from "next/image";
import React from "react";

export default function PortfolioCard({ data }) {
  const { title, link, image } = data.fields;
  return (
    <div className="container">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <div className="card">
          <div className="card_image">
            <Image
              src={`https:${image.fields.file.url}`}
              width={300}
              height={300}
              quality={100}
            />
          </div>
          <div className="card_content">
            <h1>{title}</h1>
          </div>
        </div>
      </a>
    </div>
  );
}
