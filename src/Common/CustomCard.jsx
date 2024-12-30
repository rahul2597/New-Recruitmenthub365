/* eslint-disable react/prop-types */
import { IoLocation } from "react-icons/io5";
import { FaToolbox } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import CustomButton from "./CustomButton";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const CustomCard = ({ item, isJobCard, jobAddToFav, favourite }) => {
  const {
    jobImg,
    jobTitle,
    technologies,
    location,
    jobType,
    salary,
    description,
    referalReward,
    time,
    img,
    name,
    feedback,
  } = item;

  const isFavourite = favourite ? "text-red-500" : "text-white";

  return (
    <>
      <div className="border md:w-[44%] lg:w-[24%]  bg-gradient-to-bl from-[#051e1a] to-[#000000] p-4 font-poppins rounded-md">
        {isJobCard === "jobCard" && (
          <>
            <div className="flex items-center  justify-between py-4">
              <img src={jobImg} alt="" className="w-20 h-12 rounded-md" />
              <p className="flex items-center gap-2">
                {time}{" "}
                <span onClick={jobAddToFav}>
                  <FaHeart
                    className={`${isFavourite} hover:text-red-700 cursor-pointer`}
                  />
                </span>
              </p>
            </div>
            <h2 className="font-poppins font-bold text-xl">{jobTitle}</h2>
            <p className="font-poppins text-sm">{technologies}</p>
            <p className="py-4">{description}</p>
            <div className="flex items-center space-x-2 py-2 font-poppins">
              <IoLocation className="size-4 text-cyan-700" />
              <p>{location}</p>
            </div>
            <div className="flex items-center space-x-2 py-2 font-poppins">
              <FaToolbox className="size-4 text-cyan-700" />
              <p>{jobType}</p>
            </div>
            <div className="flex items-center space-x-2 py-2 font-poppins">
              <FaWallet className="size-4 text-cyan-700" />
              <p>{salary}</p>
            </div>
            <hr className="my-1 text-gray-700" />
            <p className="py-2">
              <span className="font-bold">Referral rewards: </span>
              {referalReward}
            </p>
            <div className="flex gap-x-4 items-center space-x-4 font-poppins">
              <CustomButton
                text="READ MORE"
                style={
                  "py-2 px-1 text-sm text-center w-1/2 my-4 font-poppins rounded-full bg-[#37ed80] block"
                }
                link={"/jobs"}
              />
              <CustomButton
                text="REFER"
                style={
                  "py-2 px-1 text-sm text-center w-1/2 my-4 font-poppins rounded-full bg-[#37ed80] block"
                }
                link={"/jobs"}
              />
            </div>
          </>
        )}
        {isJobCard === "feedbackCard" && (
          <div className="p-4">
            <div className="flex items-center justify-between">
              <img src={img} alt={name} className="w-12 h-12 rounded-full" />
              <div className="flex items-center justify-center">
                <FaStar className="text-yellow-400 size-5" />
                <FaStar className="text-yellow-400 size-5" />
                <FaStar className="text-yellow-400 size-5" />
                <FaStar className="text-yellow-400 size-5" />
                <FaRegStarHalfStroke className="text-yellow-400 size-5" />
              </div>
            </div>
            <p className="py-4">{feedback}</p>
            <p className="font-semibold text-lg pt-6">{name}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomCard;
