import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Addpro from "../../Addpro";
import { useNavigate } from "react-router-dom";

export default function Testimonial() {
  const navigate = useNavigate();
    
  const TestimonialFrom = () => {
    navigate('/TestimonialForm'); // Ensure this route matches your actual path
  };

  const [users] = useState([
    { id: 1, name: "Jane Cooper", comment: "Lorem ipsum dolor sit amet", status: "Published", image: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 2, name: "Devon Lane", comment: "Lorem ipsum dolor sit amet", status: "Published", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 3, name: "Jenny Wilson", comment: "Lorem ipsum dolor sit amet", status: "Published", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 4, name: "Savannah Nguyen", comment: "Lorem ipsum dolor sit amet", status: "Published", image: "https://randomuser.me/api/portraits/women/3.jpg" },
    { id: 5, name: "Jacob Jones", comment: "Lorem ipsum dolor sit amet", status: "Published", image: "https://randomuser.me/api/portraits/men/2.jpg" }
  ]);

  return (
    <div>
      <Addpro />
      <div className="absolute bg-white shadow-md rounded-lg overflow-hidden"
        style={{ width: "1092px", height: "792px", top: "208px", left: "324px", padding: "24px", gap: "24px" }}>
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-700">
              <th className="p-3">SL. No. ↑↓</th>
              <th className="p-3">Full Name ↑↓</th>
              <th className="p-3">Image</th>
              <th className="p-3">Comment</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="p-3 ">{String(user.id).padStart(2, "0")}</td>
                <td className="p-3 ">{user.name}</td>
                <td className="p-3  flex justify-center">
                  <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full" />
                </td>
                <td className="p-3">{user.comment}</td>
                <td className="p-3">
                  <span className="px-4 py-1 text-green-600 border border-green-400 rounded-full">
                    {user.status}
                  </span>
                </td>
                <td className="p-3  flex space-x-2">
                  <button onClick={TestimonialFrom} className="p-2 bg-blue-500 text-white rounded-md">
                    <FaEdit />
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
          <span className="text-gray-600">Showing 1 to 5 of 5 Entries</span>
          <div className="flex space-x-2">
            <button className="px-3 py-1 border rounded-md text-gray-600">Previous</button>
            <button className="px-3 py-1 bg-green-300 text-gray-700 rounded-md">1</button>
            <button className="px-3 py-1 border rounded-md text-gray-600">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}



// import { useState } from "react";

// export default function AddTestimonial() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     image: null,
//     comment: "",
//     status: "Publish",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//   };

//   return (
//     <div
//       className="absolute bg-white shadow-md rounded-lg overflow-hidden"
//       style={{ width: "1092px", height: "905px", top: "96px", left: "324px", padding: "24px", gap: "24px" }}
//     >
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//         {/* Full Name */}
//         <div className=" p-3 rounded">
//           <label className="block font-semibold">Full Name</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             placeholder="Enter Full Name"
//             className="w-full border border-gray-300 p-2 rounded"
//           />
//         </div>

//         {/* Image Upload */}
//         <div className=" p-3 rounded">
//           <label className="block font-semibold">Image</label>
//           <div className="flex items-center border rounded border-gray-300">
//             <input
//               type="file"
//               onChange={handleFileChange}
//               className="hidden border border-gray-300  rounded"
//               id="file-upload"
//             />
//              <button
//               type="button"
//               className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
//             >
//               Choose File
//             </button>
//             <span className="ml-2   text-gray-500">
//               {formData.image ? formData.image.name : "No File Uploaded"}
//             </span>
//           </div>
//         </div>

//         {/* Comment */}
//         <div className=" p-3 rounded">
//           <label className="block font-semibold">Comment</label>
//           <textarea
//             name="comment"
//             value={formData.comment}
//             onChange={handleChange}
//             placeholder="Write Comment"
//             className="w-full border border border-gray-300 p-2 rounded h-40"
//           />
//         </div>

//         {/* Product Status */}
//         <div className=" p-3 rounded">
//           <label className="block font-semibold">Product Status</label>
//           <select
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             className="w-full border border-gray-300 p-2 rounded"
//           >
//             <option value="Publish">Publish</option>
//             <option value="Draft">Draft</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <div className=" p-3 rounded">
//           <button type="submit" className="bg-green-300 text-teal-50 px-4 py-2 rounded">
//             Add Testimonial
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
