import React from 'react';
import { useNavigate } from 'react-router-dom';
import close from '../../assets/close.svg'
import logout from '../../assets/logout.png'
import maintainance from '../../assets/maintainance.png'
import tracking from '../../assets/tracking.png'
import location from '../../assets/location.png'
import plumber from '../../assets/plumber.png'

const ViewDetail = () => {
    const navigate = useNavigate()

    const navigateToTechnicianActivity = () => {
        navigate('/technicianActivity')
    }

    return (<>
        <div className="bg-white flex flex-col gap-4 px-4 py-2 rounded-sm h-screen">
            <div className="flex mx-6 items-center justify-between">
                <h1 className="font-semibold text-2xl tracking-wide">Technician Activity Timeline </h1>
                <button onClick={navigateToTechnicianActivity} className="relative left-6 cursor-pointer"> <img src={close} alt="" className="" /></button>
            </div>
            <div className="names flex flex-col mx-6 gap-3">
                <div className="name flex gap-16 mt-6">
                    <span className=" text-sm font-bold">Technician name </span>
                    <span className=" text-sm">John Doe </span>
                </div>
                <div className="skill flex gap-16">
                    <span className=" text-sm font-bold">Service Assigned</span>
                    <span className=" text-sm">Installation</span>
                </div>
            </div>
            <div className="mx-6 my-11 tracing flex flex-col gap-14">
                <div className="flex gap-4 items-center relative">
                    <img src={logout} alt="" className="size-10 rounded-full bg-[#7EC1B1] p-2" />
                    <div className="data flex-col flex items-start gap-1">
                        <span className="text-[#b5b5af] text-xs">09.30AM-</span>
                        <span className="text-sm font-bold">Logged in </span>
                    </div>
                    <div className="w-[1px] h-14 bg-[#8d8d8c] absolute left-5 top-10"></div>
                </div>
                <div className="maintainance flex gap-4 items-center relative">
                    <img src={maintainance} alt="" className="size-10 rounded-full bg-[#7EC1B1] p-2" />
                    <div className="data flex-col flex items-start gap-1">
                        <span className="text-[#b5b5af] text-xs">10.00 AM</span>
                        <span className="text-sm font-bold">Service Assigned</span>
                    </div>
                    <div className="w-[1px] h-14 bg-[#8d8d8c] absolute left-5 top-10"></div>
                </div>
                <div className="tracking flex gap-4 items-center relative">
                    <img src={tracking} alt="" className="size-10 rounded-full bg-[#7EC1B1] p-2" />
                    <div className="data flex-col flex items-start gap-1">
                        <span className="text-[#b5b5af] text-xs">10.30 AM</span>
                        <span className="text-sm font-bold">En route to the customer location</span>
                    </div>
                    <div className="w-[1px] h-14 bg-[#8d8d8c] absolute left-5 top-10"></div>
                </div>
                <div className="location flex gap-4 items-center relative">
                    <img src={location} alt="" className="size-10 rounded-full bg-[#7EC1B1] p-2" />
                    <div className="data flex-col flex items-start gap-1">
                        <span className="text-[#b5b5af] text-xs">11.00 AM</span>
                        <span className="text-sm font-bold">Arrived at service location</span>
                    </div>
                    <div className="w-[1px] h-14 bg-[#8d8d8c] absolute left-5 top-10"></div>
                </div>
                <div className="plumber flex gap-4 items-center relative">
                    <img src={plumber} alt="" className="size-10 rounded-full bg-[#7EC1B1] p-2" />
                    <div className="data flex-col flex items-start gap-1">
                        <span className="text-[#b5b5af] text-xs">11.10 AM</span>
                        <span className="text-sm font-bold">Service Started</span>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default ViewDetail;
