// import CustomHeroSection from "../Common/CustomHeroSection";
// import HomeWhatWeOffer from "../Components/Home/HomeWhatWeOffer";
// import CustomValueCard from "../Common/CustomValueCard";
// import CustomSector from "../Common/CustomSector";
// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const About = () => {
//   const containerRef = useRef(null);
//   const cardsRef = useRef([]);

//   useGSAP(() => {
//     if (!containerRef.current) return;

//     const cards = cardsRef.current.filter(Boolean);

//     cards.forEach((card,) => {
//       if (!card) return;
//       gsap.set(card, {
//         position: "sticky",
//         top: `100px`,
//       });
//       ScrollTrigger.create({
//         trigger: card,
//         // markers: true,

//         start: "top center",
//         end: "bottom center",
//         scrub: 1,
//         onUpdate: (self) => {
//           const progress = self.progress;
//           gsap.to(card, {
//             // rotate: 5 + progress * 10, // Rotate from -5 to +5 degrees
//             scale: 1 - progress * 0.1,
//             // opacity: 1 - progress * 0.3,
//             duration: 0.5,
//           });
//         },
//       });
//     });
//   }, []);

//   const values = [
//     {
//       heading: "Passion",
//       text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//     },
//     {
//       heading: "Innovation",
//       text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//     },
//     {
//       heading: "Excellence",
//       text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//     },
//   ];
//   return (
//     <div className="bg-[#000000] text-white relative py-24">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url('/Home2.jpg')` }}
//       >
//         <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
//       </div>
//       <CustomHeroSection
//         mainStyle={"md:w-3/4 pb-10"}
//         subheading={"ABOUT US"}
//         subheadingStyle={"font-bold font-poppins text-lg py-12 text-[#25caac]"}
//         heading={"Discover why we are voted best in the industry"}
//         headingStyle={"font-bold font-raleway text-5xl"}
//         textPara1={
//           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//         }
//         textParaStyle={"font-poppins text-md py-5"}
//         textPara2={""}
//         buttonText={"Learn More"}
//         buttonStyle={
//           "py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full"
//         }
//         img={"/Home2.jpg"}
//         imgStyle={"absolute inset-0 bg-cover bg-center"}
//         maskStyle={"absolute inset-0 bg-[#091c19] bg-opacity-90"}
//       />

//       {/* WhatWeOffer */}
//       <HomeWhatWeOffer />

//       {/* Values */}
//       <div
//         ref={containerRef}
//         className="flex h-[100vh]  md:flex-row flex-col items-center justify-center py-6 space-x-10 relative z-10"
//       >
//         <CustomHeroSection
//           mainStyle={"pb-10"}
//           subheading={"OUR VALUES"}
//           subheadingStyle={
//             "font-bold font-poppins text-lg py-12 text-[#25caac]"
//           }
//           heading={"Words we lived by"}
//           headingStyle={"font-bold font-raleway text-5xl"}
//           textPara1={
//             "it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
//           }
//           textParaStyle={"font-poppins text-md py-5"}
//           textPara2={""}
//           buttonText={"LET`S WORK"}
//           buttonStyle={
//             "py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full"
//           }
//           img={"/Home2.jpg"}
//           imgStyle={"absolute inset-0 bg-cover bg-center"}
//           maskStyle={"absolute inset-0 bg-[#091c19] bg-opacity-90"}
//         />

//         <div className="md:w-1/2  space-y-10">
//           {values.map((value, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className=" transition-transform duration-300 "
//             >
//               <CustomValueCard
//                 Style={`hover:scale-105  rotate-${
//                   index % 2 === 0 ? "-6" : "6"
//                 } transition-transform duration-300`}
//                 heading={value.heading}
//                 text={value.text}
//                 svgClass={"e-font-icon-svg e-fas-file-contract w-5 h-5"}
//                 svgViewBox={"0 0 384 512"}
//                 svgpath={
//                   "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
//                 }
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div>
//         <CustomSector
//           subHeading={"01 - CONSTRUCTION"}
//           heading={"Hire experts or get hired in the construction sector"}
//           text={
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//           }
//           img={"/Home4.jpg"}
//           button1Text={"LEARN MORE"}
//           button1Style={
//             "py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
//           }
//           button2Text={""}
//           button2Style={""}
//         />

//         <CustomSector
//           subHeading={"02 - TECHNOLOGY"}
//           heading={"Hire experts or get hired in the technology sector"}
//           text={
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//           }
//           img={"/Home4.jpg"}
//           button1Text={"LEARN MORE"}
//           button1Style={
//             "py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
//           }
//           button2Text={""}
//           button2Style={""}
//         />

//         <CustomSector
//           subHeading={"03 - FINANCE"}
//           heading={"Hire experts or get hired in the finance sector"}
//           text={
//             "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
//           }
//           img={"/Home4.jpg"}
//           button1Text={"LEARN MORE"}
//           button1Style={
//             "py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
//           }
//           button2Text={""}
//           button2Style={""}
//         />
//       </div>
//     </div>
//   );
// };

// export default About;



import CustomHeroSection from "../Common/CustomHeroSection";
import HomeWhatWeOffer from "../Components/Home/HomeWhatWeOffer";
import CustomValueCard from "../Common/CustomValueCard";
import CustomSector from "../Common/CustomSector";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const sectorsRef = useRef([]);


  useGSAP(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current.filter(Boolean);

    cards.forEach((card,) => {
      if (!card) return;
      gsap.set(card, {
        position: "sticky",
        top: `100px`,
      });
      ScrollTrigger.create({
        trigger: card,
        // markers: true,

        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(card, {
            // rotate: 5 + progress * 10, // Rotate from -5 to +5 degrees
            scale: 1 - progress * 0.1,
            // opacity: 1 - progress * 0.3,
            duration: 0.5,
          });
        },
      });
    });
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    const sectors = sectorsRef.current.filter(Boolean);

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
            duration: 0.5,
          });
        },
      });
    });
  }, []);

  const values = [
    {
      heading: "Passion",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      heading: "Innovation",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      heading: "Excellence",
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  return (
    <div className="bg-[#000000] text-white relative py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/Home2.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
      </div>
      <CustomHeroSection
        mainStyle={"md:w-3/4 pb-10"}
        subheading={"ABOUT US"}
        subheadingStyle={"font-bold font-poppins text-lg py-12 text-[#25caac]"}
        heading={"Discover why we are voted best in the industry"}
        headingStyle={"font-bold font-raleway text-5xl"}
        textPara1={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        textParaStyle={"font-poppins text-md py-5"}
        textPara2={""}
        buttonText={"Learn More"}
        buttonStyle={
          "py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full"
        }
        img={"/Home2.jpg"}
        imgStyle={"absolute inset-0 bg-cover bg-center"}
        maskStyle={"absolute inset-0 bg-[#091c19] bg-opacity-90"}
      />

      {/* WhatWeOffer */}
      <HomeWhatWeOffer />

      {/* Values */}
      <div
        ref={containerRef}
        className="flex h-[100vh]  md:flex-row flex-col items-center justify-center py-6 space-x-10 relative z-10"
      >
        <CustomHeroSection
          mainStyle={"pb-10"}
          subheading={"OUR VALUES"}
          subheadingStyle={
            "font-bold font-poppins text-lg py-12 text-[#25caac]"
          }
          heading={"Words we lived by"}
          headingStyle={"font-bold font-raleway text-5xl"}
          textPara1={
            "it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
          }
          textParaStyle={"font-poppins text-md py-5"}
          textPara2={""}
          buttonText={"LET`S WORK"}
          buttonStyle={
            "py-3 my-10 px-8 font-bold bg-gradient-to-tr from-[#5e5e5e] to-[#35e985] hover:text-green-500 hover:bg-gradient-to-tr hover:from-[#ffffff] hover:to-[#ffffff] rounded-full"
          }
          img={"/Home2.jpg"}
          imgStyle={"absolute inset-0 bg-cover bg-center"}
          maskStyle={"absolute inset-0 bg-[#091c19] bg-opacity-90"}
        />

        <div className="md:w-1/2  space-y-10">
          {values.map((value, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className=" transition-transform duration-300 "
            >
              <CustomValueCard
                Style={`hover:scale-105  rotate-${
                  index % 2 === 0 ? "-6" : "6"
                } transition-transform duration-300`}
                heading={value.heading}
                text={value.text}
                svgClass={"e-font-icon-svg e-fas-file-contract w-5 h-5"}
                svgViewBox={"0 0 384 512"}
                svgpath={
                  "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 64c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8v-16zm192.81 248H304c8.84 0 16 7.16 16 16s-7.16 16-16 16h-47.19c-16.45 0-31.27-9.14-38.64-23.86-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34a15.986 15.986 0 0 1-14.31 8.84c-.38 0-.75-.02-1.14-.05-6.45-.45-12-4.75-14.03-10.89L144 354.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.77-16.19 54.05-9.7 66 14.16 2.02 4.06 5.96 6.5 10.16 6.5zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"
                }
              />
            </div>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="space-y-20">
        <div ref={(el) => (sectorsRef.current[0] = el)}>
          <CustomSector
            subHeading={"01 - CONSTRUCTION"}
            heading={"Hire experts or get hired in the construction sector"}
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
            img={"/Home4.jpg"}
            button1Text={"LEARN MORE"}
            button1Style={
              "py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
            }
          />
        </div>

        <div ref={(el) => (sectorsRef.current[1] = el)}>
          <CustomSector
            subHeading={"02 - TECHNOLOGY"}
            heading={"Hire experts or get hired in the technology sector"}
            text={
              "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            }
            img={"/Home4.jpg"}
            button1Text={"LEARN MORE"}
            button1Style={
              "py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
            }
          />
        </div>

        <div ref={(el) => (sectorsRef.current[2] = el)}>
          <CustomSector
            subHeading={"03 - FINANCE"}
            heading={"Hire experts or get hired in the finance sector"}
            text={
              "It has survived not only five centuries, but also the leap into electronic typesetting."
            }
            img={"/Home4.jpg"}
            button1Text={"LEARN MORE"}
            button1Style={
              "py-4 px-7 rounded-full bg-gradient-to-tr from-[#27cfa6] to-[#36eb82] font-bold"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;





