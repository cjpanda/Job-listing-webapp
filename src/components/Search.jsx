import SearchFilters from "./SearchFilters";
import SearchResults from "./SearchResults";
import Searchbar from "./Searchbar";
import { useState } from "react";
import dummyData from "../services/dummyData";
import { fetchJobs } from "../services/jobService";

const Search = () => {
  const [jobResults, setJobResults] = useState(dummyData);
  const [query, setQuery] = useState("");

  const handleSearch = async (query) => {
    try {
      const results = await fetchJobs(query);

      if (results.status === "OK") {
        const relevantJobs = results.data || [];
        setJobResults(relevantJobs);
      } else {
        console.error("Error response from server:", results.status);
        window.alert("Error from API Server");
      }
    } catch (error) {
      console.error("Error in handleSearch:", error);
      window.alert("Error from API Server");
    }
  };
  // Still Workig on it

  const handleFilterChange = async (query) => {
    try {
      const results = await fetchJobs(query);

      if (results.status === "OK") {
        const relevantJobs = results.data || [];
        setJobResults(relevantJobs);
      } else {
        console.error("Error response from server:", results.status);
        window.alert("Error from API Server");
      }
    } catch (error) {
      console.error("Error in handleFilterChange:", error);
      window.alert("Error from API Server");
    }
  };

  return (
    <>
      <Searchbar onSearch={handleSearch} />
      <div className="lg:grid lg:grid-cols-3 gap-10 pt-20 pb-20 flex flex-col-reverse">
        <div className="col-span-2">
          <SearchResults jobResults={jobResults} />
        </div>
        <div className="col-span-1 mt-10">
          <SearchFilters onFilterChange={handleFilterChange} />
        </div>
      </div>
    </>
  );
};

export default Search;
