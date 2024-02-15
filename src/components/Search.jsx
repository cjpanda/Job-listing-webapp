import SearchFilters from "./SearchFilters";
import SearchResults from "./SearchResults";
import Searchbar from "./Searchbar";
import { useState } from "react";
import dummyData from "../services/dummyData";
import { fetchJobs } from "../services/jobService";

const Search = () => {
  const [jobResults, setJobResults] = useState(dummyData);

  const handleSearch = async (query) => {
    try {
      // Split the query into job title, city, and country
      const [jobTitle, location] = query.split(" in ");
      const [city, country] = location.split(", ");
      const results = await fetchJobs(jobTitle, city, country);

      console.log("Raw API Response:", results);

      if (results.status === "OK") {
        const relevantJobs = results.data || [];
        console.log("Relevant Jobs:", relevantJobs);

        // Set the job results in state
        setJobResults(relevantJobs);
      } else {
        console.error("Error response from server:", results.status);
      }
    } catch (error) {
      console.error("Error in handleSearch:", error);
    }
  };

  // Still Workig on it

  const handleFilterChange = async (query) => {
    try {
      if (!query) {
        // Query is undefined or null, handle this case appropriately
        return;
      }

      const [jobTitle, location] = query.split(" in ");
      const [city, country] = location.split(", ");

      // Fetch jobs with filters
      const results = await fetchJobs(jobTitle, city, country);

      console.log("Raw API Response:", results);

      if (results.status === "OK") {
        const relevantJobs = results.data || [];
        console.log("Relevant Jobs:", relevantJobs);

        // Set the job results in state
        setJobResults(relevantJobs);
      } else {
        console.error("Error response from server:", results.status);
      }
    } catch (error) {
      console.error("Error in handleFilterChange:", error);
    }
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      <div className="lg:grid lg:grid-cols-3 gap-10 pt-20 pb-20 flex flex-col-reverse">
        {/* SearchResults */}
        <div className="col-span-2">
          <SearchResults jobResults={jobResults} />
        </div>

        {/* SearchFilters */}
        <div className="col-span-1 mt-10">
          <SearchFilters onFilterChange={handleFilterChange} />
        </div>
      </div>
    </>
  );
};

export default Search;
