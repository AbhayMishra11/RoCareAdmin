import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import viewmore from '../../assets/viewmore.svg'

const ServiceEngineer = () => {
    const num = 10;
    const navigate = useNavigate()
    const ref=useRef([])

    const tableData = [
        { id:' T001', name: 'John Doe ', Status: 'Online ', AssignedJob: '5', CompletedJob: '4', Location: 'New York '},
        { id:' T002', name: 'Jane Smith', Status: 'Online ', AssignedJob: '3', CompletedJob: '2', Location: 'Brooklyn '},
        { id:' T004', name: 'Mike Johnson', Status: 'In-service', AssignedJob: '2', CompletedJob: '1', Location: 'Brooklyn '},
    ]

    const navigateToTechnicianActivity = () => {
        navigate('/admin/technicianActivity')
    }

    return (
        <>
            <div className="tableData flex flex-col bg-[#ffffff] mt-20">
                <div className="tableData flex flex-col py-10 px-8">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr className='border-b bg-[#EBF2F1]'>
                                <th className="px-4 pt-11 pb-3">Service Engineer ID</th>
                                <th className="px-4 pt-11 pb-3">Name </th>
                                <th className="px-4 pt-11 pb-3">Status </th>
                                <th className="px-4 pt-11 pb-3">Assigned Job </th>
                                <th className="px-4 pt-11 pb-3">Completed Job </th>
                                <th className="px-4 pt-11 pb-3">Location </th>
                                <th className="px-4 pt-11 pb-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 1 ? "bg-[#F5F5F5]" : ''}`}>
                                    <td className="px-4 py-2 text-center ">{items.id}</td>
                                    <td className="px-4 py-2 text-center ">{items.name}</td>
                                    <td className="px-4 py-2 text-center ">{items.Status}<br></br>{items.skill2}</td>
                                    <td className="px-4 py-2 text-center ">{items.AssignedJob}</td>
                                    <td className={`px-4 py-2 text-center`} >{items.CompletedJob}</td>
                                    <td className="px-4 py-2 text-center ">{items.Location}</td>
                                    <td className="px-2 py-2 justify-center items-center flex gap-3">
                                        <button ref={el=>ref.current[index]=el} onClick={navigateToTechnicianActivity} className="cursor-pointer">
                                            <img src={viewmore} alt="" className=" p-2 rounded-md " />
                                        </button>
                                    </td>
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
