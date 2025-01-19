/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const CustomButton = ({ text, style, link, handleSetShowForm, value }) => {
  if (link) {
    return (
      <Link to={link} className={style}>
        {text}
      </Link>
    );
  }

  return (
    <button
      className={style}
      onClick={(e) => {
        e.preventDefault();
        handleSetShowForm(value);
      }}
    >
      {text}
    </button>
  );
};

export default CustomButton;
