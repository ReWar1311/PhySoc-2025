import React, { useState } from "react";
import "./Gallery.css";

const images = [
  "/assets/g4.jpg",
  "/assets/g16.jpg",
  "/assets/g17.jpg",
  "/assets/g1.jpg",
  "/assets/g2.jpg",
  "/assets/g3.jpg",
  "/assets/g5.jpg",
  "/assets/g6.jpg",
  "/assets/g7.jpg",
  "/assets/g8.jpg",
  "/assets/g9.jpg",
  "/assets/g10.jpg",
  "/assets/g11.jpg",
  "/assets/g12.jpg",
  "/assets/g13.jpg",
  // "src/assets/g14.jpg",
  "/assets/g15.jpg",
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
