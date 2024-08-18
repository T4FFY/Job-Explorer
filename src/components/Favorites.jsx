import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jobData from "../data/jobData";

// const jobData = [
//   {
//     id: "webdev",
//     title: "Web Developer",
//     path: "/webdev",
//     description: "A web developer builds and maintains websites..."
//     // Add other fields if needed, like image URLs or short descriptions
//   },
//   // Add other job data objects here
// ];

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoriteJobs = jobData.filter((job) => favoriteIds.includes(job.id));
    setFavorites(favoriteJobs);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start bg-light-blue p-40 min-w-full min-h-screen">
      <h1 className=" font-mono text-6xl font-bold text-gray-900 mb-8 bg-pale-yellow bg-clip-border rounded-xl ">
            Your Favorites
        </h1>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 justify-items-center">
          {favorites.map((job) => (
            <div
              key={job.id}
              className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 flex-shrink-0"
            >
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {job.title}
                </h5>
                <p className="font-mono text-lg text-gray-700 mb-6">
                  {job.description}
                </p>
                <Link to={job.path}>
                  <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-mono text-lg text-gray-700">
          You haven't favorited any jobs yet.
        </p>
      )}
    </div>
  );
}

export default Favorites;
