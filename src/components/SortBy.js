import React from 'react'
import Filter from './Filter'

const SortBy = () => {
  const categoryFilter = ["Category",["All", "Education", "E-commerce" ,"Health"]];
  const orderFilter = ["Order",["Default", "Ascending","Descending"]];
  const dateFilter = ["Date",["Default", "Ascending","Descending"]];
    
  return (
    <div className="filter-container">
        <Filter filterType={categoryFilter}/>
        <Filter filterType={orderFilter}/>
        <Filter filterType={dateFilter}/>
    </div>
  )
}

export default SortBy;
