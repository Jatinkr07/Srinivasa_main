import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ClientForm from "./ClientForm";

export default function ClientTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pageSize, setPageSize] = useState(12);
  const [pageIndex, setPageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy Data
  const data = [
    {
      id: 1,
      name: "John Doe",
      phone: "+1 123456789",
      email: "john@example.com",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "+1 987654321",
      email: "jane@example.com",
      address: "456 Elm St",
    },
    {
      id: 3,
      name: "Alice Johnson",
      phone: "+1 111222333",
      email: "alice@example.com",
      address: "789 Maple St",
    },
    {
      id: 4,
      name: "John Doe",
      phone: "+1 123456789",
      email: "john@example.com",
      address: "123 Main St",
    },
    {
      id: 5,
      name: "Jane Smith",
      phone: "+1 987654321",
      email: "jane@example.com",
      address: "456 Elm St",
    },
    {
      id: 6,
      name: "Alice Johnson",
      phone: "+1 111222333",
      email: "alice@example.com",
      address: "789 Maple St",
    },
    {
      id: 7,
      name: "John Doe",
      phone: "+1 123456789",
      email: "john@example.com",
      address: "123 Main St",
    },
    {
      id: 8,
      name: "Jane Smith",
      phone: "+1 987654321",
      email: "jane@example.com",
      address: "456 Elm St",
    },
    {
      id: 9,
      name: "Alice Johnson",
      phone: "+1 111222333",
      email: "alice@example.com",
      address: "789 Maple St",
    },
  ];

  const filteredData = data.filter(
    (row) =>
      row.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
      row.phone.includes(globalFilter) ||
      row.email.toLowerCase().includes(globalFilter.toLowerCase()) ||
      row.address.toLowerCase().includes(globalFilter.toLowerCase())
  );

  // Paginated Data
  const paginatedData = filteredData.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  const totalPages = Math.ceil(filteredData.length / pageSize);

  return (
    <div className="bg-gray-200 w-full min-h-screen py-8">
      <h1 className="text-5xl font-normal text-left pl-14 mb-8 text-gray-700">
        Clients
      </h1>
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-md shadow-md">
        {/* Search, Show Entries, and Add New Button */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="border-2 rounded-full px-2 py-2"
            >
              <option value="12">Show 12</option>
              <option value="20">Show 20</option>
              <option value="24">Show 24</option>
            </select>
            <input
              type="text"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              className="border-2 rounded-full px-3 py-2"
              placeholder="Search by name..."
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-red-700 text-white px-4 py-2 border-red-700 border-2 rounded-full hover:bg-white hover:text-red-700"
          >
            + Add New
          </button>
        </div>

        {/* Table */}
        <div className="rounded-md border">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr className="border-b">
                <th className="px-4 py-2 font-semibold border-b border-r">
                  S.No
                </th>
                <th className="px-4 py-2 font-semibold border-b border-r">
                  Name
                </th>
                <th className="px-4 py-2 font-semibold border-b border-r">
                  Phone
                </th>
                <th className="px-4 py-2 font-semibold border-b border-r">
                  Email
                </th>
                <th className="px-4 py-2 font-semibold border-b">Address</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, index) => (
                <tr
                  key={row.id}
                  className="border-b last:border-b-0 text-center hover:bg-gray-200"
                >
                  <td className="px-4 py-2 border-r border-b">
                    {pageIndex * pageSize + index + 1}
                  </td>
                  <td className="px-4 py-2 border-r border-b">{row.name}</td>
                  <td className="px-4 py-2 border-r border-b">{row.phone}</td>
                  <td className="px-4 py-2 border-r border-b">{row.email}</td>
                  <td className="px-4 py-2 border-b">{row.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div>
            Showing {pageIndex * pageSize + 1} to{" "}
            {Math.min((pageIndex + 1) * pageSize, filteredData.length)} of{" "}
            {filteredData.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setPageIndex(Math.max(0, pageIndex - 1))}
              disabled={pageIndex === 0}
              className="border px-3 py-1 rounded disabled:opacity-50 flex items-center"
            >
              <FaArrowLeft className="mr-2" />
            </button>
            <span className="font-semibold">
              {pageIndex + 1} / {totalPages}
            </span>
            <button
              onClick={() =>
                setPageIndex(Math.min(totalPages - 1, pageIndex + 1))
              }
              disabled={pageIndex >= totalPages - 1}
              className="border px-3 py-1 rounded disabled:opacity-50 flex items-center"
            >
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Modal for Adding New Client */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-md shadow-lg w-full sm:w-11/12 lg:w-8/12 xl:w-6/12 mx-auto">
              <ClientForm closeModal={() => setIsModalOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
