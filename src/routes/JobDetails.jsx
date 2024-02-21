import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { IoArrowBackCircle } from "react-icons/io5";
import PropTypes from "prop-types";
import dummyData from "../services/dummyData";
import { fetchJobs } from "../services/jobService";

const JobDetails = () => {
  const { job_id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        // Check if the job details are already in the dummy data
        const existingJob = dummyData.find((job) => job.job_id === job_id);
        if (existingJob) {
          setJobDetails(existingJob);
          setLoading(false);
        } else {
          // If not found in dummy data, fetch from the API
          const data = await fetchJobs(job_id);
          setJobDetails(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching job details:", error);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [job_id]);

  const handleApplyNow = () => {
    if (jobDetails?.job_apply_link) {
      window.open(jobDetails.job_apply_link, "_blank");
    }
  };

  return (
    <>
      <Navbar />
      <div className="py-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-md font-semibold text-secondary "
        >
          <IoArrowBackCircle className="w-8 h-8 text-primary cursor-pointer" />{" "}
          Back To Jobs
        </Link>
        <div className="py-10">
          <div>
            <h2 className="text-xl pb-2 text-primary font-semibold">
              Employer Name: {jobDetails?.employer_name}{" "}
            </h2>
            <h2 className="text-xl pb-2 text-primary font-semibold">
              Job Title: {jobDetails?.job_title}
            </h2>
          </div>
          <h2 className="text-xl pb-2 text-primary font-semibold">
            Job Description:
          </h2>
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>{" "}
            </div>
          ) : (
            <p className="whitespace-pre-wrap text-secondary pb-10">
              {jobDetails?.job_description}
            </p>
          )}
          <button
            onClick={handleApplyNow}
            className="bg-primary px-20 py-3 text-white rounded-md font-semibold tracking-wider"
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

JobDetails.propTypes = {
  job: PropTypes.shape({
    job_id: PropTypes.string,
    job_description: PropTypes.string,
    employer_name: PropTypes.string,
    job_title: PropTypes.string,
    job_apply_link: PropTypes.string,
  }),
};

export default JobDetails;
