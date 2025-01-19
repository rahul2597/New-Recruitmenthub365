import CustomButton from "../../Common/CustomButton";
// import CustomInput from "../../Common/CustomInput"
// import { IoSearchOutline } from "react-icons/io5";
import "./hero.css";
import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.jpg";
import blog3 from "../../../public/blog3.jpg";
import RoundedHexagon from "./RoundedHexagon";

const HomeHeroSection = () => {
  return (
    <div
      style={{
        background: `linear-gradient(to bottom, #020b09ee 10%, #020b0900 50%, #020b09 90%)`,
      }}
      className="flex md:flex-row flex-col items-center justify-center py-10 px-10 relative z-10"
    >
      <div className="md:w-3/5 w-full">
        <h2 className="text-[#25caac] font-poppins font-bold py-6 text-2xl">
<<<<<<< HEAD
          REDEFINING RECRUITMENT 
=======
          REDEFINING RECRUITMENT
>>>>>>> dfe8186096c0e7f58fa581c9f2aa49831a5e1dd8
        </h2>
        <h1 className="font-bold font-raleway md:text-5xl text-4xl  lg:text-6xl sm:pr-10 pb-10 leading-normal">
          Enabling positive change through the connection of professionals.
        </h1>
        <p className="font-poppins text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry`s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="flex md:flex-row md:pr-4 flex-col gap-y-2 items-center justify-start py-10 space-x-8">
          {/* <CustomInput placeholder={'Keywords'} style={'w-1/2 py-4 px-12 rounded-full font-medium bg-gray-600 border border-green-900 focus:outline-none text-lg'} type={'text'} icon={<IoSearchOutline className="absolute size-6 text-green-500 top-[30%] left-[4%]" />} /> */}
          <input
            type="text"
            placeholder="Keywords"
            className="py-4 w-full  px-12 rounded-full font-medium bg-gray-600 border border-green-900 focus:outline-none text-lg"
          />

          <CustomButton
            text={"SEARCH JOBS"}
            link={"/jobs"}
            style={
              "py-4 text-center  px-10 w-full md:w-2/5 text-lg font-semibold font-poppins rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80] hover:bg-gradient-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-green-500"
            }
          />
        </div>
      </div>
      <div className="md:w-2/5 w-full px-0 relative overflow-hidden flex justify-center items-center">
        {/* Column 1 */}
        <div className="space-y-6 animate-up-down">
          <RoundedHexagon imageUrl={blog1} />
          <RoundedHexagon imageUrl={blog2} />
          <RoundedHexagon imageUrl={blog3} />
        </div>

        {/* Column 2 with overlay */}
        <div className="space-y-6 animate-up-down-slow ml-10 relative">
          <RoundedHexagon imageUrl={blog3} />
          <RoundedHexagon imageUrl={blog1} />
          <RoundedHexagon imageUrl={blog2} />

          {/* Overlay */}
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, #020b09ee 10%, #020b0900 50%, #020b09 90%)`,
            zIndex: 10,
          }}
        ></div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
