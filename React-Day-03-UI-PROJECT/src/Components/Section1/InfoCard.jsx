import React from "react";
const InfoCard = ({ image, description, status, number }) => {
  return (
    <div className="w-64 h-110 rounded-2xl overflow-hidden shadow-lg bg-gray-900 text-white relative">
      
      {/* Image */}
      <img
        src={image}
        alt="user"
        className="w-full h-110 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
        
        {/* Text */}
        <p className="text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Button */}
        <div className="flex items-center justify-between bg-blue-600 px-4 py-2 rounded-full w-fit">
          <span className="text-sm font-medium">{status}</span>
          <div className="ml-3 bg-blue-400 p-1 rounded-full">
            →
          </div>
        </div>

      </div>

      {/* Top Left Badge */}
      <div className="absolute top-3 left-3 bg-white text-black w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
        {number}
      </div>
    </div>
  );
};

export default InfoCard;

