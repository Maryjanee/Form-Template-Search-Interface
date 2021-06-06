import React from "react";
import Filter from "./Filter";

const SortBy = () => {
  const categoryFilter = [
    "Category",
    ["All", "Education", "E-commerce", "Health"],
  ];
  const orderFilter = ["Order", ["Default", "Ascending", "Descending"]];
  const dateFilter = ["Date", ["Default", "Ascending", "Descending"]];

  return (
    <div>
      
      <div className="filter-container ">
        <p>Sort By:</p>
        <Filter filterType={categoryFilter} />
        <Filter filterType={orderFilter} />
        <Filter filterType={dateFilter} />
      </div>
    </div>
  );
};

export default SortBy;
