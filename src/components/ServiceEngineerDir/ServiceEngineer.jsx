import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Delete from '../../assets/delete.svg'
import edit from '../../assets/edit.svg'

const ServiceEngineer = () => {
    const num = 10;
    const navigate = useNavigate()
    const [search, setsearch] = useState('')
    const options = Array.from({ length: num }, (_, index) => ({
        value: index + 1,
        label: (index + 1).toString()
    }));

    const tableData = [
        { id: 1, name: 'John', skill: 'Installation,',skill2:'Maintenance', contact: '+12345678', status: 'Active', pendingRequest: 2 },
        { id: 2, name: 'John', skill: 'Installation,',skill2:'Maintenance', contact: '+12345678', status: 'On Leave', pendingRequest: 0 },
        { id: 3, name: 'John', skill: 'Installation,',skill2:'Maintenance', contact: '+12345678', status: 'Active', pendingRequest: 1},
        { id: 4, name: 'John', skill: 'Installation,',skill2:'Maintenance', contact: '+12345678', status: 'Active', pendingRequest: 0 },
        { id: 5, name: 'John', skill: 'Installation,',skill2:'Maintenance', contact: '+12345678', status: 'Active', pendingRequest: 1 },
    ]

    const handleSearch=(e)=>{
        setsearch(e.target.value)
    }

    const navigateToEngineer1 = () => {
        navigate('/serviceEngineer1')
    }

    const navigateToEdit = () => {
        navigate('/technicianProfileEdit')
    }

    return (
        <>
            <div className="topBar flex bg-[#ffffff] items-center justify-between shadow-sm p-4 my-1">
                <div className="leftSide flex gap-8 items-center">
                    <div className="left flex gap-3 items-center">
                        <span>Show</span>
                        <select name="" id="" className="px-2 py-1 border rounded">
                            {options.map((item, index) => (
                                <option key={index} value={item.value} className='px-2'>
                                    {item.label}
                                </option>
                            ))}
                        </select>
                        <span>Entries</span>
                    </div>
                    <div className="right flex gap-3 items-center">
                        <span className="">Search</span>
                        <input onChange={handleSearch} type="text" value={search} className="border border-[#bbbbba] px-2 py-1 rounded-sm" />
                    </div>
                </div>
                <div className="rightSide">
                    <button onClick={navigateToEngineer1} className="px-6 py-2 text-sm text-white bg-[#8d8d8c] rounded-md cursor-pointer">Add new technician</button>
                </div>
            </div>
            <div className="tableData flex flex-col bg-[#ffffff]">
            <div className="tableData flex flex-col py-10 px-8">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr className='border-b bg-[#EBF2F1]'>
                            <th className="px-4 pt-11 pb-3">Sr no.</th>
                            <th className="px-4 pt-11 pb-3">Service Engineer name</th>
                            <th className="px-4 pt-11 pb-3">Service provided</th>
                            <th className="px-4 pt-11 pb-3">Contact no.</th>
                            <th className="px-4 pt-11 pb-3">Status</th>
                            <th className="px-4 pt-11 pb-3">Pending request</th>
                            <th className="px-4 pt-11 pb-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((items, index) => {
                            return <tr key={index} className={`${(index+1)%2===1?"bg-[#F5F5F5]":''}`}>
                                <td className="px-4 py-2 text-center ">{items.id}</td>
                                <td className="px-4 py-2 text-center ">{items.name}</td>
                                <td className="px-4 py-2 text-center ">{items.skill}<br></br>{items.skill2}</td>
                                <td className="px-4 py-2 text-center ">{items.contact}</td>
                                <td className={`px-4 py-2 text-center`} ><span className={` ${items.status==='Active'?'bg-[#85FF7A]':'border'} px-4 py-1 rounded-md`}>{items.status}</span></td>
                                <td className="px-4 py-2 text-center ">{items.pendingRequest}</td>
                                <td className="px-2 py-2 justify-center items-center flex gap-3">
                                    <button className="cursor-pointer">
                                        <img src={Delete} alt="" className="bg-[#C17E7F] p-2 rounded-md " />
                                    </button>
                                    <button onClick={navigateToEdit} className="cursor-pointer">
                                        <img src={edit} alt="" className="bg-[#007AFF] p-2 rounded-md" />
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
