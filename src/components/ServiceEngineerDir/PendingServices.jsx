import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const ServiceEngineer = () => {
    const num = 10;
    const navigate = useNavigate()
    const ref = useRef([])

    const tableData = [
        { id: ' S001', CustomerName: 'Alice Smith ', ServiceType: 'Installation ', Technician: 'John Doe ', ScheduledDate: '10/02/2025', Status: 'Pending ', },
        { id: ' S002', CustomerName: 'Bob Johnson  ', ServiceType: 'Repair  ', Technician: 'Jane Smith  ', ScheduledDate: '10/02/2025', Status: 'Pending ', },
        { id: ' S003', CustomerName: 'Charlie Brown ', ServiceType: 'Maintenance  ', Technician: 'Mike Lee  ', ScheduledDate: '10/02/2025', Status: 'Pending ', },
        { id: ' S004', CustomerName: 'Jane Cooper  ', ServiceType: 'Service check  ', Technician: 'Mike Brown ', ScheduledDate: '10/02/2025', Status: 'Pending ', },
    ]

    const navigateToviewDetail = () => {
        navigate('/viewDetail')
    }

    return (
        <>
            <div className="tableData flex flex-col bg-[#ffffff]">
            <div className="min-h-28 border-b"></div>
                <div className="tableData flex flex-col py-10 px-8">
                    <table className="table-auto w-full border-collapse">
                        <thead>
                            <tr className='border-b bg-[#EBF2F1]'>
                                <th className="px-4 pt-11 pb-3">Sr no. </th>
                                <th className="px-4 pt-11 pb-3">Customer Name </th>
                                <th className="px-4 pt-11 pb-3">Service Type </th>
                                <th className="px-4 pt-11 pb-3">Technician </th>
                                <th className="px-4 pt-11 pb-3">Scheduled Date </th>
                                <th className="px-4 pt-11 pb-3">Status</th>
                                <th className="px-4 pt-11 pb-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, index) => {
                                return <tr key={index} className={`${(index + 1) % 2 === 1 ? "bg-[#F5F5F5]" : ''}`}>
                                    <td className="px-4 py-6 text-center ">{items.id}</td>
                                    <td className="px-4 py-6 text-center ">{items.CustomerName}</td>
                                    <td className="px-4 py-6 text-center ">{items.ServiceType}</td>
                                    <td className={`px-4 py-6 text-center`} >{items.Technician}</td>
                                    <td className="px-4 py-6 text-center ">{items.ScheduledDate}</td>
                                    <td className="px-4 py-6 text-center ">{items.Status}</td>
                                    <td className="px-2 py-2 gap-3">
                                        <button ref={el => ref.current[index] = el} onClick={navigateToviewDetail} className="cursor-pointer font-bold text-md justify-center items-center flex">
                                         view details
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
