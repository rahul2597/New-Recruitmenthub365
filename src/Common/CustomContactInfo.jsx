/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Social from "../Common/Social";

const CustomContactInfo = ({heading, address, email, phone, socials}) => {
  return (
    <div className="md:w-2/3 w-full flex flex-col font-poppins">
      <h2 className="font-raleway text-2xl font-bold">{heading}</h2>
      <Link to={'https://maps.app.goo.gl/JcvHtVyqrNsYsWrh8'} target="_blank" className="hover:text-[#23bea2] py-2">
        {address}
      </Link>
      <Link to={`mailto:${email}`} className="hover:text-[#23bea2] py-2">{email}</Link>
      <Link to={`tel:${phone}`} className="hover:text-[#23bea2] py-2">{phone}</Link>
      <div className="flex items-center space-x-2 py-4">
        {
          socials?.map((social, index)=>(
            <Social key={index} icon={social.site} link={'linkedInLink'} />
          ))
        }
      </div>
    </div>
  )
}

export default CustomContactInfo