import React from 'react';

const Pagination = ({ currentPage, setCurrentPage, isPreviousData, hasMore }) => {
  return (
    <>
      <div className="join my-20">
        <button
          onClick={() => setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="btn join-item"
        >
          «
        </button>
        <button className="btn join-item">Page {currentPage}</button>
        <button
          onClick={() => {
            if (!isPreviousData && hasMore) {
              setCurrentPage((currentPage) => currentPage + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={isPreviousData || !hasMore}
          className="btn join-item"
        >
          »
        </button>
      </div>
    </>
  );
};

export default Pagination;
