import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

const careers = [
  { id: 1, name: "Web Developer", path: "/webdev" },
  { id: 2, name: "Data Scientist", path: "/data-scientist" },
  {
    id: 3,
    name: "Cybersecurity Specialist",
    path: "/cybersecurity-specialist",
  },
  { id: 4, name: "Software Developer", path: "/software-developer" },
  { id: 5, name: "Systems Analyst", path: "/systems-analyst" },
  { id: 6, name: "Cloud Engineer", path: "/cloud-engineer" },
  { id: 7, name: "AI/Machine Learning Engineer", path: "/ai-ml-engineer" },
  { id: 8, name: "UX/UI Designer", path: "/ux-ui-designer" },
  { id: 9, name: "Database Administrator", path: "/database-administrator" },
  { id: 10, name: "Network Administrator", path: "/network-administrator" },
  // Add more careers as needed
];

function CareerBlock({ name, path }) {
  return (
    <>
      <Link
        to={path}
        className="block p-8 md:w-[150%] w-full bg-dark-blue rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-light-orange"
      >
        <h2 className="text-2xl font-bold mb-2 text-pale-yellow">{name}</h2>
        <h2 className="text-sm font-bold mb-2 text-pale-yellow">Learn More!</h2>
      </Link>
    </>
  );
}

function Careers() {
  return (
    <>
      <div className="flex flex-col items-start justify-start min-h-screen min-w-full bg-light-blue p-40">
        {/* <div className="relative w-full h-80 bg-orange-500 transform rotate-[-10deg] origin-top-left"> </div> */}

        <h1 className=" font-mono text-6xl font-bold text-gray-900 mb-10 bg-pale-yellow bg-clip-border rounded-xl">
          Technology & IT
        </h1>

        <div className="w-[1000px]">
          <p className="font-mono text-lg text-gray-700 mb-12">
            The technology and IT field is all about creating and managing the
            software, hardware, and networks that power our digital world. From
            developing apps and websites to ensuring the security of online
            data, this field offers a wide range of careers that blend
            problem-solving with innovation. It's a fast-paced industry where
            you can help shape the future of how we live and work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-60 p-0">
          {careers.map((career) => (
            <CareerBlock
              key={career.id}
              name={career.name}
              path={career.path}
              icon={career.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Careers;
