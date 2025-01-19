import CustomContactInfo from "../Common/CustomContactInfo";
import CustomHeroSection from "../Common/CustomHeroSection";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import CustomButton from "../Common/CustomButton";
import { useState } from "react";
import CustomMapLocation from "../Common/CustomMapLocation";
import ContactForm from "../Components/ContactForm";
import FindTalentForm from "../Common/FindTalentForm";
import RegisterForm from "../Common/RegisterForm";
const Contact = () => {
  const [showForm, setShowForm] = useState(1);
  const socials = [
    {
      site: <FaLinkedinIn size="20" />,
    },
    {
      site: <FaInstagram size="20" />,
    },
    {
      site: <FaTwitter size="20" />,
    },
  ];

  const handleSetShowForm = (value) => {
    console.log("Button clicked with value:", value);
    setShowForm(value);
  };

  return (
    <div className="bg-[#000000] text-white relative py-24 z-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/Home2.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
      </div>

      <CustomHeroSection
        mainStyle={" pb-10"}
        subheading={"CONTACT US"}
        subheadingStyle={"font-bold font-poppins text-lg py-12 text-[#25caac]"}
        heading={"Get in touch with us and get started"}
        headingStyle={"font-bold font-raleway text-5xl"}
        textPara1={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley."
        }
        textParaStyle={"font-poppins text-md py-5"}
        textPara2={""}
        buttonText={"LET`S CONNECT"}
        buttonStyle={
          "py-3 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full"
        }
        buttonLink={"#"}
        img={"/Home2.jpg"}
        imgStyle={"absolute inset-0 bg-cover bg-center"}
        maskStyle={"absolute inset-0 bg-[#091c19] bg-opacity-90"}
      />

      <div className="flex lg:flex-row flex-col justify-between px-10 py-16 z-10 space-x-8 relative">
        <div className="md:w-1/3 w-full">
          <CustomContactInfo
            heading={"Leave us a message"}
            address={" Sector 5, 35 Clarence Street,, Baner, Pune"}
            email={"hr@recruitmenthub365.com"}
            phone={"+91 7908902209"}
            socials={socials}
          />
          {/* <CustomMapLocation
            url={
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.6029323676985!2d76.7259526738552!3d30.67330778850525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feeab8d934cc7%3A0x1b68ad695c2cad66!2s2407%2C%20Sector%2066%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160062!5e0!3m2!1sen!2sin!4v1734720071264!5m2!1sen!2sin"
            }
            style={"my-4 w-full min-h-[270px] rounded"}
          /> */}

          <CustomMapLocation
          url={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.6674483134914!2d73.78299657493124!3d18.5586139873827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf812e6cdd55%3A0x6b119857ae5c62e5!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1734720071264!5m2!1sen!2sin"
          }
         style={"my-4 w-full min-h-[270px] rounded"}
       />

        </div>
        <div className="md:w-2/3 w-full">
          <div className="flex md:flex-row flex-col space-x-3">
            <CustomButton
              text={"CONTACT US"}
              link={""}
              style={
                `py-4 md:my-10 my-2 px-12 font-bold hover:bg-gradient-to-r hover:from-[#36eb82] hover:to-[#27cea6] rounded-lg ${showForm === 1 ? "bg-gradient-to-r from-[#36eb82] to-[#27cea6]" : "bg-gradient-to-r from-[#06221d] to-[#06221d]"}`
              }
              value={1}
              handleSetShowForm={handleSetShowForm}
            />

            <CustomButton
              text={"FIND TALENT"}
              link={""}
              style={
                `py-4 md:my-10 my-2 px-12 font-bold hover:bg-gradient-to-r hover:from-[#36eb82] hover:to-[#27cea6] rounded-lg ${showForm === 2 ? "bg-gradient-to-r from-[#36eb82] to-[#27cea6]" : "bg-gradient-to-r from-[#06221d] to-[#06221d]"}`
              }
              value={2}
              handleSetShowForm={handleSetShowForm}
            />

            <CustomButton
              text={"REGISTER NOW"}
              link={""}
              style={
                `py-4 md:my-10 my-2 px-12 font-bold hover:bg-gradient-to-r hover:from-[#36eb82] hover:to-[#27cea6] rounded-lg ${showForm === 3 ? "bg-gradient-to-r from-[#36eb82] to-[#27cea6]" : "bg-gradient-to-r from-[#06221d] to-[#06221d]"}`
              }
              value={3}
              handleSetShowForm={handleSetShowForm}
            />
          </div>
          <div className="flex flex-col w-full">
            {showForm === 1 && <ContactForm />}
            {showForm === 2 && <FindTalentForm />}
            {showForm === 3 && <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
