import React from 'react';
import { Link } from 'react-router-dom';
import Webdev from './Webdev';

const careers = [
    { id: 1, name: 'Web Developer', path: '/webdev' },
    { id: 2, name: 'Data Scientist', path: '/data-scientist' },
    { id: 3, name: 'Cybersecurity Specialist', path: '/cybersecurity-specialist' },
    // Add more careers as needed
  ];

  function CareerBlock({ name, path }) {
    return (
        <>
       
      <Link to={path} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-blue-50">
       
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>   
    <h2 className="text-2xl font-bold mb-2 text-gray-800">Learn More</h2>
      </Link>
      </>
    );
  }

function Careers() {
    return(
      <>
    <div className= "flex flex-col items-start justify-start min-h-screen min-w-full bg-light-blue p-40">
        
         <h1 className=" font-mono text-6xl font-bold text-gray-900 mb-10 bg-pale-yellow bg-clip-border rounded-xl ">
             Technology & IT
        </h1>

    <div className="w-[1000px]"><p className="font-mono text-lg text-gray-700 mb-6">
    The technology and IT field is all about creating and managing the software, hardware, and networks that power our digital world. 
    From developing apps and websites to ensuring the security of online data, this field offers a wide range of careers that blend problem-solving with innovation. 
    It's a fast-paced industry where you can help shape the future of how we live and work.
    </p></div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {careers.map(career => (
        <CareerBlock 
          key={career.id} 
          name={career.name} 
          path={career.path} 
        />
      ))}
    </div>
    
    
    </div>

      

      </>

    );
}

export default Careers;

