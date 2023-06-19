import React from "react";
import styles from "./ImageWrapper.module.css";
import ImageGalleryList from "../ImageGalleryList/ImageGalleryList.jsx";
// import one from "../../../services/gallery/1.jpg";
// import two from "../../../services/gallery/2.jpg";

// const image = [one, two];
// import { images } from "../../../services";

const ImageWrapper = () => {
  // console.log(images);
  return (
    <div className={styles.wrapper}>
      <ImageGalleryList />
    </div>
  );
};

export default ImageWrapper;
