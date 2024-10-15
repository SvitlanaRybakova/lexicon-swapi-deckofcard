import React, { useState } from 'react';

const SearchBar = ({ setSearchText, setCurrentPage }) => {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setSearchText(value);
    setValue('');
    setCurrentPage(1);
  };

  return (
    <div className="form-control">
      <div className="input-group items-ceter my-20 flex justify-center gap-4">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered w-1/2"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button className="btn btn-square" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
