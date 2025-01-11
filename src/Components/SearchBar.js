import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-1/2">
        <input
          type="text"
          placeholder="Search for your food"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
        />
      </div>
    </div>
  );
};

export default SearchBar;
