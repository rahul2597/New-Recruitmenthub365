/* eslint-disable react/prop-types */

import CustomButton from "./CustomButton"

const CustomHeroSection = ({subheading, mainStyle, subheadingStyle, heading, headingStyle, textPara1, textParaStyle, textPara2, buttonText, buttonStyle, buttonLink}) => {
  return (
    <div className={`relative z-10 overflow-hidden px-10 ${mainStyle}`}>
      <h4 className={subheadingStyle}>{subheading}</h4>
      <h1 className={headingStyle}>{heading}</h1>
      <p className={textParaStyle}>{textPara1}</p>
      <p className={textParaStyle}>{textPara2}</p>
      <CustomButton text={buttonText} style={buttonStyle} link={buttonLink} />
    </div>

  )
}

export default CustomHeroSection