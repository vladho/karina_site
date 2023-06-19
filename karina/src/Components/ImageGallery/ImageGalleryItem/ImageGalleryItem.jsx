import React, { useState } from "react";
import styles from "./ImageGalleryItem.module.css";
import Modal from "../../Modal/Modal";
// import Modal from "@/Modal";

import Image from "next/image";
import { images } from "../../../../public/images/images";

const ImageGalleryItem = ({ path, alt }) => {
  // console.log(images);
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <li className={styles.imageGalleryItem}>
      {/* <img
        src={src}
        // className={styles.src}
        onClick={openModal}
        alt=""
      /> */}
      {/* {images.map((image, index) => ( */}
      <Image
        // key={index}
        src={path}
        alt={alt}
        onClick={openModal}
        className={styles.image}
        // fill
        width={1440}
        height={1800}
        // loading="lazy"
        priority={true}
      />
      {/* ))} */}

      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <Image src="/images/one.jpg" width={100} height={100} alt="" />
        </Modal>
      )}
    </li>
  );
};

export default ImageGalleryItem;

// class ImageGalleryItem extends Component {
//   state = {
//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState((state) => ({
//       showModal: !state.showModal,
//     }));
//   };

//   render() {
//     // console.log(Image);
//     // console.log(this.props.image);
//     return (
//       <li className={styles.imageGalleryItem}>
//         <img
//           src={this.props.src}
//           className={styles.src}
//           onClick={this.toggleModal}
//           alt=""
//         />

//         {this.state.showModal && (
//           <Modal onClose={this.toggleModal}>
//             <img src={this.props.src} height={"100%"} width={"100%"} alt="" />
//           </Modal>
//         )}
//       </li>
//     );
//   }
// }

// export default ImageGalleryItem;
