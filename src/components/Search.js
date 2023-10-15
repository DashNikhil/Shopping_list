import React from "react";
import "./Search.css";

// const initial = "Search By Name";
const Search = ({ searchHandler }) => {
  function searchData(e) {
    searchHandler(e);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search By Name"
        className="search"
        onChange={searchData}
      />
    </>
  );
};

export default Search;
