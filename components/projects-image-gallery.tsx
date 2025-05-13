"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = Array.from({ length: 10 }, (_, i) => i).map((i) => ({
  original: `/projects/${i}.jpg`,
  originalAlt: `Project ${i}`,
  thumbnail: `/projects/${i}.jpg`,
}));

const ProjectsImageGallery = () => {
  return (
    <ImageGallery
      items={images}
      showThumbnails={true}
      showFullscreenButton={true}
      showPlayButton={false}
    />
  );
};

export default ProjectsImageGallery;
