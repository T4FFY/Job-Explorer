import { Link } from 'react-router-dom'
// import { StackedCard } from './StackedCard'
// import { jobAreas } from '../public/assets/data/JobAreas.jsx'

// const Explorecareer = () => (
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//     {jobAreas.map(job => (
//       <StackedCard
//         key={job.id}
//         title={job.title}
//         imageUrl={job.imageUrl}
//         learnMore={job.learnMore}
//       />
//     ))}
//   </div>
// );

// export default Explorecareer;
const jobAreas = [
  {
      id: 1,
      title: "Technology and IT",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/technology-and-it"
  },
  {
      id: 2,
      title: "Arts and Media",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/arts-and-media"
  },
  // Add more job areas here
  {
      id: 3,
      title: "Science and Engineering",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/science-and-engineering"
    },
  {
      id: 4,
      title: "Healthcare and Medicine",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/healthcare-and-medicine"
    },
  {
      id: 5,
      title: "Education and Training",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/education-and-training"
    },
  {
      id: 6,
      title: "Business and Finance",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/business-and-finance"
    },
  {
      id: 7,
      title: "Social Services and Community Work",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/social-services-and-community-work"
    },
  {
      id: 8,
      title: "Skilled Trades and Crafts",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/skilled-trades-and-crafts"
    },
  {
      id: 9,
      title: "Sports and Recreation",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/sports-and-recreation"
    },
  {
      id: 10,
      title: "Environmental and Agricultural",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/environmental-and-agricultural"
    },
  {
      id: 11,
      title: "Law and Public Safety",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80",
      learnMore: "/law-and-public-safety"
    },
];

const JobCard = ({ title, imageUrl, learnMore }) => (
  <div className="relative flex flex-col mt-16 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-80 flex-shrink-0">
    <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
      <img src={imageUrl} alt={`${title} image`} />
    </div>
    <div className="p-6">
      <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {title}
      </h5>
    </div>
    <div className="p-6 pt-0">
      <Link to={learnMore}>
        <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
          Learn More
        </button>
      </Link>
    </div>
  </div>
);

const Explorecareer = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 justify-items-center">
    {jobAreas.map(job => (
      <JobCard
        key={job.id}
        title={job.title}
        imageUrl={job.imageUrl}
        learnMore={job.learnMore}
      />
    ))}
  </div>
);

// function Explorecareer() {
//     return (
//       <>
//       <h1>Welcome to Job Explorer</h1>
//       <p>Here are some jobs</p>     
      
//       </>
//     );
//   }
  
  export default Explorecareer;
  