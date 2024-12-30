/* eslint-disable react/prop-types */

const CustomValueCard = ({
  style,
  heading,
  text,
  svgClass,
  svgViewBox,
  svgpath,
}) => {
  return (
    <div
      className={`border-2 border-x-[#0e332e] border-y-[#072420] px-8 py-4 rounded-lg bg-gradient-to-bl from-[#051e1a] to-[#000000] ${style}`}
    >
      <div className="p-2.5 bg-[#516561] rounded-sm inline-block mb-8">
        <svg
          aria-hidden="true"
          className={svgClass}
          viewBox={svgViewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgpath}></path>
        </svg>
      </div>
      <h3 className="font-raleway text-2xl font-bold">{heading}</h3>
      <p className="font-poppins text-md py-4">{text}</p>
    </div>
  );
};

export default CustomValueCard;
