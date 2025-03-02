import React, { useState, useEffect } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("name");

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearch(query.trim(), filter);
    }, 300); // Debounce search input to avoid too many calls

    return () => clearTimeout(delaySearch);
  }, [query, filter, onSearch]);

  return (
    <div className="d-flex justify-content-center mb-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search alumni..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control w-50 rounded-start"
      />

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="form-select w-auto rounded-end"
      >
        <option value="name">Name</option>
        <option value="city">City</option>
        <option value="skills">Skills</option>
        <option value="passOut">Batch</option>
      </select>
    </div>
  );
};

export default Search;
