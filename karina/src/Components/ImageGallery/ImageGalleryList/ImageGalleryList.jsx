import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "./ImageGalleryList.module.scss";

const ImageGallery = ({ image }) => {
  // console.log(image);
  return (
    <ul className={styles.imageGallery}>
      {image.map((el, index) => (
        // console.log(index)

        <ImageGalleryItem
          key={index}
          src={el.path}
          // webformatUrl={el.webformatURL}
          // largeImageURL={el.largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
