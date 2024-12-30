import CustomBlog from "../../Common/CustomBlog";
import CustomFeedback from "../../Common/CustomFeedBack";
import { blogData } from "../../Data/blogCard";

const HomeBlogs = () => {
  return (
    <div className="">
      <CustomFeedback
        heading={"Read blogs and insights"}
        text={
          "Lorem Ipsum has been the industry`s standard dummy text ever since the 1500."
        }
        Style={"flex md:flex-row flex-col items-center justify-between"}
        BText={"READ MORE"}
        BStyle={
          "py-4 px-10 font-bold font-poppins rounded-full bg-gradient-to-r from-[#27cea8] to-[#37ed80]"
        }
      />
      <div className="flex flex-wrap items-center justify-center space-x-8 px-10">
        {blogData.slice(0, 3).map((blog, index) => (
          <CustomBlog
            key={index}
            img={blog.blogImg}
            heading={`${blog.blogHeading.substring(0, 50)}...`}
            text={`${blog.blogText.substring(0, 500)}...`}
            link={blog.blogLink}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
