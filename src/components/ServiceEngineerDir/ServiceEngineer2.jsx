import React from 'react'
import { useNavigate } from 'react-router-dom';


const ServiceEngineer2 = () => {
    const InputHere = [ 'Experience', 'Service Area/Zone', 'Date of joining']
    const navigate = useNavigate()
    const navigateToEngineer = () => {
        navigate('/serviceEngineer')
    }
    return (
        <>
            <div className=" flex flex-col gap-4">
                <h1 className="mx-6 font-semibold text-sm tracking-wide">Add Personal Details</h1>
                <div className="inputDataHere flex flex-col gap-6 bg-white px-6 py-4  min-h-screen">
                <div className="flex flex-col gap-4">
                            <span className="font-semibold text-md tracking-wide">Degree/Diploma Details</span>
                            <input type="text" className="px-4 py-2 shadow-sm shadow-[#00000040] w-full" placeholder='Enter' />
                        </div>
                <h1 className="font-semibold text-sm tracking-wide">Add Experience(optional)</h1>
                    {InputHere.map((items, index) => {
                        return <div className="flex flex-col gap-4">
                            <span className="font-semibold text-md tracking-wide">{items}</span>
                            <input type="text" className="px-4 py-2 shadow-sm shadow-[#00000040] w-full" placeholder='Enter' />
                        </div>
                    })}
                    <button onClick={navigateToEngineer} className="cursor-pointer bg-[#7EC1B1] px-11 py-3 relative top-44 text-white w-fit rounded-md my-6 font-[600]">Add</button>
                </div>
            </div>
        </>
    )
}

export default ServiceEngineer2