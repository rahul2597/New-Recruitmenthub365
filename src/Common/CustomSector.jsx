/* eslint-disable react/prop-types */
import CustomButton from "./CustomButton";
const CustomSector = ({
  heading,
  subHeading,
  text,
  img,
  button1Text,
  button2Text,
  button1Style,
  button2Style,
}) => {
  return (
    <div
      className={
        "rounded-xl relative border-2 border-l-[#1a6b5d] border-t-[#0a3830] border-r-[#0a3830] border-b-[#0c3b33] bg-cover mb-8 bg-right mx-10 overflow-hidden"
      }
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className=" text-white p-8 md:p-16 relative z-10">
        <h3 className="text-[#20ae94] font-poppins font-bold text-lg pb-8 md:pb-12">
          {subHeading}
        </h3>
        <h1 className="font-raleway font-bold md:text-5xl text-3xl">
          {heading}
        </h1>
        <p className="font-poppins text-lg font-light py-6">{text}</p>
        <div className="flex flex-wrap gap-3 items-center space-x-6 mt-10">
          <CustomButton text={button1Text} style={button1Style} />
          <CustomButton text={button2Text} style={button2Style} />
        </div>
      </div>
    </div>
  );
};

export default CustomSector;
