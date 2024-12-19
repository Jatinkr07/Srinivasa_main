import Modal from "../../Modals/Modal";
import CaseStudiesForm from "./CaseStudiesForm";

const AddCaseStudies = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        className={"max-w-screen-xl m-auto"}
      >
        <CaseStudiesForm setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

export default AddCaseStudies;
