import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-light-blue shadow-md fixed top-0 left-0 right-0 z-10">
      <Link to="/" className="site-title text-black text-xl font-semibold font-mono">
        CareerNav.
      </Link>
      <ul className="flex space-x-4 text-black">
        <CustomLink to="/home" className="text-black font-mono">Home</CustomLink>
        <CustomLink to="/explorecareer" className="text-black font-mono">Careers</CustomLink>
        <CustomLink to="/quizzes" className="text-black font-mono">Quizzes</CustomLink>
        {/* <CustomLink to="/qa" className="text-black font-mono">Q&A</CustomLink> */}
        <CustomLink to="/favorites" className="text-black font-mono">Favorites</CustomLink>
        <CustomLink to="/join" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-[#FBE8A6] hover:text-[#303C6C] font-mono">
          Join
        </CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "text-blue-500" : "text-gray-700 hover:text-blue-500"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
