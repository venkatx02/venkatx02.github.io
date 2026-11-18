import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../styles.css";

const importAll = (context) =>
  context.keys().map((key) => ({
    src: context(key),
    alt: key.replace("./", "").replace(".jpg", "")
  }));

const photos = importAll(
  require.context("../assets/gallery", false, /\.jpg$/i)
);

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery">
      <h2 className="section-title">Street Photography</h2>

      <p className="gallery-description">
        Moments, people, and stories from the streets.
      </p>

      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <button
            key={i}
            className="gallery-item"
            onClick={() => setIndex(i)}
            aria-label={`Open photograph ${i + 1}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={Math.max(index, 0)}
        slides={photos}
      />
    </section>
  );
};

export default Gallery;