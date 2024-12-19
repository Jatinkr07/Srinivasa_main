import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AddEnquiryModal from "../Components/Enquiry/AddEnquiryModal";

const Enquiries = () => {
  const [contacts, setContacts] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editItem, setEditItem] = useState("");

  const handleEdit = (item) => {
    setEditItem(item);
    setIsEdit(true);
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_Backend_url}/admin/delete-enquiry/${id}`,
        {}
      );
      //   console.log(data,'DTAA')
      toast.success(data?.message);
      setContacts(data?.enquiries); // Update the state with the new contacts list
    } catch (error) {
      toast.error("Failed to delete contact.");
    }
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_Backend_url}/admin/get-enquiries`
        );
        setContacts(data?.enquiries);
      } catch (error) {
        toast.error("Failed to fetch contacts.");
      }
    };
    fetchContacts();
  }, []);

  return (
    <>
      {isAdd && <AddEnquiryModal isOpen={isAdd} setIsOpen={setIsAdd} />}
      {isEdit && (
        <EditCaseModal
          isOpen={isEdit}
          setIsOpen={setIsEdit}
          editItem={editItem}
        />
      )}
      <div className="p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Enquiries</h1>
          <button
            onClick={() => setIsAdd(true)}
            className="bg-green-500 p-2 text-white rounded"
          >
            Add New
          </button>
        </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-2 px-4 text-left border border-gray-300">
                S.No
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Name
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Phone
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Email
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Service
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Comments
              </th>
              <th className="py-2 px-4 text-left border border-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          {contacts?.length !== 0 ? (
            <tbody className="text-gray-600 text-sm font-light">
              {contacts.map((contact, index) => (
                <tr
                  key={contact._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-1 px-4 text-left border border-gray-300">
                    {index + 1}
                  </td>
                  <td className="py-1 px-4 text-left border border-gray-300">
                    {contact.Name}
                  </td>
                  <td className="py-1 px-4 text-left border border-gray-300">
                    {contact.Phone}
                  </td>
                  <td className="py-1 px-4 text-left border border-gray-300">
                    {contact.Email}
                  </td>
                  <td className="py-1 px-4 text-left border border-gray-300">
                    {contact.Service}
                  </td>
                  <td className="py-1 px-4 text-left border border-gray-300">
                    {contact.Comments}
                  </td>
                  <td className="py-1 px-4 text-left border border-gray-300">
                    <button
                      onClick={() => handleEdit(contact)}
                      className="hidden text-blue-500 hover:text-blue-700 mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="7" className="text-center py-4">
                  <h1 className="text-xl font-extrabold">No Data Found</h1>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Enquiries;
