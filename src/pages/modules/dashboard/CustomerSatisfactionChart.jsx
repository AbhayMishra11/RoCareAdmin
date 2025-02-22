import React from 'react';
import Smiling from "../../../assets/Smiling.png";

const CustomerSatisfaction = ({ satisfactionPercentage }) => {
    // Ensure satisfaction is between 0 and 100
    const validSatisfaction = Math.min(Math.max(satisfactionPercentage, 0), 100);

    // SVG arc parameters
    const radius = 70; // Radius of the arc (half-circle)
    const strokeWidth = 12; // Border width (arc thickness)
    const circumference = Math.PI * radius; // Half circumference (for semi-circle)
    const offset = (1 - validSatisfaction / 100) * circumference; // Offset based on satisfaction percentage

    // Calculate the angle for the end circle position based on the percentage
    const angle = (validSatisfaction / 100) * Math.PI; // This calculates the angle of the arc

    // Calculate the position for the end circle based on the angle
    const circleX = 200 + radius * Math.cos(angle); // X position of the circle (right end of the arc)
    const circleY = 100 - radius * Math.sin(angle); // Y position of the circle (adjusted for the correct vertical alignment)

    return (
        <div className="w-[30%] bg-white h-full flex flex-col items-center relative rounded-lg pt-4">
            <h2 className="w-full text-xl font-semibold text-left pl-15">Service Bookings for Graph</h2>
            <svg width="400" height="200" viewBox="-20 -20 240 160">
                {/* Background semi-circle (remaining part) */}
                <path
                    d={`M 0,100 A ${radius} ${radius} 0 0,1 200,100`} // Draws the background semi-circle (empty)
                    stroke="#E0E0E0" // Light gray background for empty space
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                {/* Foreground semi-circle (progress based on satisfaction) */}
                <path
                    d={`M 0,100 A ${radius} ${radius} 0 0,1 200,100`} // The same semi-circle path for the foreground
                    stroke="#7EC1B1"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference} // Sets the total length of the semi-circle
                    strokeDashoffset={offset} // Adjusts the filled portion based on satisfaction
                />

                {/*
                <circle
                    cx={circleX}
                    cy={circleY}
                    r="10"
                    fill="#7EC1B1" 
                /> */}
            </svg>

            {/* Smiling Image */}
            <div
                className="absolute flex flex-col justify-center items-center"
                style={{
                    top: '60%', // Centers the image vertically
                    left: '50%', // Centers the image horizontally
                    transform: 'translate(-50%, -50%)', // Corrects the offset to center both horizontally and vertically
                    width: '40%', // Adjust the width of the image (adjust as needed)
                }}
            >
                <img
                    src={Smiling} // Path to the smiling image
                    alt="Smiling"
                    className="object-contain" // Ensures the image fits inside the container
                />
                {/* Satisfaction Percentage Text */}
                <p className='text-xl'>
                    {validSatisfaction}%
                </p>
                <p className='text-gray-400 font-semibold text-xl w-[150px] pl-3 '>Customers are
                    satisfied with the
                    services</p>
            </div>
        </div>
    );
};

export default CustomerSatisfaction;
