import React from 'react';

const CancelledOrderPreview = () => {
    return (
        <div className="max-w-3xl mx-auto border p-6 rounded-lg shadow-md space-y-4">
            <div className="flex justify-between">
                <span>Order No: <strong>6019</strong></span>
                <span>Shipped date: 01-12-2025</span>
                <span>Customer Name: <strong>Neha bais</strong></span>
                <span>Mobile Number: 89xxxxxxxx</span>
            </div>

            <div>
                <h2 className="font-semibold text-lg mb-2">Order Items</h2>
                <p>1. <strong>Water Purifier Full Checkup</strong></p>
                <p>Problem: Low Water Flow</p>
                <p>Qty: 1</p>
                <p>Price: ₹299</p>
                <p>Service time: 1hr 30min</p>
            </div>

            <div>
                <h2 className="font-semibold text-lg mb-2">Date And Time Slot Details</h2>
                <div className="flex justify-between">
                    <span>📅 Date: Sun 02</span>
                    <span>⏰ Time: 09:00 am</span>
                    <span>💳 Payment Method: Cash On Delivery</span>
                    <span>📦 Category: Water Purifier Repair</span>
                </div>
            </div>

            <div>
                <h2 className="font-semibold text-lg mb-2">Payment Summary</h2>
                <div className="flex justify-between">
                    <span>Item's total</span>
                    <span>₹200</span>
                </div>
                <div className="flex justify-between">
                    <span>Taxes and Fee</span>
                    <span>₹68</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2 font-semibold">
                    <span>Total</span>
                    <span>₹268</span>
                </div>
            </div>

            <div>
                <h2 className="font-semibold text-lg mb-2">Shipping And Billing Details</h2>
                <div className="flex justify-between">
                    <span>Shipping Address: Xxxxxxxxx</span>
                    <span>Order Status: <span className="text-red-500">Cancelled</span></span>
                </div>
            </div>

            <div className="text-center">
                <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-lg">Print Order Preview</button>
            </div>
        </div>
    );
};

export default CancelledOrderPreview;
