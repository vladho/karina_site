import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";
import Modal from "../../Modal/Modal";

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    console.log(this.props.src);
    // console.log(this.props.image);
    return (
      <li className={styles.imageGalleryItem}>
        <img
          src={this.props.src}
          className={styles.src}
          onClick={this.toggleModal}
          alt=""
        />

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.props.src} height={"100%"} width={"100%"} alt="" />
          </Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
