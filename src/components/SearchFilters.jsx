import { useState } from "react";
import PropTypes from "prop-types";

const SearchFilters = ({ onFilterChange }) => {
  const [checkedOption, setCheckedOption] = useState("");
  const [location, setLocation] = useState("");

  const clearFiltersButton = () => {
    setCheckedOption("");
    setLocation("");
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setCheckedOption((prevCheckedOption) =>
      prevCheckedOption === value ? "" : value
    );
    applyFilters(value, location);
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    applyFilters(checkedOption, value);
  };

  const applyFilters = (checkedOption, location) => {
    const query = `${checkedOption} in ${location}`.trim();
    onFilterChange(query);
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-white w-full p-5 shadow rounded-md text-secondary">
        <div className="flex justify-between pb-5">
          <p className="font-medium">Filters</p>
          <button onClick={clearFiltersButton} className="text-sm">
            clear all
          </button>
        </div>
        <div>
          <div className="flex flex-col gap-3 font-medium">
            <p className="pb-3 text-sm">Job Type</p>
            <label className="flex">
              <input
                type="checkbox"
                value="Fulltime"
                checked={checkedOption === "Fulltime"}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Fulltime
            </label>
            <label className="flex">
              <input
                type="checkbox"
                value="Contractor"
                checked={checkedOption === "Contractor"}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Contractor
            </label>
            <label className="flex">
              <input
                type="checkbox"
                value="PartTime"
                checked={checkedOption === "PartTime"}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              PartTime
            </label>
            <label className="flex">
              <input
                type="checkbox"
                value="Intern"
                checked={checkedOption === "Intern"}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              Intern
            </label>
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="location" className="pb-3 text-sm font-medium">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter city or country"
            className="border border-slate-300 rounded-md p-2 outline-none"
          />
          <button
            onClick={() => applyFilters(checkedOption, location)}
            className="p-3 hover:opacity-90 bg-primary text-white rounded-lg mt-5 font-bold"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

SearchFilters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default SearchFilters;
