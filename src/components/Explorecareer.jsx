import { Link } from 'react-router-dom'
import Careers from './Careers';
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
      imageUrl: "https://www.shutterstock.com/shutterstock/photos/2136788117/display_1500/stock-photo-late-at-night-in-private-office-male-businessman-works-on-a-laptop-computer-he-look-at-the-camera-2136788117.jpg",
      learnMore: "/technology-and-it"
  },
  {
      id: 2,
      title: "Arts and Media",
      imageUrl: "https://media.gettyimages.com/id/1399942653/photo/artist-talking-to-the-press.jpg?s=612x612&w=gi&k=20&c=GPrRbVfQ3s3282Txx8FDSVUcab1p-zPZuI1D_-s6JK4=",
      learnMore: "/arts-and-media"
  },
  // Add more job areas here
  {
      id: 3,
      title: "Science and Engineering",
      imageUrl: "https://st4.depositphotos.com/1971587/31275/i/450/depositphotos_312755238-stock-photo-electronic-laboratory-working-process.jpg",
      learnMore: "/science-and-engineering"
    },
  {
      id: 4,
      title: "Healthcare and Medicine",
      imageUrl: "https://www.shutterstock.com/image-photo/happy-woman-doctor-on-tablet-600nw-2273374687.jpg",
      learnMore: "/healthcare-and-medicine"
    },
  {
      id: 5,
      title: "Education and Training",
      imageUrl: "https://media.istockphoto.com/id/1312139041/photo/learning-on-the-job.jpg?s=612x612&w=0&k=20&c=KmGoZhp92ukKgYCtxulX9yViM1aQTtYtq-pvLr7Q2TA=",
      learnMore: "/education-and-training"
    },
  {
      id: 6,
      title: "Business and Finance",
      imageUrl: "https://img.freepik.com/free-photo/group-asian-business-people-meeting-about-business-plan-present-explain-stock-financial_74952-2970.jpg",
      learnMore: "/business-and-finance"
    },
  {
      id: 7,
      title: "Social Services and Community Work",
      imageUrl: "https://www.shutterstock.com/image-photo/black-man-volunteering-giving-box-600nw-2256153733.jpg",
      learnMore: "/social-services-and-community-work"
    },
  {
      id: 8,
      title: "Skilled Trades and Crafts",
      imageUrl: "https://www.shutterstock.com/image-photo/two-artisans-welder-their-craft-260nw-1312181897.jpg",
      learnMore: "/skilled-trades-and-crafts"
    },
  {
      id: 9,
      title: "Sports and Recreation",
      imageUrl: "https://thumbs.dreamstime.com/b/sports-athlete-black-woman-job-outdoor-break-nature-beach-fitness-runner-ocean-exercise-sports-athlete-327905386.jpg",
      learnMore: "/sports-and-recreation"
    },
  {
      id: 10,
      title: "Environmental and Agricultural",
      imageUrl: "https://www.shutterstock.com/image-photo/farmer-girl-harvests-turniprooted-cabbage-600nw-2400029675.jpg",
      learnMore: "/environmental-and-agricultural"
    },
  {
      id: 11,
      title: "Law and Public Safety",
      imageUrl: "https://media.istockphoto.com/id/483557301/photo/police-officers-on-duty.jpg?s=612x612&w=0&k=20&c=lqpRUJ4YbNqB247QUosZxq0ErIKogYli0XAZPiLkdZs=",
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
      <Link to="/careers">
        <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none">
          Learn More
        </button>
      </Link>
    </div>
  </div>
);

const Explorecareer = () => (

  <div className= "flex flex-col items-start justify-start bg-light-blue p-40 min-w-full">

<h1 className=" font-mono text-6xl font-bold text-gray-900 mb-8 bg-pale-yellow bg-clip-border rounded-xl ">
     Explore Your Careers
    </h1>

    <div className="w-[1000px]"><p className="font-mono text-lg text-gray-700 mb-6">
    Explore the diverse world of careers and find your path! From creative fields like art and design to 
    technical roles in engineering and IT, and impactful positions in healthcare and education, there is a career for every interest.
    Dive into various industries, discover the skills required, and envision the future that best aligns with your passions and goals.
    </p></div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0 justify-items-center">
    {jobAreas.map(job => (
      <JobCard
        key={job.id}
        title={job.title}
        imageUrl={job.imageUrl}
        learnMore= {Careers}
      />
    ))}
  </div>

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
  