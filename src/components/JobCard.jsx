import PropTypes from "prop-types";
import { WiTime4 } from "react-icons/wi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoBriefcase } from "react-icons/go";
import thumbnail from "../assets/glumos.png";
import { Link } from "react-router-dom";

// Function to calculate the time difference
const calculateTimeDifference = (timestamp) => {
  const currentTime = new Date();
  const postedTime = new Date(timestamp);

  const timeDifference = Math.floor((currentTime - postedTime) / (60 * 1000)); // in minutes

  if (timeDifference < 1) {
    return "just now";
  } else if (timeDifference < 60) {
    return `${timeDifference}m ago`;
  } else if (timeDifference < 1440) {
    return `${Math.floor(timeDifference / 60)}h ago`;
  } else {
    return `${Math.floor(timeDifference / 1440)}d ago`;
  }
};

const JobCard = ({ job }) => {
  const handleApplyNow = () => {
    if (job.job_apply_link) {
      window.open(job.job_apply_link, "_blank");
    }
  };

  return (
    <div className="bg-white p-5 w-full mt-10 rounded-md shadow">
      <p className="text-right text-[12px] text-light">
        {/* Format the timestamp as needed */}
        Posted {calculateTimeDifference(job.job_posted_at_datetime_utc)}
      </p>
      <div className="flex items-center gap-3 pb-2">
        <div className="w-20 ">
          <div>
            <img
              src={job.employer_logo || thumbnail}
              alt="Employer Logo"
              className="rounded-md object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mb-5">
          <p className="text-light text-sm font-[500] ">
            {job.employer_name || "Company Name"}
          </p>
          <p className="text-xl font-semibold text-primary py-1 ">
            {job.job_title || "Frontend Developer"}
          </p>
          <p className="text-[13px] text-light font-medium">
            {job.job_city || "Location City"}, {job.job_country} |{" "}
            {job.job_is_remote ? "Remote work available" : "Not remote"}
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col gap-5 text-secondary">
        <p className="flex items-center gap-2 ">
          <WiTime4 className="text-2xl " />
          {job.job_employment_type || "Fulltime"}
        </p>
        <p className="flex items-center gap-2 ">
          <RiMoneyDollarCircleLine className="text-2xl " />
          {job.job_salary
            ? `$${job.job_salary} a year`
            : "Salary not specified"}
        </p>
        <p className="flex items-center gap-2 ">
          <GoBriefcase className="text-xl " />
          {job.job_required_experience !== null
            ? job.job_required_experience
            : "Experience not specified"}
        </p>
      </div>
      <div className="lg:text-right ">
        <div className="text-left text-light pt-2 pb-5 text-sm">
          {job.job_apply_is_direct ? "Easy Apply" : "No Easy Apply"}{" "}
        </div>
        <div className=" pb-3 flex gap-4 lg:justify-end justify-center">
          <Link
            to={`/job-details/${job.job_id}`}
            className="bg-white border border-primary hover:opacity-80 font-semibold text-sm p-3 px-5  text-secondary rounded-xl"
          >
            See details
          </Link>
          <button
            onClick={handleApplyNow}
            className="bg-primary hover:opacity-80 font-semibold text-sm p-3  px-5 text-white rounded-xl"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    job_id: PropTypes.string,
    job_posted_at_datetime_utc: PropTypes.string,
    employer_name: PropTypes.string,
    job_title: PropTypes.string,
    job_city: PropTypes.string,
    job_country: PropTypes.string,
    job_is_remote: PropTypes.bool,
    job_employment_type: PropTypes.string,
    job_salary: PropTypes.number,
    job_apply_link: PropTypes.string,
    job_apply_is_direct: PropTypes.bool,
    job_required_experience: PropTypes.string,
    employer_logo: PropTypes.string,
  }),
};

export default JobCard;
