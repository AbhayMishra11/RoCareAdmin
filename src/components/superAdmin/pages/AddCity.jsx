import React from 'react'

const AddCity = () => {
  return (
    <div className="h-screen  rounded-xl shadow-sm p-6 bg-white ">
    
      <h2 className="text-lg font-semibold text-gray-700 mb-2">City Name</h2>
      <input
        type="text"
        placeholder="Enter City Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 mb-5"
      />

      <h2 className="text-lg font-semibold text-gray-700 mb-2">City Status</h2>
      <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 mb-5">
        <option>Publish</option>
        <option>Draft</option>
      </select>

      <button className="bg-[#7EC1B1] text-white px-6 py-2 rounded-md hover:bg-[#25803D] transition duration-300">
        Add City
      </button>
   
  </div>
  )
}

export default AddCity
