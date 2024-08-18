import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>

    <body className = "max-h-screen min-w-full bg-light-blue">

    
    <div className="flex flex-col items-start justify-start max-h-screen min-w-full bg-light-blue p-60 overflow-hidden">
    
   

     {/* Blue Triangle (Bottom Right) */}
    <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[75vw] border-r-slate-blue border-t-[50vh] border-t-transparent overflow-hidden"></div>

    {/* Orange Triangle (Bottom Left) */}
    <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[75vw] border-l-light-orange border-t-[50vh] border-t-transparent overflow-hidden"></div>

    <h1 className=" font-mono text-6xl font-bold text-gray-900 mb-8">
      Career Navigator
    </h1>

    <div className="max-w-lg"><p className="font-mono text-lg text-gray-700 mb-6">
      Get ready for your future with CareerNav.! 
      Explore exciting job options, learn about different careers, and find out what steps to take to make your dreams a reality.
    </p></div>
    
    <Link to="/explorecareer" className = "z-50">
    <button className="px-8 py-4 bg-black text-white rounded-lg shadow-md hover:bg-dark-blue transition duration-300">
      Explore Careers
    </button>
    </Link>

    {/* Transparent PNG on the Right Side */}
    <img
        src= "picture.png"
        alt="Description of image"
        className="absolute right-20 bottom-20 w-1/3 h-auto"
      />
  
    </div>
    </body>
    </>



  );
}

export default Home;
