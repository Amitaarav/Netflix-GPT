import React from 'react'
import { Play, Info } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 sm:px-12 md:px-24 absolute text-white bg-gradient-to-r from-black mb-2">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
        {title}
      </h1>
      <p className="py-4 text-base sm:text-lg md:text-xl w-full md:w-1/2 lg:w-1/3">
        {overview}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button className="flex items-center gap-2 bg-white text-black font-bold py-3 px-4 sm:px-6 rounded-lg 
                           hover:bg-opacity-80 hover:scale-105 shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out">
          <Play size={24} />
          Play
        </button>
        <button className="flex items-center gap-2 bg-gray-500 text-white font-bold py-3 px-4 sm:px-6 rounded-lg bg-opacity-60
                           hover:bg-gray-700 hover:scale-105 shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out">
          <Info size={24} />
          More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;


