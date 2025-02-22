import { useState } from "react";
import logoImage from '../../../assets/user.png'
const Profile = () => {
  const [formData, setFormData] = useState({
    username: "Kristin Watson",
    designation: "Designation",
    password: "KristinWatson@123",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   const [user, setLogo] = useState(logoImage);

  return (
    <div  className="absolute bg-white shadow-md rounded-lg overflow-hidden"
    style={{ width: "1092px", height: "905px", top: "96px", left: "324px", padding: "24px", gap: "24px" }}
>
      {/* Profile Image */}
      <div className="flex justify-center mr-228">
        <div className="relative">
          <img
            src={user}
            alt="Profile"
            className="w-20 h-20 rounded-full mr-10 border-2 border-gray-300"
            
          />
          <div className="absolute bottom-0 left-7 bg-white border rounded-full p-1 shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89-5.26a2 2 0 012.22 0L21 8M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Form Fields */}
      <div>
        {/* <label className="block text-gray-600 font-semibold">User Name</label> */}
        <h3 className="text-xl font-semibold mb-4">User Name</h3>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      <div className="mt-4">
      <h3 className="text-xl font-semibold mb-4">Designation</h3>
        {/* <label className="block text-gray-600 font-semibold">Designation</label> */}
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          className="w-full px-4 border-gray-300 py-2 border rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      <div className="mt-4">
      <h3 className="text-xl font-semibold mb-4">Password</h3>
        {/* <label className="block text-gray-600 font-semibold">Password</label> */}
        <input
          type="kritsinwatson@123"
          name=""
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* Update Profile Button */}
      <button className="mt-6 w-50 bg-green-300 text-white py-2 rounded-md hover:bg-green-500">
        Update Profile
      </button>
    </div>
  );
};

export default Profile;
