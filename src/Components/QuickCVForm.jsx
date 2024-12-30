/* eslint-disable react/prop-types */
import { useState } from "react";
import CustomButton from "../Common/CustomButton";
import CustomFileUpload from "../Common/CustomFileUpload";
import CustomInput from "../Common/CustomInput";
import CustomTextArea from "../Common/CustomTextArea";

const QuickCVForm = ({ isVisible, onClose }) => {
  const [fileName, setFileName] = useState("");
  if (!isVisible) return null;

  return (
    <div className="inset-0 flex items-center justify-center z-50 w-full bg-opacity-50 py-5 text-white">
      <div className="bg-white shadow-lg md:w-3/5 w-full relative max-h-[80vh] overflow-y-auto">
        <div className="py-5  bg-green-900">
          <CustomButton
            text={"×"}
            style={
              "absolute text-4xl top-2 right-5 text-2xl text-gray-500 hover:text-gray-800"
            }
            link={""}
            handleSetShowForm={onClose}
            value={""}
          />
          <h2 className=" text-2xl font-raleway font-semibold mb-4 text-center">
            Register with us so we can help you find a job
          </h2>
        </div>
        <form className="space-y-4 p-5">
          <div className="w-full  flex items-center justify-between space-x-8">
            <CustomInput
              placeholder={"First Name"}
              type={"text"}
              style={
                "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
              }
            />

            <CustomInput
              placeholder={"text"}
              type={"Last Name"}
              style={
                "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
              }
            />
          </div>
          <CustomInput
            placeholder={"Personal Email"}
            type={"email"}
            style={
              "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            }
          />
          <CustomInput
            placeholder={"Phone Number"}
            type={"tel"}
            style={
              "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            }
          />
          <div className="w-full flex items-center justify-between space-x-8">
            <CustomInput
              placeholder={"City"}
              type={"text"}
              style={
                "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
              }
            />

            <CustomInput
              placeholder={"Country"}
              type={"text"}
              style={
                "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
              }
            />
          </div>
          <CustomInput
            placeholder={"LinkedIn Profile"}
            type={"text"}
            style={
              "w-full py-2 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
            }
          />
          <CustomFileUpload fileName={fileName} setFileName={setFileName} />

          <CustomTextArea style={'w-full bg-[#06221d] py-2 px-4 rounded font-poppins text-lg my-4 focus:outline-none'} placeholder={"Your Key Skills"} rows={'1'} />
          
          <CustomTextArea style={'w-full bg-[#06221d] py-2 px-4 rounded font-poppins text-lg my-4 focus:outline-none'} placeholder={"Tell us About Yourself"} rows={'4'} />

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickCVForm;
