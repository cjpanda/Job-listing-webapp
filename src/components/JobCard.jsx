import PropTypes from "prop-types";
import { WiTime4 } from "react-icons/wi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { GoBriefcase } from "react-icons/go";

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
  return (
    <div className="bg-white p-5 w-full mt-10 rounded-md shadow">
      <div className="flex flex-col justify-center mb-5">
        <p className="text-right text-[12px] text-light">
          {/* Format the timestamp as needed */}
          Posted {calculateTimeDifference(job.job_posted_at_datetime_utc)}
        </p>
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

      <div className="flex gap-10 text-secondary">
        <p className="flex items-center gap-2">
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
          <GoBriefcase className="text-2xl " />
          Experience not specified
        </p>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    job_posted_at_datetime_utc: PropTypes.string,
    employer_name: PropTypes.string,
    job_title: PropTypes.string,
    job_city: PropTypes.string,
    job_country: PropTypes.string,
    job_is_remote: PropTypes.bool,
    job_employment_type: PropTypes.string,
    job_salary: PropTypes.number,
  }),
};

export default JobCard;
