import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const [serviceName, setServiceName] = useState('');
    const [serviceSubtitle, setServiceSubtitle] = useState('');
    const [serviceImage, setServiceImage] = useState('');
    const [serviceVideo, setServiceVideo] = useState('');
    const [serviceStatus, setServiceStatus] = useState('');

    const navigate = useNavigate();

    const handleAddService = () => {
        // Navigate back to previous page
        navigate(-1);
    };

    return (
        <div className="flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">Add Service</h2>

            <div className="w-full max-w-md p-6 space-y-4 text-xl">
                <div>
                    <label className="blockmb-2">Service Name</label>
                    <input type="text" value={serviceName} onChange={(e) => setServiceName(e.target.value)} className="w-full p-2 border border-gray-300" />
                </div>
                <div>
                    <label className="block mb-2">Service Subtitle</label>
                    <input type="text" value={serviceSubtitle} onChange={(e) => setServiceSubtitle(e.target.value)} className="w-full p-2 border border-gray-300" />
                </div>
                <div>
                    <label className="block  mb-2">Image File</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full file:py-2 file:px-4 file:border file:border-gray-300 file:text-sm hover:file:bg-gray-100
                        border border-gray-300 p-2 text-gray-500"
                    />
                </div>
                <div>
                    <label className="block mb-2">Video File</label>
                    <input
                        type="file"
                        accept="video/*"
                        className="w-full file:py-2 file:px-4 file:border file:border-gray-300 file:text-sm file:font-semibold hover:file:bg-gray-100
                        border border-gray-300
                        border border-gray-300 p-2 text-gray-500"
                    />
                </div>

                <div>
                    <label className="block mb-2">Status</label>
                    <input type="text" value={serviceStatus} onChange={(e) => setServiceStatus(e.target.value)} className="w-full p-2 border border-gray-300 " />
                </div>

                <button onClick={handleAddService} className="bg-[#7EC1B1] w-full text-white p-2 rounded-lg mt-4 hover:bg-[#65a89d] transition">
                    Add Service
                </button>
            </div>
        </div>
    );
};

export default AddService;