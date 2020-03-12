import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => (
  <ul>
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} webformatURL={webformatURL} />
    ))}
  </ul>
);

export default ImageGallery;
