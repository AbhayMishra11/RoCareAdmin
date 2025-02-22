import { useState } from "react";
import { FaMapMarkerAlt, FaTrash } from "react-icons/fa";

export default function Coustmer() {
  const [users] = useState(
    Array.from({ length: 9 }, (_, i) => ({
      id: i + 1,
      name: "XXXXXXXXXX",
      email: "XXXXXXXXXX",
      mobile: "XXXXXXXX",
      status: "inactive",
    }))
  );
  const [entries, setEntries] = useState(10);
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="flex items-center space-x-2">
          <span>Show</span>
          <select
            className="border p-1 rounded"
            value={entries}
            onChange={(e) => setEntries(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <span>Entries</span>
        </div>
        <div>
          <label className="mr-2">Search:</label>
          <input
            type="text"
            className="border p-1 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div  
        className="absolute bg-white shadow-md rounded-lg overflow-hidden"
        style={{
          width: "1092px",
          height: "792px",
          top: "208px",
          left: "324px",
          padding: "24px",
          gap: "24px",
        }}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-700">
              <th className="p-3 border">SL. No. ↑↓</th>
              <th className="p-3 border">Full Name ↑↓</th>
              <th className="p-3 border">Email Address</th>
              <th className="p-3 border">Mobile Number</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="p-3 border">{String(user.id).padStart(2, "0")}</td>
                <td className="p-3 border">{user.name}</td>
                <td className="p-3 border">{user.email}</td>
                <td className="p-3 border">{user.mobile}</td>
                <td className="p-3 border">
                  <button className="px-4 py-2 bg-green-300 text-gray-700 rounded-md">
                    Make Active
                  </button>
                </td>
                <td className="p-3 border flex space-x-2">
                  <button className="p-2 bg-blue-500 text-white rounded-md">
                    <FaMapMarkerAlt />
                  </button>
                  <button className="p-2 bg-red-400 text-white rounded-md">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-4 border-t">
          <span className="text-gray-600">Showing 1 to 10 of 30 Entries</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-gray-600">
              Previous
            </button>
            <button className="px-3 py-1 bg-green-300 text-gray-700 rounded-md">
              1
            </button>
            <button className="px-3 py-1 border rounded-md text-gray-600">
              2
            </button>
            <button className="px-3 py-1 border rounded-md text-gray-600">
              3
            </button>
            <button className="px-3 py-1 border rounded-md text-gray-600">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
