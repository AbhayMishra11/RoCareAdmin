import React from 'react'

function CompleteOrdersPreview() {
  return (
    <div >
    <div className='flex justify-between w-full border-b-2 '>
        <div >Order No: 6019</div>
        <div>Shipped date: 01-02-2026</div>
        <div>Customer Name: Kartik Ray</div>
        <div>Mobile Number: 89xxxxxxxx</div>
    </div>
    <div className="mt-[10px] border-b-4 left-0 top-0  p-4 text-black">
    {/* <div className='mt-[10px] ml-0'> */}
      <div className='font-bold text-lg'>Order Items</div>
      <div className='text-gray-900 '>Water Purifier Full Checkup</div>
      <div className='text-gray-900'>Problem:Low Water Flow</div>
      <div className='text-gray-400 '>
        <div>Qty:1</div>
        <div>price:299</div>
        <div>Service time:1hr 30min</div>
      </div>
    </div>
      <div>
      <div className='font-bold text-lg '>Date And Time Slot Details</div>
      <div className='flex justify-between w-full mt-[5px] border-b-4 p-4'>
      <div>Date:sun 02</div>
      <div>Time:09:00 am</div>
      <div>Payment Method: Cash On Delivery</div>
      <div>Category:Water Purifier Repair</div>
      
    </div>
    <div>
        <div  className='font-bold text-lg '>Payment Summary</div>
        <div className='border-b-2 p-4'>
        <div>Item's total</div>
        <div>Taxes and Fee</div>
        </div>
        <div className='border-b-8 p-4'>Total</div>
      </div>
      <div>
      <div className='font-bold text-lg mt-[10px]'>Shipping And Billing Details</div>
      <div  className='flex  mt-[5px]'>
      <div>Shipping Address:Xxxxxxxxxx</div>
      <div className='ml-20'>Order Status:Completed</div>
      </div>
      </div>
      </div>
      <div className="flex justify-center items-center h-screen mt-[5px]">
      <button className="bg-blue-300 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
       Print Order Preview
      </button>
    </div>
    </div>
  )
}

export default CompleteOrdersPreview