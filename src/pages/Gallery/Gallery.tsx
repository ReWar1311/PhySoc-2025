import React, { useState } from "react";
import "./Gallery.css";

const images = [
  "/assets/g4.jpg",
  "public/assets/g16.jpg",
  "public/assets/g17.jpg",
  "public/assets/g1.jpg",
  "public/assets/g2.jpg",
  "public/assets/g3.jpg",
  "public/assets/g5.jpg",
  "public/assets/g6.jpg",
  "public/assets/g7.jpg",
  "public/assets/g8.jpg",
  "public/assets/g9.jpg",
  "public/assets/g10.jpg",
  "public/assets/g11.jpg",
  "public/assets/g12.jpg",
  "public/assets/g13.jpg",
  // "src/assets/g14.jpg",
  "public/assets/g15.jpg",
];

const Gallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="gallery-section">
      <div className="gallery-box">
        <h2 className="gallery-title">Pics & Memos</h2>

        <div className="gallery-grid">
          {images.map((src, i) => (
            <div
              key={i}
              className="gallery-item"
              onClick={() => setActiveImage(src)}
            >
              <img src={src} alt="Gallery" />
              <div className="gallery-overlay">View</div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <span className="close">&times;</span>
          <img src={activeImage} alt="Enlarged" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
