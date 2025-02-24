import React from 'react'
import { useNavigate } from 'react-router-dom'

function CancelledOrder() {
  const navigate=useNavigate()

const gotoPreview=()=>{
  navigate('/CancelledOrderPreview')
}
    const orders = [
        { id: 6010, date: "01-02-2026",  status: "Cancelled", hireType: "Random" },
        { id: 6008, date: "01-02-2026",  status: "Cancelled", hireType: "Random" },
        { id: 6007, date: "01-02-2026",  status: "Cancelled", hireType: "Random" },
        { id: 6006, date: "01-02-2026",  status: "Cancelled", hireType: "Random" },
        { id: 6005, date: "01-02-2026",  status: "Cancelled", hireType: "Random" },
        { id: 6004, date: "01-02-2026",  status: "Cancelled", hireType: "Random" },
        { id: 6003, date: "31-01-2026",  status: "Cancelled", hireType: "Random" },
        { id: 6002, date: "31-01-2026",  status: "Cancelled", hireType: "Random" },
        { id: 6001, date: "31-01-2026",  status: "Cancelled", hireType: "Random" },
      ];
  return (
    <div className="flex flex-col justify-between items-center"  >
        {/* <div className="flex justify-between items-center p-4 border-b space-x-4"> */}
        {/* <div className="flex items-center  justify-between space-x-2 min-w-full"> */}
        <div className="flex justify-between min-w-full p-4 border-b">
      {/* Entries Dropdown */}
      <div className="flex items-center space-x-2">
        <label htmlFor="entries" className="text-sm">
          Show
        </label>
        <select
          id="entries"
          className="border p-1 rounded text-sm"
          defaultValue="10"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span className="text-sm">Entries</span>
      </div>

      {/* Search Box */}
      <div className="flex items-center space-x-2">
        <label htmlFor="search" className="text-sm">
          Search:
        </label>
        <input
          id="search"
          type="text"
          className="border p-1 rounded text-sm"
          placeholder="Search..."
        />
      </div>
    </div>
      <div className="p-4  min-w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-200">
            <tr className="text-left text-gray-700">
              <th className="p-2 border">Sr. No.</th>
              <th className="p-2 border">Order Id</th>
              <th className="p-2 border">Order Date</th>
              {/* <th className="p-2 border">Service Partner Name</th> */}
              {/* <th className="p-2 border">Status</th> */}
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Hire Type</th>
              <th className="p-2 border">Preview Data</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className="text-gray-700 even:bg-gray-100">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{order.id}</td>
                <td className="p-2 border">{order.date}</td>
                {/* <td className="p-2 border">{order.partner}</td> */}
                <td className="p-2 border">{order.status}</td>
                <td className="p-2 border">{order.hireType}</td>
                {/* <td className="p-2 border">{order.credit}</td> */}
                <td className="p-2 border">
                  <button onClick={gotoPreview} className="bg-teal-400 text-white px-3 py-1 rounded hover:bg-teal-500">
                    Preview
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default CancelledOrder;