import CustomValueCard from "../../Common/CustomValueCard";
import "./whatweoffer.css";

const HomeWhatWeOffer = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center py-10 px-10 gap-x-6 relative">
      <div
        className="relative lg:w-2/5 sm:mb-6 mb-2 lg:mb-0 w-full self-stretch border-2 border-x-[#0e332e] border-y-[#072420]           
                rounded-xl px-10 sm:px-12 py-14 sm:pt-[14rem] overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-[url('Home1.jpg')] bg-cover bg-center"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-[#051e1ada] to-[#000000] mix-blend-multiply"></div>
        <div className="relative z-10">
          <h3 className="font-raleway  md:text-7xl text-3xl lg:text-3xl font-bold text-white">
            Recruitment services tailored to your needs
          </h3>
          <p className="font-poppins text-lg py-4 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="rounded-full font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] text-white hover:bg-white hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] py-4 w-full sm:w-1/2">
            GET STARTED
          </button>
        </div>
      </div>

      <div className="lg:w-3/5 w-full flex flex-col gap-y-4">
        <div className="flex lg:flex-row flex-col items-center space-x-8 space-y-2">
          <CustomValueCard
            Style={"w-[48%]"}
            heading={"Executive search"}
            text={
              "Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
            svgClass={"e-font-icon-svg e-fab-black-tie w-5 h-5"}
            svgViewBox={"0 0 448 512"}
            svgpath={
              "M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z"
            }
          />

          <CustomValueCard
            Style={"w-[48%]"}
            heading={"Contract search"}
            text={
              "Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
            svgClass={"e-font-icon-svg e-fas-file-contract w-5 h-5"}
            svgViewBox={"0 0 384 512"}
            svgpath={
              "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
            }
          />
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between space-x-8 space-y-2">
          <CustomValueCard
            Style={"w-[48%]"}
            heading={"Executive search"}
            text={
              "Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
            svgClass={"e-font-icon-svg e-fas-suitcase w-5 h-5"}
            svgViewBox={"0 0 512 512"}
            svgpath={
              "M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z"
            }
          />

          <CustomValueCard
            Style={"w-[48%]"}
            heading={"Team development"}
            text={
              "Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley."
            }
            svgClass={"e-font-icon-svg e-fas-hands-helping h-5 w-5"}
            svgViewBox={"0 0 640 512"}
            svgpath={
              "M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomeWhatWeOffer;
