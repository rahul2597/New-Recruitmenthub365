/* eslint-disable react/prop-types */

const CustomTextArea = ({style, rows, placeholder}) => {
  return (
    <textarea
        className={style}
        placeholder={placeholder}
        rows={rows}>
    </textarea>
  )
}

export default CustomTextArea