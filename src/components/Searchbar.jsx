import { useState } from "react";
import PropTypes from "prop-types";

const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex lg:flex-row flex-col flex-1 lg:bottom-20 lg:w-[70%] bg-white p-5 shadow-xl rounded-md"
    >
      <input
        type="text"
        placeholder="Search a Job Ex: Python developer in Texas, USA"
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 lg:w-[80%] pl-4 outline-none text-secondary lg:text-sm lg:rounded-l-lg"
      />
      <button
        type="submit"
        className="bg-primary hover:opacity-90 lg:mt-0 mt-5 text-white lg:text-[15px] lg:rounded-r-lg lg:p-2 p-4 font-bold lg:ml-10 lg:px-10"
      >
        Search
      </button>
    </form>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
