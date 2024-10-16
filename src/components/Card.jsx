import React from "react";

const Card = ({ imageUrl }) => {
  return (
    <div className="flex justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 w-full h-full">
      <img 
        src={imageUrl} 
        alt="Cat" 
        className="max-w-full max-h-96 object-contain"
      />
    </div>
  );
};

export default Card;
