import React from "react";

const Search = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      value={searchTerm}//this will put together input field value to the searchTerm 
      onChange={(e) => onSearch(e.target.value)}
      placeholder="Search transactions"
    />
  );
};

export default Search;
