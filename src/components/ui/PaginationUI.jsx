const PaginationUI = ({
  totalItem,
  itemPerPage = 5,
  onPageChange,
  currentPage,
}) => {
  const totalPages = Math.ceil(totalItem / itemPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        className="px-4 py-1 bg-gray-200 rounded-sm hover:bg-gray-300 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <span className="text-sm font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="px-4 py-1 bg-gray-200 rounded-sm hover:bg-gray-300 disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationUI;
