

import React from 'react';
import { FaSearch, FaIndustry, FaUser } from 'react-icons/fa';
import ActiveSlider from './ActiveSlider';
import Personality from '../pages/Personality' 

import {useNavigate} from 'react-router-dom';
const CareerOptions = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/activeslider');
    }
    return (
        <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Search careers with keywords */}
            <div className="bg-green-600 text-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <FaSearch className="mr-2" />
                    Search careers with key words.
                </h2>
                <input 
                    type="text" 
                    placeholder="Describe your dream career..." 
                    className="w-full p-2 rounded-md text-gray-900 mb-2" 
                />
                <p className="text-sm">Examples: doctor, build houses</p>
                <button className="bg-green-700 text-white mt-4 py-2 px-4 rounded-md hover:bg-green-800">
                    Go &rarr;
                </button>
            </div>

            {/* Card 2: Browse careers by industry */}
            <div className="bg-orange-600 text-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <FaIndustry className="mr-2" />
                    Tell what Interests you
                </h2>
                <select 
                    className="w-full p-2 rounded-md text-gray-900 mb-2" 
                    defaultValue="Biology"
                >
                    <option>Biology</option>
                    <option>Physics</option>
                    <option>Economics</option>
                    {/* Add more options as needed */}
                </select>
                <button className="bg-orange-700 text-white mt-4 py-2 px-4 rounded-md hover:bg-orange-800">
                    Go &rarr;
                </button>
            </div>

            {/* Card 3: Discover your Personality */}
            <div className="bg-purple-600 text-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <FaUser className="mr-2" />
                    Discover your personality.
                </h2>
                <p className="mb-4">Find your opportunities based on your personalities...</p>
                <button onClick = {handleClick} className="bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800">
                    Start &rarr;
                </button>

                
            </div>
            
            
        </div>
        
    );
};

export default CareerOptions;
