import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCity = () => {
    const [cityName, setCityName] = useState('');
    const [cityStatus, setCityStatus] = useState('');
    const navigate = useNavigate();

    const handleAddCity = () => {
        // Navigate back to previous page
        navigate(-1);
    };

    return (
        <div className="flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-6">Add City</h2>

            <div className="w-full max-w-md p-6 space-y-4 text-xl">
                <div>
                    <label className="block text-gray-700 mb-2">City Name</label>
                    <input
                        type="text"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-2">City Status</label>
                    <input
                        type="text"
                        value={cityStatus}
                        onChange={(e) => setCityStatus(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <button
                    onClick={handleAddCity}
                    className="bg-[#7EC1B1] w-full text-white p-2 rounded-lg mt-4 hover:bg-[#65a89d] transition"
                >
                    Add City
                </button>
            </div>
        </div>
    );
};

export default AddCity;