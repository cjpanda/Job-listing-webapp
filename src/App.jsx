import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SearchResults from "./components/SearchResults";
import SearchFilters from "./components/SearchFilters";
import Searchbar from "./components/Searchbar";
import { useState } from "react";
import dummyData from "./services/dummyData";
import { fetchJobs } from "./services/jobService";

function App() {
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

  const handleFilterChange = async (query, location) => {
    try {
      if (!query) {
        // Query is undefined or null, handle this case appropriately
        return;
      }

      const [jobTitle, locationFilter] = query.split(" in ");
      if (!locationFilter && !location) {
        // Location is not present in the query or provided separately, handle this case appropriately
        return;
      }

      // Extract city and country from either the location in the query or the separate location parameter
      const [city, country] = locationFilter
        ? locationFilter.split(", ")
        : location.split(", ");

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
      <div className="max-width padding-x">
        <div className="flex flex-1 items-center justify-between pt-10">
          <h2 className="text-3xl font-bold text-primary">glumos</h2>
          <ul className="flex gap-10 font-bold">
            <li className="text-light cursor-pointer">Login</li>
            <li className="text-primary cursor-pointer">Signup</li>
          </ul>
        </div>
        <Hero />
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
      </div>
      <Footer />
    </>
  );
}

export default App;
