import React from "react";
import Modal from "../../Modals/Modal";
import EditCaseStudies from "./EditCaseStudies";

const EditCaseModal = ({ isOpen, setIsOpen, editItem, setIsLoading }) => {
  console.log(editItem);
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} className={"max-w-screen-xl m-auto justify-between"}>
        <EditCaseStudies
          setIsOpen={setIsOpen}
          setIsLoading={setIsLoading}
          editItem={editItem}
        />
      </Modal>
    </>
  );
};

export default EditCaseModal;
