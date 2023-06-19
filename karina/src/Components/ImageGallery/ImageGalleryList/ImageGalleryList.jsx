import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGalleryList.module.scss";
import { images } from "../../../../public/images/images";

const ImageGallery = () => {
  // console.log(image);
  return (
    <ul className={styles.imageGallery}>
      {images.map((image, index) => (
        // console.log(index)

        <ImageGalleryItem
          key={index}
          path={image.path}
          alt={image.alt}
          // webformatUrl={el.webformatURL}
          // largeImageURL={el.largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
