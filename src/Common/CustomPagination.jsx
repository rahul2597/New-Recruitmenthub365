/* eslint-disable react/prop-types */

const CustomPagination = ({ currentPage, totalpages, onPageChange }) => {
  return (
    <div className="flex items-center gap-2 justify-center font-poppins text-white space-x-3">
      <p
        className={`text-4xl cursor-pointer ${
          currentPage === 1 ? "text-gray-500" : "hover:text-green-500"
        }`}
        onClick={() => {
          if (currentPage > 1) onPageChange(currentPage - 1);
        }}
      >
        «
      </p>
      {Array.from({ length: totalpages }, (_, index) => (
        <p
          className={`text-lg font-bold cursor-pointer ${
            currentPage === index + 1
              ? "text-green-800"
              : " hover:text-green-500"
          }`}
          key={index}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </p>
      ))}
      <p
        className={`text-4xl cursor-pointer ${
          currentPage === totalpages ? "text-gray-500" : "hover:text-green-500"
        }`}
        onClick={() => {
          if (currentPage < totalpages) onPageChange(currentPage + 1);
        }}
      >
        »
      </p>
    </div>
  );
};

export default CustomPagination;
