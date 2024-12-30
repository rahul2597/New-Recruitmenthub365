/* eslint-disable react/prop-types */

const CustomInput = ({placeholder, type, style, icon, value, onChange}) => {
  return (
    <div className="font-poppins w-full relative">
      {icon}
      <input type={type} value={value} onChange={onChange} placeholder={placeholder} className={style} />
    </div>
  )
}

export default CustomInput;