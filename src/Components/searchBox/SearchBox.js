import React from "react";
import "./searchBox.css";
const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <>
      <input
        className="search"
        placeholder={placeholder}
        type="search"
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBox;
