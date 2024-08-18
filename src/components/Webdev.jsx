import React from "react";
import { Link } from "react-router-dom";

function Webdev() {
  return (
    <>
      <div className="flex flex-col bg-light-blue p-40 min-w-full">
        <div className="flex flex-row mb-8">
          <div className="flex-1 flex flex-col items-start justify-start mr-8">
            <h1 className="font-mono text-6xl font-bold text-gray-900 mb-10 bg-pale-yellow bg-clip-border rounded-xl p-4">
              Web Developer
            </h1>

            <div className="mb-8 bg-dark-blue bg-clip-border rounded-xl p-8">
              <h1 className="font-mono text-2xl font-bold text-pale-yellow mb-8 bg-clip-border rounded-xl">
                Job Description
              </h1>
              <div className="w-[500px]">
                <p className="font-mono text-lg text-pale-yellow mb-6">
                  A web developer builds and maintains websites, making sure
                  they look great and work well. They use coding languages like
                  HTML, CSS, and JavaScript to create everything from simple
                  pages to complex web applications. Web developers also work on
                  making sites responsive, meaning they work on phones, tablets,
                  and computers. It's a creative job that combines design with
                  problem-solving to bring ideas to life online.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-none w-[700px] mt-[130px]">
            <div className="relative w-full h-[400px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example YouTube video URL
                title="Embedded Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* New Row of Elements */}
        <div className="flex flex-col gap-8 mt-8">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">New Section 1</h2>
            <p className="text-gray-700">
              This is a new section of content that goes below the existing
              elements.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">New Section 2</h2>
            <p className="text-gray-700">
              This is another new section of content that goes below the
              existing elements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webdev;
