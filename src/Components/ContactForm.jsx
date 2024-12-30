import CustomButton from "../Common/CustomButton";
import CustomInput from "../Common/CustomInput";
import CustomTextArea from "../Common/CustomTextArea";
const ContactForm = () => {
  return (
    <div className="w-[100%]">
      <CustomInput
        placeholder={"Name"}
        type={"text"}
        style={
          "my-4 w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
        }
      />
      <div className="w-full flex items-center justify-between space-x-8">
        {/* Email Input */}
        <CustomInput
          placeholder={"Email"}
          type={"email"}
          style={
            "w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
          }
        />
        {/* Tel Input */}
        <CustomInput
          placeholder={"Phone"}
          type={"tel"}
          style={
            "w-full py-3 px-4 bg-[#06221d] text-white text-lg rounded focus:outline-none"
          }
        />
      </div>
      <CustomTextArea style={'w-full h-60 bg-[#06221d] p-4 rounded font-poppins text-lg my-4 focus:outline-none'} placeholder={'message'} rows={'5'} />
      <CustomButton
        link={""}
        text={"SUBMIT"}
        style={
          "my-4 py-3 px-10 rounded-md bg-gradient-to-r from-[#27cfa6] to-[#36eb82] font-bold hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#ffffff] hover:text-green-600"
        }
      />
    </div>
  );
};

export default ContactForm;
