import PropTypes from "prop-types";
import JobCard from "./JobCard";
import dummyData from "../services/dummyData";

const SearchResults = ({ jobResults }) => {
  // Use dummyData if jobResults is empty
  const displayData = jobResults.length > 0 ? jobResults : dummyData;

  return (
    <div>
      {displayData.length > 0 ? (
        displayData.map((job, index) => <JobCard key={index} job={job} />)
      ) : (
        <div className="notification">No jobs match your search criteria.</div>
      )}
    </div>
  );
};

SearchResults.propTypes = {
  jobResults: PropTypes.arrayOf(
    PropTypes.shape({
      job_id: PropTypes.string,
      job_title: PropTypes.string,
      job_description: PropTypes.string,
      employer_name: PropTypes.string,
      job_employment_type: PropTypes.string,
      job_apply_link: PropTypes.string,
      job_city: PropTypes.string,
      job_state: PropTypes.string,
      job_country: PropTypes.string,
      job_is_remote: PropTypes.bool,
      job_posted_at_datetime_utc: PropTypes.string,
      job_apply_is_direct: PropTypes.bool,
    })
  ).isRequired,
};

export default SearchResults;
