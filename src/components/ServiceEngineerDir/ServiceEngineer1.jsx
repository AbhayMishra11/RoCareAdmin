import React from 'react'
import { useNavigate } from 'react-router-dom';
import photo from '../../assets/photo.svg'

const ServiceEngineer1 = () => {
    const InputHere = ['Service Engineer Name', 'Service Engineer ID', 'Contact Number ', 'Email Address ', 'Service Type Provided ', 'Location ']
    const navigate = useNavigate()
    const navigateToEngineer2 = () => {
        navigate('/admin/serviceEngineer2')
    }
    return (
        <>
            <div className=" flex flex-col gap-4">
                <h1 className="mx-6 font-semibold text-sm tracking-wide">Add Personal Details</h1>
                <div className="inputDataHere flex flex-col gap-4 bg-white px-6 py-4">
                    {InputHere.map((items, index) => {
                        return <div className="flex flex-col gap-4">
                            <span className="font-semibold text-md tracking-wide">{items}</span>
                            <input type="text" className="px-4 py-2 shadow-sm shadow-[#00000040] w-full" placeholder='Enter' />
                        </div>
                    })}
                    <div className="profile-photo flex flex-col gap-4">
                        <span className="font-semibold text-md tracking-wide">Profile Photo</span>
                        <div className="relative">
                            <input
                                type="file"
                                name="photo"
                                id="photo"
                                className="opacity-0 absolute cursor-pointer bg-white"
                            />
                            <label
                                htmlFor="photo"
                                className="relative cursor-pointer px-4 py-2  border border-[#D1D1D1] rounded-lg  flex items-center justify-center w-36 h-36 flex-col"
                            >
                                <img src={photo} alt="Profile Preview" className="mr-2 w-8 h-8 my-4 rounded-full object-cover" />
                              <span className="text-xs text-gray-700"> Upload a photo</span>
                            </label>
                        </div>
                    </div>
                    <button onClick={navigateToEngineer2} className="cursor-pointer bg-[#7EC1B1] px-11 py-3 text-white w-fit rounded-md my-6 font-[600]">Continue</button>
                </div>
            </div>
        </>
    )
}

export default ServiceEngineer1