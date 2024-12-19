import React from "react";
import Modal from "../../Modals/Modal";
import EnquiryForm from "./AddEnquiry";

const AddEnquiryModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <EnquiryForm setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default AddEnquiryModal;
