/* eslint-disable react/prop-types */
import CustomButton from "./CustomButton";
import CustomCard from "./CustomCard";
const CustomFeedback = ({
  heading,
  text,
  Style,
  BText,
  BStyle,
  link,
  data,
  isJobCard,
}) => {
  return (
    <div className="py-32 relative z-10 px-10">
      <div className={Style}>
        <div>
          <h1 className="font-raleway font-bold text-5xl">{heading}</h1>
          <p className="font-poppins font-light text-lg my-5">{text}</p>
        </div>
        <CustomButton text={BText} style={BStyle} link={link} />
      </div>
      <div className="flex items-center flex-wrap  gap-y-4 justify-center space-x-3 pt-8">
        {data?.map((item, index) => (
          <CustomCard key={index} isJobCard={isJobCard} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CustomFeedback;
