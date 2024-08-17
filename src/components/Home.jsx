import React from 'react';
import { Button } from "flowbite-react";



function Home() {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-light-blue p-60 overflow-hidden">
    
   

     {/* Blue Triangle (Bottom Right) */}
<div className="absolute bottom-0 right-0 w-0 h-0 border-r-[75vw] border-r-slate-blue border-t-[50vh] border-t-transparent"></div>

 {/* Orange Triangle (Bottom Left) */}
 <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[75vw] border-l-light-orange border-t-[50vh] border-t-transparent"></div>

    <h1 className="text-4xl font-bold text-gray-900 mb-4">
      Welcome to My Website!
    </h1>
    <p className="text-lg text-gray-700 mb-6">
      This is the homepage where you can find information about what we do.
    </p>
    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
      Learn More
    </button>
  
    </div>



  );
}

export default Home;
