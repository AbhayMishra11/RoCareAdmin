import React from "react";
import Customer from "../../../assets/Customer.png"
import Technician from "../../../assets/Technician.png"
import Partner from "../../../assets/Partner.png"
import Orders from "../../../assets/Orders.png"
import Path from "../../../assets/Path.png"
import Shape from "../../../assets/Shape.png"
import ServiceBookingGraph from "./serviceBookingGraph";
import CustomerSatisfaction from "./CustomerSatisfactionChart";
import SalesRevenueChart from "./RevenueGraph";
import SalesAnalyticsChart from "./SalesAnalytics";
import TechnicianPerformanceChart from "./TechnicianPerformance";
import TrendChart from "./TrendChart";

const Dashboard = () => {
    return (
        <div className="flex flex-col bg-gray-100 p-6 gap-y-10 ">
            {/*Row 1-Four Cards */}
            <div className="w-full flex justify-between gap-x-5 h-[180px]">
                {/*Card-1 */}
                <div className="w-[350px] flex flex-col gap-8 p-5 bg-white rounded-2xl font-semibold">
                    <div className="flex justify-between">
                        <div className="">
                            <h3 className=" text-xl">Total Customer</h3>
                            <p className="text-2xl font-bold">95,46,779</p>
                        </div>
                        <div className="flex bg-[#7373E5]/25 w-[64px] h-[64px] justify-center rounded-2xl px-2 py-3">
                            <img src={Customer} alt="" />
                        </div>
                    </div>
                    <div className="flex">
                        <img src={Path} alt="" className="pr-3" />
                        <p className="text-[#7EC1B1]">9.7%</p>
                        <p className="text-gray-500 pl-1">from past month</p>
                    </div>
                </div>
                {/*Card-2 */}
                <div className="w-[350px] flex flex-col gap-8 p-5 bg-white rounded-2xl font-semibold">
                    <div className="flex justify-between ">
                        <div className="">
                            <h3 className=" text-xl">Total Technician</h3>
                            <p className="text-2xl font-bold">95,46,779</p>
                        </div>
                        <div className="flex bg-[#FEC53D]/25 w-[64px] h-[64px] justify-center rounded-2xl px-2 py-3">
                            <img src={Technician} alt="" />
                        </div>
                    </div>
                    <div className="flex">
                        <img src={Path} alt="" className="pr-3" />
                        <p className="text-[#7EC1B1]">9.7%</p>
                        <p className="text-gray-500 pl-1">from past month</p>
                    </div>
                </div>
                {/*Card-3 */}
                <div className="w-[350px] flex flex-col gap-8 p-5 bg-white rounded-2xl font-semibold">
                    <div className="flex justify-between ">
                        <div className="">
                            <h3 className=" text-xl">Total Partner</h3>
                            <p className="text-2xl font-bold">95,46,779</p>
                        </div>
                        <div className="flex bg-[#FF9066]/25 w-[64px] h-[64px] justify-center rounded-2xl px-2 py-3">
                            <img src={Partner} alt="" />
                        </div>
                    </div>
                    <div className="flex">
                        <img src={Path} alt="" className="pr-3" />
                        <p className="text-[#7EC1B1]">9.7%</p>
                        <p className="text-gray-500 pl-1">from past month</p>
                    </div>
                </div>
                {/*Card-4 */}
                <div className="w-[350px] flex flex-col gap-8 p-5 bg-white rounded-2xl font-semibold">
                    <div className="flex justify-between ">
                        <div className="">
                            <h3 className=" text-xl">Total Orders</h3>
                            <p className="text-2xl font-bold">95,46,779</p>
                        </div>
                        <div className="flex bg-[#4AD991]/25 w-[64px] h-[64px] justify-center rounded-2xl px-2 py-3">
                            <img src={Orders} alt="" />
                        </div>
                    </div>
                    <div className="flex">
                        <img src={Path} alt="" className="pr-3" />
                        <p className="text-[#7EC1B1]">9.7%</p>
                        <p className="text-gray-500 pl-1">from past month</p>
                    </div>
                </div>
            </div>
            {/*Second row */}
            <div className="flex justify-center w-full gap-x-10 h-[400px]">
                <ServiceBookingGraph />
                <CustomerSatisfaction satisfactionPercentage={85} />

            </div>
            {/*Third row */}
            <div className="flex justify-center w-full gap-x-10 h-[400px]">
                <SalesRevenueChart />
                <SalesAnalyticsChart />
            </div>
            {/*fourth row */}
            <div className="w-full justify-between flex gap-5">
                {/* Customer Card */}
                <div className="w-[450px] flex flex-col items-center justify-center bg-white  p-7 shadow-lg rounded-lg">
                    <h1 className="w-full text-xl mb-6 text-left">Customers</h1>
                    {/* Circle with 4 smaller circles */}
                    <div className="relative flex justify-center items-center">
                        {/* Main Circle */}
                        <div className="rounded-full border-14 border-[#C0D2F0] h-42 w-42 flex justify-center items-center">
                            {/* Smaller Circles at x, y axis ends */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4880FF] h-4 w-5"></div> {/* Top Circle */}
                            <div className="absolute right-2 top-1/2 transform translate-x-1/2 -translate-y-1/2 rounded-full  bg-[#4880FF] h-5 w-4"></div> {/* Right Circle */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-[#4880FF] h-4 w-5"></div> {/* Bottom Circle */}
                            <div className="absolute left-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full  bg-[#4880FF] h-5 w-4"></div> {/* Left Circle */}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="w-full flex justify-center gap-x-12 mt-8">
                        <div>
                            <p className="text-xl">21,223</p>
                            <div className="flex gap-3 items-center justify-center">
                                <div className='rounded-full h-3 w-3 bg-[#4880FF]'></div>
                                <div>New Customers</div>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl">21,223</p>
                            <div className="flex gap-3 items-center justify-center">
                                <div className='rounded-full h-3 w-3 bg-[#C0D2F0]'></div>
                                <div>Repeated</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partner Card */}
                <div className="w-[450px] flex flex-col items-center justify-center bg-white  p-7 shadow-lg rounded-lg">
                    <h1 className="w-full text-xl mb-6 text-left">Partners</h1>
                    {/* Circle with 4 smaller circles */}
                    <div className="relative flex justify-center items-center">
                        {/* Main Circle */}
                        <div className="rounded-full border-14 border-[#C0D2F0] h-42 w-42 flex justify-center items-center">
                            {/* Smaller Circles at x, y axis ends */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4880FF] h-4 w-5"></div> {/* Top Circle */}
                            <div className="absolute right-2 top-1/2 transform translate-x-1/2 -translate-y-1/2 rounded-full  bg-[#4880FF] h-5 w-4"></div> {/* Right Circle */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-[#4880FF] h-4 w-5"></div> {/* Bottom Circle */}
                            <div className="absolute left-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full  bg-[#4880FF] h-5 w-4"></div> {/* Left Circle */}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="w-full flex justify-center gap-x-12 mt-8">
                        <div>
                            <p className="text-xl">21,223</p>
                            <div className="flex gap-3 items-center justify-center">
                                <div className='rounded-full h-3 w-3 bg-[#4880FF]'></div>
                                <div>New Partners</div>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl">21,223</p>
                            <div className="flex gap-3 items-center justify-center">
                                <div className='rounded-full h-3 w-3 bg-[#C0D2F0]'></div>
                                <div>Repeated</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technician Card */}
                <div className="w-[450px] flex flex-col items-center justify-center bg-white  p-7 shadow-lg rounded-lg">
                    <h1 className="w-full text-xl mb-6 text-left">Technicians</h1>
                    {/* Circle with 4 smaller circles */}
                    <div className="relative flex justify-center items-center">
                        {/* Main Circle */}
                        <div className="rounded-full border-14 border-[#C0D2F0] h-42 w-42 flex justify-center items-center">
                            {/* Smaller Circles at x, y axis ends */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4880FF] h-4 w-5"></div> {/* Top Circle */}
                            <div className="absolute right-2 top-1/2 transform translate-x-1/2 -translate-y-1/2 rounded-full  bg-[#4880FF] h-5 w-4"></div> {/* Right Circle */}
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-[#4880FF] h-4 w-5"></div> {/* Bottom Circle */}
                            <div className="absolute left-2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full  bg-[#4880FF] h-5 w-4"></div> {/* Left Circle */}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="w-full flex justify-center gap-x-12 mt-8">
                        <div>
                            <p className="text-xl">21,223</p>
                            <div className="flex gap-3 items-center justify-center">
                                <div className='rounded-full h-3 w-3 bg-[#4880FF]'></div>
                                <div>New Technicians</div>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl">21,223</p>
                            <div className="flex gap-3 items-center justify-center">
                                <div className='rounded-full h-3 w-3 bg-[#C0D2F0]'></div>
                                <div>Repeated</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*fourth row */}
            <div className="h-[400px] w-full justify-between flex gap-x-10">
                <TechnicianPerformanceChart />
                <TrendChart />
            </div>
        </div>
    )
}

export default Dashboard