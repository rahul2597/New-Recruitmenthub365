/* eslint-disable react/prop-types */
import CustomSelect from "../Common/CustomSelect";
import CustomInput from "../Common/CustomInput";
import {
  jobTitle,
  jobType,
  location,
  experience,
  remote,
} from "../Data/jobFilter";

const Filter = ({
  searchValue,
  setSearchValue,
  selectValues,
  setSelectValues,
}) => {
  const handleSelectChange = (key, value) => {
    setSelectValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="px-10 py-6">
      <div className="flex items-center justify-center space-x-5 relative z-10 pb-2">
        <CustomInput
          placeholder={"Search by job title"}
          type={"text"}
          style={
            "w-full py-3 px-4 bg-white text-black text-lg rounded focus:outline-none"
          }
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center space-x-5 relative z-10 pt-2 text-black">
        <CustomSelect
          options={jobTitle}
          value={selectValues.jobTitle}
          onChange={(value) => handleSelectChange("jobTitle", value)}
          placeholder={"Job Title"}
        />
        <CustomSelect
          options={jobType}
          value={selectValues.jobType}
          onChange={(value) => handleSelectChange("jobType", value)}
          placeholder={"Job Type"}
        />
        <CustomSelect
          options={experience}
          value={selectValues.experience}
          onChange={(value) => handleSelectChange("experience", value)}
          placeholder={"Experience"}
        />
        <CustomSelect
          options={location}
          value={selectValues.location}
          onChange={(value) => handleSelectChange("location", value)}
          placeholder={"Location"}
        />
        <CustomSelect
          options={remote}
          value={selectValues.remote}
          onChange={(value) => handleSelectChange("remote", value)}
          placeholder={"Remote"}
        />
      </div>
    </div>
  );
};

export default Filter;