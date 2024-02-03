import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SearchResults from "./components/SearchResults";
import SearchFilters from "./components/SearchFilters";
import Searchbar from "./components/Searchbar";
import { useState, useEffect } from "react";
import { fetchJobs } from "./services/jobService";

function App() {
  const [jobResults, setJobResults] = useState([]);

  const fetchData = async (query) => {
    try {
      const results = await fetchJobs(query);
      console.log("Raw API Response:", results);

      if (results.status === "OK") {
        const relevantJobs = results.data || [];
        console.log("Relevant Jobs:", relevantJobs);
        setJobResults(relevantJobs);
      } else {
        console.error("Error response from server:", results.status);
      }
    } catch (error) {
      console.error("Error in fetchData:", error);
    }
  };

  useEffect(() => {
    // Fetch initial data without a query
    const defaultQuery = "React";
    fetchData(defaultQuery);
  }, []); // Empty dependency array ensures the effect runs only once on mount

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

        // Set the filtered results in state
        setJobResults(relevantJobs);
      } else {
        console.error("Error response from server:", results.status);
      }
    } catch (error) {
      console.error("Error in handleSearch:", error);
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
            <SearchFilters />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
