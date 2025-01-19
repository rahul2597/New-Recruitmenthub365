/* eslint-disable react/prop-types */

const CustomMapLocation = ({url, style}) => {
  return (
    <iframe src={url}  style={{border:0}} allowfullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={style}></iframe>
  )
}

export default CustomMapLocation;