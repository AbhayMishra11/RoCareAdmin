import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceEngineer = () => {
    const num = 10;
    const ref=useRef([])
    const navigate = useNavigate()
    const navigateTorealTimeActivity = () => {
        navigate('/admin/technicianActivity/realTimeActivity')
    }
  
    const tableData = [
        { id:'S001', name: 'John Doe ', Login: '09.30 AM', Servingpending: '2', Action:"Track "},
        { id:' S002', name:'Jane Smith', Login: 'Absent', Servingpending: '0',Action:"Track "},
        { id:' S003', name: 'Mike Lee', Login: '09.30 AM', Servingpending: '3', Action:"Track "},
        { id:' S003', name: 'Mike Brown', Login: '09.30 AM', Servingpending: '3', Action:"Track "},
    ]

 
    return (
        <>
              <h1 className="mx-6 my-7 font-bold text-2xl  tracking-wide">Real-time technician activity logs</h1>
            <div className="tableData flex flex-col bg-[#ffffff] mt-10 ">
                <div className="tableData flex flex-col py-10 px-8 w-[85%]">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr className='border-b bg-[#EBF2F1]'>
                                <th className="px-4 pt-11 pb-3">Sr no.</th>
                                <th className="px-4 pt-11 pb-3">Technician </th>
                                <th className="px-4 pt-11 pb-3">Log in </th>
                                <th className="px-4 pt-11 pb-3">Serving pending </th>
                                <th className="px-4 pt-11 pb-3">Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 1 ? "bg-[#F5F5F5]" : ''}`}>
                                    <td className="px-4 py-6 text-center ">{items.id}</td>
                                    <td className="px-4 py-6 text-center ">{items.name}</td>
                                    <td className="px-4 py-6 text-center ">{items.Login}<br></br>{items.skill2}</td>
                                    <td className="px-4 py-6 text-center ">{items.Servingpending}</td>
                                    <td onClick={navigateTorealTimeActivity} className={`px-4 py-6 text-center font-bold cursor-pointer`} >{items.Action}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
                <div className="pageSwitch flex items-center justify-end gap-3 mx-6 pb-6">
                    <button className="border border-[#7EC1B1] text-[#7EC1B1] px-4 py-2 rounded-md cursor-pointer">Previous</button>
                    <button className="text-[#f6f6f6] px-4 py-2 rounded-md bg-[#7EC1B1] cursor-pointer">1</button>
                    <button className="text-[#f6f6f6] px-4 py-2 rounded-md bg-[#7EC1B1] cursor-pointer">2</button>
                    <button className="border border-[#7EC1B1] text-[#7EC1B1] px-4 py-2 rounded-md cursor-pointer">Next</button>
                </div>
            </div>
        </>
    );
};

export default ServiceEngineer;
