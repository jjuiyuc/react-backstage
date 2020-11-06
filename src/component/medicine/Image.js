import React, { useState } from "react";
import Modal from "react-modal";

const Image = ({ content, ...props }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div className="dialog image-dialog flex">
        <div className="image-wrapper">
          <img
            onClick={openModal}
            className="cursor-pointer"
            src={content}
            alt={content}
          />
        </div>
      </div>
      <Modal
        overlayClassName="image-modal-overlay"
        className="image-modal"
        isOpen={modalIsOpen}
      >
        <div onClick={closeModal} className="close-button cursor-pointer">
          X
        </div>
        <img
          onClick={closeModal}
          className="cursor-pointer"
          src={content}
          alt={content}
        />
      </Modal>
    </>
  );
};

export default Image;
