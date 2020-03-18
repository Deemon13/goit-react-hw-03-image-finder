import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

const ImageGallery = ({ images }) => (
  <ImageGalleryList>
    {images.map(({ id, webformatURL }) => (
      <ImageGalleryItem key={id} webformatURL={webformatURL} />
    ))}
  </ImageGalleryList>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  )
};

export default ImageGallery;
