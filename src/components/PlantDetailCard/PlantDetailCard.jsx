import React from 'react';

const PlantDetailCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md max-w-5xl mx-auto p-6 md:p-10 my-10" style={{ backgroundColor: '#f3fdfa' }}>
      {/* Image */}
      <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-10">
        <img
          src="https://i.ibb.co/4RxxpM4w/images-1.jpg"
          alt="Croton Petra"
          className="w-64 h-64 object-cover rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="text-gray-900 text-sm md:text-base space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-900">Croton Petra</h2>
        <p className="italic text-gray-600">Indoor</p>
        <p className="text-gray-800 mt-2">
          Croton Petra adds color like no other — red, yellow, and green leaves brighten up any room.
          It prefers direct sunlight and moist soil. Though slightly fussy, its stunning foliage is
          worth the effort for vibrant tropical indoor decor lovers.
        </p>
        <p><strong>Care Level:</strong> <span className="text-black">Medium</span></p>
        <p><strong>Watering Frequency:</strong> <span className="text-black">Every 5 days</span></p>
        <p><strong>Last Watered:</strong> <span className="text-black">16 May 2025</span></p>
        <p><strong>Next Watering:</strong> <span className="text-black">21 May 2025</span></p>
        <p><strong>Health Status:</strong> <span className="text-black">Colorful</span></p>
        <p className="text-sm text-gray-500 mt-4">
          Added by: <strong className="text-black">Layek Miah</strong> (<a className="underline" href="mailto:layekofficial63@gmail.com">layekofficial63@gmail.com</a>)
        </p>
      </div>
    </div>
  );
};

export default PlantDetailCard;
