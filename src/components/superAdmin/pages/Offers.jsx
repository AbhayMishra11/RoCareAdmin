
import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

const offers = [
  { id: 1, service: "Water Purifier Installation", subtitle: "20% off on first service", category: "Best Offers", status: "Published" },
  { id: 2, service: "Water Purifier Uninstallation", subtitle: "20% off on first service", category: "Best Offers", status: "Published" },
  { id: 3, service: "Repair", subtitle: "Free required spare parts on first service", category: "Best Offers", status: "Published" },
  { id: 4, service: "Other Services", subtitle: "10% off on online payments", category: "Best Offers", status: "Published" },
  { id: 5, service: "Silver AMC Plan", subtitle: "Get 40% off on 2 year plan", category: "Best Offers", status: "Published" },
  { id: 6, service: "Gold AMC Plan", subtitle: "Get 40% off on 2 year plan", category: "Best Offers", status: "Published" },
  { id: 7, service: "Platinum AMC Plan", subtitle: "Get 40% off on 2 year plan", category: "Best Offers", status: "Published" },
];

const Offers = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-200">
            <tr className="text-left text-gray-700">
              <th className="p-2 border">Sr. No.</th>
              <th className="p-2 border">Services</th>
              <th className="p-2 border">Offer Subtitle</th>
              <th className="p-2 border">Main Offer Category</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, index) => (
              <tr key={offer.id} className="text-gray-700 even:bg-gray-100">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{offer.service}</td>
                <td className="p-2 border">{offer.subtitle}</td>
                <td className="p-2 border">{offer.category}</td>
                <td className="p-2 border">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                    {offer.status}
                  </span>
                </td>
                <td className="p-2 border flex space-x-2">
                  <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    <FaTrash />
                  </button>
                  <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-600 text-sm">Showing 1 to 10 of 30 Entries</p>
        <div className="flex space-x-2">
          <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Previous</button>
          <button className="bg-gray-300 px-3 py-1 rounded">1</button>
          <button className="bg-gray-300 px-3 py-1 rounded">2</button>
          <button className="bg-gray-300 px-3 py-1 rounded">3</button>
          <button className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
