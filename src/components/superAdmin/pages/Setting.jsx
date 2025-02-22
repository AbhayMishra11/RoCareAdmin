import { useState } from "react";
import logoImage from '../../../assets/logo.png'
export default function Setting() {
  const [logo, setLogo] = useState(logoImage);
  
  return (
    <div className="absolute bg-white shadow-md rounded-lg overflow-hidden"
        style={{ width: "1092px", height: "905px",  left: "324px", padding: "24px", gap: "24px" }}>
      <h2 className="text-lg font-semibold mb-4">Set New Company Logo</h2>
      <div className="flex items-center space-x-4 mb-6 border border-gray-300">
      <div className="flex  space-x-4 mb-6">
      <div className="absolute mb-6   rounded-md p-7 flex items-center">
        <input
          type="file"
          className=" bg-gray-400 h-10 p-2 rounded w-55"
          onChange={(e) => setLogo(e.target.files[0])}
        />  No File Uploaded
        <span className="text-gray-500"></span>
      </div> 
        <div className=' border-b-2 ml-196 border-gray-400'>
          <img className='py-4 md:ml-3 h-[73px]' src={logo} alt='Company Logo' />
        </div>
      </div>

        <span className="text-gray-500"></span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
        <h2 className="text-lg font-semibold mb-4">Set Currency</h2>
       
          <select className="border p-3 border-gray-300 rounded w-full">
            <option>INR</option>
          </select>
        </div>
        <div>
        <h2 className="text-lg font-semibold mb-4">Select Time Zone</h2>
          <select className="border p-3 border-gray-300 rounded w-full">
            <option>Asia/Kolkata</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        {["User", "Engineer", "Partner"].map((role) => (
          <>
            <div key={`${role}-app-id`}>
            <h2 className="text-lg font-semibold mb-4">{role} App One Signal App Id</h2>
              {/* <label className="block text-gray-700">{role} App One Signal App Id</label> */}
              <input type="text" className="border p-3 border-gray-300 rounded w-full" placeholder="XXXXXXXXXXXX" />
            </div>
            <div key={`${role}-api-key`}>
            <h2 className="text-lg font-semibold mb-4">{role} App One Signal Rest API Key</h2>
              {/* <label className="block text-gray-700">{role} App One Signal Rest API Key</label> */}
              <input type="text" className="border p-3 border-gray-300 rounded w-full" placeholder="XXXXXXXXXXXX" />
            </div>
          </>
        ))}
      </div>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold">About Us</h3>
        <p className="text-gray-600 p-1  border border-gray-300 gap-4 text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur. Sit lorem senectus blandit eros vitae blandit at nibh
          Lorem ipsum dolor sit amet consectetur. Sit lorem senectus blandit eros vitae blandit at nibh
          Lorem ipsum dolor sit amet consectetur. Sit lorem senectus blandit eros vitae blandit at nibh
          Lorem ipsum dolor sit amet consectetur. Sit lorem senectus blandit eros vitae blandit at nibh
          Lorem ipsum dolor sit amet consectetur. Sit lorem senectus blandit eros vitae blandit at nibh
          Lorem ipsum dolor sit amet consectetur. Sit lorem senectus blandit eros vitae blandit at nibh
          Lorem ipsum dolor sit amet consectetur. Sit lorem senectus blandit eros vitae blandit at nibh
          Lorem ipsum dolor sit amet consectetur. Sit lorem senectus blandit eros vitae blandit at nibh
          Lorem ipsum dolor sit amet consectetur. Sit lorem senectus blandit eros vitae blandit at nibh
          Lorem ipsum dolor sit amet consectetur. Sit lorem senectus blandit eros vitae blandit at nibh
          
          
        </p>
      </div>
    </div>
  );
}
