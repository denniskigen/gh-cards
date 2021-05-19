import React from "react";

const Search = (props) => {
  const { onSearchTermChange } = props;

  return (
    <>
      <div className="m-auto w-72 border-b border-gray-200">
        <form
          action=""
          className="mb-2 flex items-center"
          role="search"
          noValidate=""
        >
          <label htmlFor="searchbox" id="searchbox">
            <svg className="w-4 h-4" viewBox="0 0 20 20">
              <path
                d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                stroke="currentColor"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </label>
          <input
            className="ml-2 w-full outline-none ring-0"
            id="searchbox"
            type="search"
            onChange={onSearchTermChange}
            placeholder="Enter GitHub username"
          />
        </form>
      </div>
    </>
  );
};

export default Search;
