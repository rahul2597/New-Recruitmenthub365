/* eslint-disable react/prop-types */
import Social from "./Social";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const CustomEmployer = ({
  img,
  imgStyle,
  name,
  title,
  about,
  linkedInLink,
  instaLink,
  twitterLink,
}) => {
  return (
    <div className="border-2 py-6 px-8 text-white border-l-[#041713] border-t-[#06221d] border-r-[#082923] border-b-[#0b3a31] rounded-lg flex flex-col items-center justify-center bg-gradient-to-bl from-[#051e1a] to-[#000000] hover:bg-gradient-to-bl hover:from-[#051e1a] hover:to-[#051e1a]">
      <img src={img} className={imgStyle} alt="Employer" />
      <h2 className="font-raleway font-bold text-4xl">{name}</h2>
      <h4 className="font-poppins py-2">{title}</h4>
      <p className="font-poppins text-sm text-center pt-1 pb-6">{about}</p>
      <div className="flex items-center gap-x-3 justify-start space-x-4">
        <Social icon={<FaLinkedinIn size="20" />} link={linkedInLink} />
        <Social icon={<FaInstagram size="20" />} link={instaLink} />
        <Social icon={<FaTwitter size="20" />} link={twitterLink} />
      </div>
    </div>
  );
};
