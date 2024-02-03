import { useState } from "react";

const SearchFilters = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [checkedOption, setCheckedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckedOption((prevCheckedOption) =>
      prevCheckedOption === e.target.value ? "" : e.target.value
    );
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-white w-full p-5 mt-8 shadow rounded-md text-secondary">
        <p className="font-medium">Sort By</p>
        <div className=" flex  gap-5 w-full">
          <label className="mb-2 flex">
            <input
              type="radio"
              value="salary"
              checked={selectedOption === "salary"}
              onChange={(e) => handleOptionChange(e)}
              className="mr-2"
            />
            Salary
          </label>
          <label className="mb-2 flex">
            <input
              type="radio"
              value="date"
              checked={selectedOption === "date"}
              onChange={(e) => handleOptionChange(e)}
              className="mr-2"
            />
            Date Posted
          </label>
        </div>
      </div>

      <div className="bg-white w-full p-5 mt-8 shadow rounded-md text-secondary">
        <div className="flex justify-between pb-5">
          <p className="font-medium">Filters</p>
          <p className="text-sm">clear all</p>
        </div>

        <div>
          <p className="pb-3 text-sm">Job Type</p>
          <div className="flex flex-col gap-3 font-medium">
            <label className="flex">
              <input
                type="checkbox"
                value="Fulltime"
                checked={checkedOption === "Fulltime"}
                onChange={(e) => handleCheckboxChange(e)}
                className="mr-2"
              />{" "}
              Fulltime
            </label>
            <label className="flex">
              <input
                type="checkbox"
                value="Contractor"
                checked={checkedOption === "Contractor"}
                onChange={(e) => handleCheckboxChange(e)}
                className="mr-2"
              />{" "}
              Contractor
            </label>
            <label className="flex">
              <input
                type="checkbox"
                value="PartTime"
                checked={checkedOption === "PartTime"}
                onChange={(e) => handleCheckboxChange(e)}
                className="mr-2"
              />{" "}
              PartTime
            </label>
            <label className="flex">
              <input
                type="checkbox"
                value="Intern"
                checked={checkedOption === "Intern"}
                onChange={(e) => handleCheckboxChange(e)}
                className="mr-2"
              />{" "}
              Intern
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
