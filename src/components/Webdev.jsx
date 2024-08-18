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

          <div className="flex-none w-[600px] mt-[150px]">
            <div className="relative w-full h-[350px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/SmxrUmaAOz0" // Example YouTube video URL
                title="Embedded Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* New Row of Elements */}
        <div className="flex flex-col gap-8 mt-8">
          <div className="bg-tangerine p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Skills</h2>
            <p className="text-gray-700">
              HTML, CSS, and JavaScript, with expertise in frontend frameworks,
              backend languages, database management, API integration,
              responsive design, cross-browser compatibility, version control ,
              and familiarity with deployment platforms and CI/CD processes.
            </p>
          </div>

          <div className="bg-tangerine p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Career Benefits</h2>
            <p className="text-gray-700">
              This job offers experience in technology, problem-solving, and the
              opportunity to work on exciting projects, with good earning
              potential and career growth in a growing field.
            </p>
          </div>

          <div className="bg-tangerine p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Career Path</h2>
            <p className="text-gray-700">
              Start with a high school diploma, pursue a relevant degree or
              certification, gain experience through entry-level positions or
              internships, develop key skills, and progress to advanced roles
              like senior developer or engineering manager, with long-term goals
              including leadership positions or entrepreneurship in the tech
              field.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webdev;
