/* eslint-disable react/prop-types */

const CustomWhatWeOffer = ({mainStyle, maskStyle1, maskStyle2, secondaryStyle, heading, headingStyle, text, textStyle, button, buttonStyle, svg}) => {
  return (
    <div className={mainStyle}>
        {maskStyle1 && <div className={maskStyle1}></div>}
        {maskStyle2 && <div className={maskStyle2}></div>}
        {
          svg &&
            <div className={svg.svgParentStyle}>
          <svg
            aria-hidden="true"
            className={svg.svgStyle}
            viewBox={svg.svgViewBox}
            xmlns="http://www.w3.org/2000/svg">
            <g dangerouslySetInnerHTML={{ __html: svg.svgPath }} />
          </svg>
        </div>
        }
        {
          secondaryStyle ? 
          <div className={secondaryStyle}>
            <h3 className={headingStyle}>{heading}</h3>
            <p className={textStyle}>{text}</p>
            <button className={buttonStyle}>{button}</button>
        </div> 
        :
        <>
          <h3 className={headingStyle}>{heading}</h3>
          <p className={textStyle}>{text}</p>
        </>   
        }
    </div>
  )
}

export default CustomWhatWeOffer