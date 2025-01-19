/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CustomBlog = ({ img, heading, text, link }) => {
  return (
    <div className="flex flex-col w-full md:w-1/4 h-screen text-white relative rounded-xl bg-gradient-to-r from-[#020c0a] to-[#041412] border-2 border-gray-700 my-2">
      {/* Tag */}
      <p className="absolute z-10 bg-[#25caac] py-1 px-4 rounded-full right-5 top-5">
        Recruitment
      </p>

      {/* Image Section */}
      <div className="flex-grow overflow-hidden rounded-t-xl">
        <img
          src={img}
          className="w-full h-full object-cover rounded-t-xl"
          alt="Blog Image"
        />
      </div>

      {/* Text Section */}
      <div className="p-4 md:px-8 md:py-6 flex flex-col justify-between h-auto">
        <h2 className="font-raleway font-bold text-lg md:text-xl">{heading}</h2>
        <p className="font-poppins text-sm my-4 md:my-6">{text}</p>
        <Link
          to={link}
          className="text-[#0c443a] font-raleway font-bold text-xs"
        >
          Read More »
        </Link>
      </div>
    </div>
  );
};

export default CustomBlog;
