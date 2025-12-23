import React, { useState } from "react";
import "./Gallery.css";

const images = [
  "src/assets/g4.jpg",
  "src/assets/g16.jpg",
  "src/assets/g17.jpg",
  "src/assets/g1.jpg",
  "src/assets/g2.jpg",
  "src/assets/g3.jpg",
  "src/assets/g5.jpg",
  "src/assets/g6.jpg",
  "src/assets/g7.jpg",
  "src/assets/g8.jpg",
  "src/assets/g9.jpg",
  "src/assets/g10.jpg",
  "src/assets/g11.jpg",
  "src/assets/g12.jpg",
  "src/assets/g13.jpg",
  // "src/assets/g14.jpg",
  "src/assets/g15.jpg",
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
