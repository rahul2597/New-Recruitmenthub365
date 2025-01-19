import { CustomEmployer } from "../Common/CustomEmployer";
import CustomFeedback from "../Common/CustomFeedBack";
import CustomHeroSection from "../Common/CustomHeroSection";
import { Employers, HeroSection } from "../Data/EmployerData";
import { feedbackData } from "../Data/feedbackData";
import CustomSector from "../Common/CustomSector";
import "./employer.css";
const Employer = () => {
  return (
    <div className="bg-[#000000] text-white relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/Home2.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
      </div>

      <CustomHeroSection
        mainStyle={" pb-10"}
        subheading={HeroSection.subheading}
        subheadingStyle={HeroSection.subheadingStyle}
        heading={HeroSection.heading}
        headingStyle={HeroSection.headingStyle}
        textPara1={HeroSection.textPara1}
        textParaStyle={HeroSection.textParaStyle}
        textPara2={HeroSection.textPara2}
        buttonText={HeroSection.buttonText}
        buttonStyle={HeroSection.buttonStyle}
        img={HeroSection.img}
        imgStyle={HeroSection.imgStyle}
        imageSide={HeroSection.imageSide}
      />

      <div className="flex  flex-col py-20 relative z-10 px-10">
        <h1 className="font-raleway font-bold text-4xl">Meet the Employers</h1>
        <p className="font-poppins text-lg py-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          explicabo maiores necessitatibus id fugiat dignissimos ut, dolorum
          accusantium, quis nesciunt sint adipisci. Repudiandae sapiente
          doloremque explicabo omnis, debitis mollitia adipisci, incidunt quis
          iste consectetur quia ea magnam ut eaque quibusdam.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center space-x-4">
          {Employers.map((employer, index) => (
            <CustomEmployer
              key={index}
              img={employer.img}
              imgStyle={employer.imgStyle}
              name={employer.name}
              title={employer.title}
              about={employer.about}
              linkedInLink={employer.linkedInLink}
              instaLink={employer.instaLink}
              twitterLink={employer.twitterLink}
            />
          ))}
        </div>
      </div>

      <CustomSector
        subHeading={"GET IN TOUCH"}
        heading={"Ready to build a future with us?"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s."
        }
        img={"/employer1.jpg"}
        button1Text={"SUBMIT VACANCY"}
        button1Style={
          "py-4 px-7 sm:w-max w-full rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
        }
        button2Text={"SUBMIT RESUME"}
        button2Style={
          "py-4 px-7 sm:w-max w-full rounded-full bg-transparent border-2 border-[#38ef7d] font-bold"
        }
      />

      <CustomFeedback
        heading={"What people say about us"}
        text={
          "Lorem Ipsum has been the industry`s standard dummy text ever since the 1500."
        }
        Style={"flex md:flex-row flex-col items-center justify-between"}
        BText={"LET`S WORK"}
        BStyle={
          "py-4 px-10 font-bold font-poppins rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80]"
        }
        link={"/contact"}
        isJobCard={"feedbackCard"}
        data={feedbackData}
      />
    </div>
  );
};

export default Employer;
