import React from 'react';
import { Link } from 'react-router-dom';

function Webdev() {
    return(
      <>
        <div className= "flex flex-col items-start justify-start bg-light-blue p-40">
  
  <h1 className=" font-mono text-6xl font-bold text-gray-900 mb-20 bg-pale-yellow bg-clip-border rounded-xl ">
    Web Developer</h1>

    <h1 className=" font-mono text-2xl font-bold text-gray-900 mb-8 bg-light-orange bg-clip-border rounded-xl ">
    Job Description</h1>

    <div className="w-[500px]"><p className="font-mono text-lg text-gray-700 mb-6">
    A web developer builds and maintains websites, making sure they look great and work well.
    They use coding languages like HTML, CSS, and JavaScript to create everything from simple pages to complex web applications.
    Web developers also work on making sites responsive, meaning they work on phones, tablets, and computers. 
    It's a creative job that combines design with problem-solving to bring ideas to life online.
    </p></div>








      </div>

      </>

    );
}

export default Webdev;

