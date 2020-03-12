import React from "react";

const ImageGalleryItem = ({ webformatURL }) => (
  <li>
    <img src={webformatURL} alt="" />
  </li>
);

export default ImageGalleryItem;
