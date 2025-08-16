import React from "react";

const PaginationUI = ({
  totalItem,
  itemPerPage = 5,
  onPageChange,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItem / itemPerPage);

  if (totalPages <= 1) return null;

  const generatePages = () => {
    const pages = [];
    const maxVisible = 6;

    if (totalPages <= maxVisible) {
      // If total pages are less than max, show all
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        // Show first few + last page
        for (let i = 1; i <= maxVisible; i++) {
          pages.push(i);
        }
        pages.push("...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Show last few + first page
        pages.push(1, "...");
        for (let i = totalPages - 5; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Middle pages
        pages.push(1, "...");
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pages.push(i);
        }
        pages.push("...", totalPages);
      }
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {/* Prev Button */}
      <button
        className="px-3 py-1 bg-gray-200 rounded-sm hover:bg-gray-300 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`px-3 py-1 rounded-sm ${
              page === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        className="px-3 py-1 bg-gray-200 rounded-sm hover:bg-gray-300 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationUI;
