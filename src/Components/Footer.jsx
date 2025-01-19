import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Social from "../Common/Social";
import { Link } from "react-router-dom";

const Footer = () => {
  const Links = [
    {
      text: "Employers",
      link: "/employers",
    },
    {
      text: "Find Jobs",
      link: "/jobs",
    },
    {
      text: "Blogs",
      link: "/insights",
    },
    {
      text: "About US",
      link: "/about",
    },
  ];
  return (
    <div className="text-white bg-gradient-to-r from-[#25cbab] to-[#0f3d22] px-12 py-11 flex flex-wrap items-center justify-between">
      <div className="md:w-1/2 pr-28">
        <Link href="/" className="text-white font-semibold text-3xl">
          RecruitmentHub 365
        </Link>
        <p className="py-8 font-poppins text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="flex items-center gap-3 justify-start space-x-4">
          <Social icon={<FaFacebookF size="20" />} link="/" />
          <Social icon={<FaYoutube size="20" />} link="/" />
          <Social icon={<FaLinkedinIn size="20" />} link="/" />
          <Social icon={<FaInstagram size="20" />} link="/" />
        </div>
      </div>
      <div className="flex flex-wrap pt-4 gap-4 md:justify-between">
        <div className="flex flex-col md:w-2/5">
          <h2 className="font-raleway font-bold text-lg">USEFUL LINKS</h2>
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.link}
              className="py-2 hover:text-black text-white font-poppins text-lg"
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex flex-col md:w-2/5">
          <h2 className="font-raleway font-bold text-lg">CONTACT INFO</h2>
          <Link
            href="https://www.google.com/maps/search/?api=1&query=2407,+Sector+66,+Baner,+Pune,+India"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 hover:text-black text-white font-poppins text-lg"
          >
            2407, Sector 66, Baner, Pune, India - 160062
          </Link>
          <Link
            href="mailto: hr@recruitmenthub365.com"
            target="_blank"
            className="py-2 hover:text-black text-white font-poppins text-lg"
          >
            hr@recruitmenthub365.com
          </Link>
          <Link
            href="tel:+917488081301"
            target="_blank"
            className="py-2 hover:text-black text-white font-poppins text-lg"
          >
            +91 7908902209
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
