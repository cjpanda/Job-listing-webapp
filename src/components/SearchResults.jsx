import PropTypes from "prop-types";
import JobCard from "./JobCard";

const SearchResults = ({ jobResults }) => {
  console.log("Job Results Length:", jobResults.length);

  // Dummy data for testing
  const dummyData = [
    {
      job_posted_at_datetime_utc: "2022-02-02T12:34:56Z",
      employer_name: "Dummy Company",
      job_title: "Dummy Title",
      job_city: "Dummy City",
      job_country: "Dummy Country",
      job_is_remote: true,
      job_employment_type: "Fulltime",
      job_salary: 50000,
      job_required_experience: "Entry Level",
    },
    // Add more dummy data as needed
  ];

  // Use dummyData if jobResults is empty
  const displayData = jobResults.length > 0 ? jobResults : dummyData;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-light">Search Results</h2>
      {displayData.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
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
    })
  ),
};

export default SearchResults;
