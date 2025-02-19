import React from 'react';
import { useNavigate } from 'react-router-dom';
import close from '../../assets/close.svg'

const ViewDetail = () => {
    const navigate = useNavigate()

    const navigateToTechnicianActivity = () => {
        navigate('/pendingServices')
    }


    const detailData = [
        ['Name', 'Alice Smith '],
        ['Contact number', '123-456-7890'],
        ['Email', 'Alice@1234.com'],
        ['Location', '1234 Broadway, Apt 56, New York'],
        ['Scheduled date', '10/02/2025'],
        ['Technician Assigned', 'John Doe'],
        ['Technician Contact no.', '+12345678'],
        ['Service Type', 'Installation'],
        ['Service Description', 'Install RO System in the kitchen'],
        ['Current Status', 'Service Pending'],
    ];

    return (
        <div className="bg-white flex flex-col gap-4 px-4 py-2 rounded-sm h-screen">
          <div className="flex mx-6 items-center justify-between">
          <h1 className="font-semibold text-2xl tracking-wide">View Details</h1>
         <button onClick={navigateToTechnicianActivity} className="relative left-6 cursor-pointer"> <img src={close} alt="" className="" /></button>
          </div>
            <div className="mx-6 my-4 border border-[#C0C0C0] rounded-md flex flex-col gap-3">
                <h1 className="px-6 font-semibold text-lg tracking-wide py-2 border-b">Customer Details</h1>
                <div className="flex flex-col gap-6 px-6 py-2">
                    {detailData.map((items, index) => (
                        <div key={index} className="grid grid-cols-2 gap-3">
                            <span className="font-medium w-2/5">{items[0]}</span>
                            <span className='relative right-52'>{items[1]}</span>
                        </div>
                    ))}
                </div>
              <div className="mx-6 py-6 flex gap-4">
              <button className="border border-[#7EC1B1] bg-[#7EC1B1] text-white px-4 py-2 rounded-md cursor-pointer w-fit">Reschedule</button>
              <button onClick={navigateToTechnicianActivity} className="border border-[#7EC1B1] text-[#7EC1B1] px-4 py-2 rounded-md cursor-pointer w-fit">Cancel</button>
              </div>
            </div>
        </div>
    );
};

export default ViewDetail;
