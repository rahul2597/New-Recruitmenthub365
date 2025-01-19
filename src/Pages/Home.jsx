import CustomFeedback from "../Common/CustomFeedBack";
import CustomHeroSection from "../Common/CustomHeroSection";
import HomeBlogs from "../Components/Home/HomeBlogs";
import HomeHeroSection from "../Components/Home/HomeHeroSection";
import HomeWhatWeOffer from "../Components/Home/HomeWhatWeOffer";
import CustomSector from "../Common/CustomSector";
import { jobData } from "../Data/jobData";
import { feedbackData } from "../Data/feedbackData";
import "./home.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import PopupForm from "../Components/QuickCVForm";

const Home = () => {
  const containerRef = useRef(null);
  const sectorsRef = useRef([]);

  useGSAP(() => {
    if (!containerRef.current) return;

    const sectors = sectorsRef.current;

    sectors.forEach((sector, index) => {
      gsap.set(sector, {
        position: "sticky",
        top: `${index * 60}px`,
      });

      ScrollTrigger.create({
        trigger: sector,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(sector, {
            scale: 1 - progress * 0.1,
            // opacity: 1 - progress * 0.3,
            duration: 0.5,
          });
        },
      });
    });
  }, []);
  return (
    <div className="bg-[#000000] text-white relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-gradient-to-br from-[#051a16] to-[#020b09]"

        // style={{ backgroundImage: `url('/Home2.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
      </div>
      <PopupForm />
      <HomeHeroSection />
      <HomeWhatWeOffer />

      {/* WhatweOffer */}
      {/* <div className="flex items-center justify-center py-10 gap-x-6">
          <CustomWhatWeOffer mainStyle={whatWeOffer[0].mainStyle} maskStyle1={whatWeOffer[0].maskStyle1} maskStyle2={whatWeOffer[0].maskStyle2} secondaryStyle={whatWeOffer[0].secondaryStyle} heading={whatWeOffer[0].heading} headingStyle={whatWeOffer[0].headingStyle} text={whatWeOffer[0].text} textStyle={whatWeOffer[0].textStyle} button={whatWeOffer[0].button} buttonStyle={whatWeOffer[0].buttonStyle} svg={whatWeOffer[0].svg} />
          <div className="w-3/5 flex flex-wrap items-center justify-center gap-y-4">
            {whatWeOffer.slice(1).map((item, index)=>(
              <CustomWhatWeOffer key={index} mainStyle={item.mainStyle} maskStyle1={item.maskStyle1} maskStyle2={item.maskStyle2} secondaryStyle={item.secondaryStyle} heading={item.heading} headingStyle={item.headingStyle} text={item.text} textStyle={item.textStyle} button={item.button} buttonStyle={item.buttonStyle} svg={item.svg} />
            )) }
          </div>
        </div> */}

      {/* HomeWhoWeAre */}
      <CustomHeroSection
        mainStyle={"w-full pb-10"}
        subheading={"WHO WE ARE"}
        subheadingStyle={"font-bold font-poppins text-lg py-16 text-[#25caac]"}
        heading={"What sets us apart from our competitors"}
        headingStyle={"font-bold font-raleway text-5xl"}
        textPara1={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        textParaStyle={"font-poppins text-md py-4"}
        textPara2={
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        buttonText={"Learn More"}
        buttonStyle={
          "py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full"
        }
      />

      {/* SECTOR */}
      <div ref={containerRef} className="py-20">
        <div className="space-y-32">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              ref={(el) => (sectorsRef.current[index] = el)}
              className="flex justify-center"
            >
              <CustomSector
                subHeading={"GET IN TOUCH"}
                heading={"Ready to build a future with us?"}
                text={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s."
                }
                img={"/Home4.jpg"}
                button1Text={"SUBMIT VACANCY"}
                button1Style={
                  "py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
                }
                button2Text={"SUBMIT RESUME"}
                button2Style={
                  "py-4 px-7 rounded-full bg-transparent border-2 border-[#38ef7d] font-bold"
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* JobSearch */}
      <CustomFeedback
        heading={"Find your perfect match"}
        text={
          "Lorem Ipsum has been the industry`s standard dummy text ever since the 1500."
        }
        Style={"flex md:flex-row flex-col items-center justify-between"}
        BText={"VIEW ALL JOBS"}
        BStyle={
          "py-4 px-10 font-bold font-poppins rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80]"
        }
        link={"/jobs"}
        isJobCard={"jobCard"}
        data={jobData}
      />

      {/* HomeHowCanWeHelpYou */}
      <CustomHeroSection
        mainStyle={" pb-10"}
        subheading={"HOW CAN WE HELP YOU"}
        subheadingStyle={"font-bold font-poppins text-lg py-16 text-[#25caac]"}
        heading={"Your journey can be our next sucess story"}
        headingStyle={"font-bold font-raleway text-5xl"}
        textPara1={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        textParaStyle={"font-poppins text-md pt-2 pb-5"}
        textPara2={
          "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        buttonText={"GET STARTED"}
        buttonStyle={
          "py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full"
        }
      />

      {/* GetinTouch */}
      <CustomSector
        subHeading={"GET IN TOUCH"}
        heading={"Ready to build a future with us?"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s."
        }
        img={"/Home4.jpg"}
        button1Text={"SUBMIT VACANCY"}
        button1Style={
          "py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
        }
        button2Text={"SUBMIT RESUME"}
        button2Style={
          "py-4 px-7 rounded-full bg-transparent border-2 border-[#38ef7d] font-bold"
        }
      />

      {/* Feedback */}
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

      <HomeBlogs />
    </div>
  );
};

export default Home;
