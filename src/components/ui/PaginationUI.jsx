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
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= maxVisible; i++) {
          pages.push(i);
        }
        pages.push("...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...");
        for (let i = totalPages - 5; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
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
    <div className="flex flex-col md:flex-row justify-center items-center gap-3 mt-6">
      {/* Prev Button */}
      <div className="flex justify-center items-center gap-3">
        <button
          className="px-3 py-1 bg-gray-200 rounded-sm hover:bg-gray-300 disabled:opacity-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-2">
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
        </div>

        {/* Next Button */}
        <button
          className="px-3 py-1 bg-gray-200 rounded-sm hover:bg-gray-300 disabled:opacity-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Select Page Dropdown */}
      <div className="flex items-center gap-2">
        <span className="text-sm">Go to page:</span>
        <select
          value={currentPage}
          onChange={(e) => onPageChange(Number(e.target.value))}
          className="px-2 py-1 border rounded-md text-sm"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <option key={page} value={page}>
              {page}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PaginationUI;
