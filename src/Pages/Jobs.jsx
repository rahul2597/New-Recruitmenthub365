import { useState, useEffect } from "react";
import CustomCard from "../Common/CustomCard";
import CustomHeroSection from "../Common/CustomHeroSection";
import { jobData } from "../Data/jobData";
import Filter from "../Components/Filter";

const Jobs = () => {
  const [favourite, setFavourite] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [selectValues, setSelectValues] = useState({
    jobTitle: "",
    jobType: "",
    location: "",
    experience: "",
    remote: "",
  });
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleAddToFav = (id) => {
    setFavourite((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filter jobs based on current state
  useEffect(() => {
    const filterJobs = () => {
      const filtered = jobData.filter((job) => {
        // Convert search terms to lowercase for case-insensitive comparison
        const searchTerm = searchValue.toLowerCase();
        const jobTitle = job.jobTitle?.toLowerCase() || "";
        const technologies = job.technologies?.toLowerCase() || "";
        const description = job.description?.toLowerCase() || "";

        // Check if job matches search term
        const matchesSearch = 
          !searchValue || 
          jobTitle.includes(searchTerm) || 
          technologies.includes(searchTerm) || 
          description.includes(searchTerm);

        // Check if job matches selected filters
        const matchesJobTitle = !selectValues.jobTitle || job.jobTitle === selectValues.jobTitle;
        const matchesJobType = !selectValues.jobType || job.jobType.includes(selectValues.jobType);
        const matchesLocation = !selectValues.location || job.location === selectValues.location;
        const matchesExperience = !selectValues.experience || job.experience === selectValues.experience;
        const matchesRemote = !selectValues.remote || (
          selectValues.remote === "Remote Only" ? job.jobType.includes("Remote") :
          selectValues.remote === "On-Site" ? !job.jobType.includes("Remote") :
          selectValues.remote === "Hybrid" ? job.jobType.includes("Hybrid") : true
        );

        // Return true only if all conditions are met
        return (
          matchesSearch &&
          matchesJobTitle &&
          matchesJobType &&
          matchesLocation &&
          matchesExperience &&
          matchesRemote
        );
      });

      setFilteredJobs(filtered);
    };

    filterJobs();
  }, [searchValue, selectValues]);

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
        subheading={"JOB BOARD"}
        subheadingStyle={"font-bold font-poppins text-lg py-12 text-[#25caac]"}
        heading={"Browse our jobs"}
        headingStyle={"font-bold font-raleway text-5xl"}
        textPara1={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
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

      <Filter
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectValues={selectValues}
        setSelectValues={setSelectValues}
        
      />

      <div className="flex flex-wrap gap-3 items-center justify-center relative z-10 px-10 ">
        {filteredJobs.map((job, index) => (
          <CustomCard
            key={index}
            isJobCard={"jobCard"}
            item={job}
            favourite={favourite[job.id]}
            jobAddToFav={() => handleAddToFav(job.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;