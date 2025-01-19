import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-18">
        <div className="w-1/2 flex items-center border border-gray-300 rounded-lg shadow-sm">
          <input
            type="text"
            placeholder="Search for your food"
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
          />
          <button className="px-4 py-3 bg-green-700 text-white rounded-r-lg hover:bg-green-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm6.293-6.293a9.97 9.97 0 0 0 1.415-1.414l3.683 3.683a1 1 0 0 0 0-1.414l-3.683-3.683a9.97 9.97 0 0 0-1.414 1.415z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
