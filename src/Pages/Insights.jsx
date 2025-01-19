import CustomHeroSection from "../Common/CustomHeroSection";
import { blogData, HeroSection } from "../Data/blogCard";
import CustomBlog from "../Common/CustomBlog";
import CustomPagination from "../Common/CustomPagination";
import { useState } from "react";
const Insights = () => {
  const blogPerPage = 6;
  const [currentpage, setCurrentPage] = useState(1);

  const totalpages = Math.ceil(blogData.length / blogPerPage);

  const startIndex = (currentpage - 1) * blogPerPage;
  const currentBlogs = blogData.slice(startIndex, startIndex + blogPerPage);

  // const pagination = Array.from({length: totalpages}, (_, index)=>index+1);

  const handlepageChanges = (page) => {
    if (page >= 1 && page <= totalpages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-[#000000] text-white relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/Home2.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#091c19] bg-opacity-90"></div>
      </div>
      <CustomHeroSection
        mainStyle={"pb-10"}
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

      <div className="flex flex-wrap items-center justify-center space-x-2 p-8 w-screen">
        {currentBlogs.map((blog, index) => (
          <CustomBlog
            key={index}
            img={blog.blogImg}
            heading={`${blog.blogHeading.substring(0, 50)}...`}
            text={`${blog.blogText.substring(0, 500)}...`}
            link={blog.blogLink}
          />
        ))}
      </div>
      <div className=" relative z-10 flex items-start justify-end px-10">
        <CustomPagination
          currentpage={currentBlogs}
          totalpages={totalpages}
          onPageChange={handlepageChanges}
        />
      </div>
    </div>
  );
};

export default Insights;
