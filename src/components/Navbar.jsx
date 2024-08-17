import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <Link to="/" className="site-title text-[#303C6C] text-xl font-semibold">
        JobExplorer
      </Link>
      <ul className="flex space-x-4">
        <CustomLink to="/home" className="text-[#303C6C]">Home</CustomLink>
        <CustomLink to="/explorecareer" className="text-[#303C6C]">Career Profiles</CustomLink>
        <CustomLink to="/quizzes" className="text-[#303C6C]">Quizzes</CustomLink>
        <CustomLink to="/qa" className="text-[#303C6C]">Q&A</CustomLink>
        <CustomLink to="/favorites" className="text-[#303C6C]">Favorites</CustomLink>
        <CustomLink to="/join" className="px-4 py-2 bg-[#303C6C] text-white rounded-lg hover:bg-[#FBE8A6] hover:text-[#303C6C]">
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
