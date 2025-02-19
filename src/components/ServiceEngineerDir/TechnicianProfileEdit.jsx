import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePhoto from '../../assets/profilePhoto.svg';
import pen from '../../assets/pen.svg';

const TechnicianProfileEdit = () => {
  const navigate = useNavigate();
  const InputHere = ['Service Engineer ID', 'Contact Number', 'Email Address', 'Service Type Provided', 'Location ', 'Designation '];
  const initialData = ['T001', '+12345678', 'John@1234', 'Installation,Maintenance', 'New York', 'Service Engineer'];

  const [data, setData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    details: initialData
  });

  const handleChange = (index, event) => {
    const newData = [...data.details];
    newData[index] = event.target.value;
    setData({ ...data, details: newData });
  };

  const handleFirstNameChange = (event) => {
    setData({ ...data, firstName: event.target.value });
  };

  const handleLastNameChange = (event) => {
    setData({ ...data, lastName: event.target.value });
  };

  const navigateToServiceEngineer = () => {
    navigate('/admin/serviceEngineer');
  };

  return (
    <>
      <div className=" flex flex-col gap-4">
        <h1 className="mx-6 font-bold text-lg tracking-wide">Edit Technician Profile</h1>
        <div className="inputDataHere flex flex-col gap-4 bg-white px-6 py-4">
          <div className="profile-photo flex flex-col gap-4">
            <div className="relative w-24 h-24 rounded-full mb-6">
                <img src={profilePhoto} alt="Profile Preview" className="mr-2 my-4 rounded-full object-cover" />
                <img src={pen} alt="Profile Preview" className="absolute mr-2 my-4 rounded-full object-cover -right-5 cursor-pointer top-16 p-1 bg-[#86C5B5]" />
            </div>
          </div>
          <div className="flex gap-20">
            <div className="firstName flex flex-col gap-2">
              <span className="font-semibold text-md tracking-wide">First name</span>
              <input type="text" className="px-4 py-2 shadow-sm shadow-[#00000040] text-[#8d8d8c] w-[35vw]" value={data.firstName} onChange={handleFirstNameChange} />
            </div>
            <div className="LastName flex flex-col gap-2">
              <span className="font-semibold text-md tracking-wide">Last name</span>
              <input type="text" className="px-4 py-2 shadow-sm shadow-[#00000040] text-[#8d8d8c] w-[35vw]" value={data.lastName} onChange={handleLastNameChange} />
            </div>
          </div>
          {InputHere.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <span className="font-semibold text-md tracking-wide">{item}</span>
              <input type="text" className="px-4 py-2 shadow-sm shadow-[#00000040] text-[#8d8d8c] w-full" value={data.details[index]} onChange={(event) => handleChange(index, event)} />
            </div>
          ))}
          <button onClick={navigateToServiceEngineer} className="cursor-pointer bg-[#7EC1B1] px-11 py-3 text-white w-fit rounded-md my-6 font-[600]">Save</button>
        </div>
      </div>
    </>
  );
};

export default TechnicianProfileEdit;
