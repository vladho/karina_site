import React, { useState, useEffect } from "react";
import styles from "./Modal.module.css";
// import { createPortal } from "react-dom";

// const modalRoot = document.querySelector("#modal-root");

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }

//   handleKeyDown = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClose();
//     }
//   };

//   onBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     console.log(this.props);
//     return createPortal(
//       <div className={styles.overlay} onClick={this.onBackdropClick}>
//         <div className={styles.modal}> {this.props.children} </div>
//       </div>,
//       modalRoot
//     );
//   }
// }

// export default Modal;

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}> {children} </div>
    </div>
  );
};

export default Modal;
