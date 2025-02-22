import { IoMdArrowRoundBack, IoMdTimer } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbDeviceMobileDollar } from "react-icons/tb";
import { PiShapes } from "react-icons/pi";

const PendingOrderPrev = ({ onBack }) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
       <button
        onClick={onBack}
        className=" text-2xl outline-none cursor-pointer rounded"
      >
        <IoMdArrowRoundBack />
      </button>

        <div className="flex md:mt-4 justify-between border-b pb-4">
          <p><strong>Order No:</strong> 6019</p>
          <p><strong>Shipped date:</strong> 01-02-2026</p>
          <p><strong>Customer Name:</strong> Kartik Ray</p>
          <p><strong>Mobile Number:</strong> 89xxxxxxxx</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold text-lg">Order Items</h2>
          <ul className="list-decimal pl-6 mt-2">
            <li>
              <p><strong>Water Purifier Full Checkup</strong></p>
              <p className="text-gray-600">Problem: Low Water Flow</p>
              <p className="text-gray-600">Qty: 1</p>
              <p className="text-gray-600">Price: ₹299</p>
              <p className="text-gray-600">Service time: 1hr 30min</p>
            </li>
          </ul>
        </div>

        <h2 className="font-semibold mt-4  text-lg">Date And Time Slot Details</h2>
        <div className="mt-4 w-full flex justify-between ">
          <p className="flex gap-2 items-center"><FaRegCalendarAlt /> Date: Sun 02</p>
          <p className="flex gap-2 items-center"><IoMdTimer /> Time: 09:00 am</p>
          <p className="flex gap-2 items-center"><TbDeviceMobileDollar /> Payment Method: Cash On Delivery</p>
          <p className="flex gap-2 items-center"><PiShapes /> Category: Water Purifier Repair</p>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold text-lg">Payment Summary</h2>
          <p className="flex justify-between">Item’s total: <span>₹200</span></p>
          <p className="flex justify-between border-b border-[#ABABAB] pb-2">Taxes and Fee: <span>₹68</span></p>
          <p className="flex justify-between font-bold pt-2">Total: <span className="font-normal">₹268</span></p>
        </div>

        <h2 className="font-semibold text-lg mt-6">Shipping And Billing Details</h2>
        <div className="flex mt-2">
          <p>Shipping Address: Xxxxxxxx</p>
          <p className="md:ml-[200px]">Order Status: Pending</p>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-[#67D6B9] hover:bg-[#25803D] md:mt-6 cursor-pointer text-white px-6 py-2 rounded-md">Print Order Preview</button>
        </div>
     
    </div>
   
  );
};
export default PendingOrderPrev;
