/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Social = ({icon, link}) => {
  return (
    <Link to={link} className="flex items-center justify-center size-8 rounded-full bg-[#687379] hover:text-[#25caab] hover:bg-white">
        {icon}
    </Link>
  )
}

export default Social