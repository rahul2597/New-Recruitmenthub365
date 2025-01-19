/* eslint-disable react/prop-types */
import { FaCloudUploadAlt } from "react-icons/fa";
import { handleFileNameChange } from "../Utils/handleFile";
const CustomFileUpload = ({fileName, setFileName}) => {
  return (
    <div className="border-2 border-dashed border-blue-400  
        rounded-lg p-4 bg-blue-50 text-center hover:cursor-pointer hover:bg-blue-100 transition">
        <label htmlFor="fileUpload" className="flex flex-col items-center cursor-pointer">
          <FaCloudUploadAlt className="text-4xl text-blue-600"/>
          <span className="text-blue-600 font-medium"> {fileName || "Click To Upload"}</span>
        </label>
        <input id="fileUpload" type="file" className="hidden" onChange={(event) => handleFileNameChange(event, setFileName)}/>
      </div>
  )
}

export default CustomFileUpload