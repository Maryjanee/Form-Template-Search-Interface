import '../styles/Filter.scss'
const Filter = ({filterType}) => {
  return (
    <div className="filter-container">
      <span>{filterType[0]}</span>
      <select
        name="filter"
        id="filterType"
      >
        {filterType[1].map(filter => (
          <option key={filter} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};



export default Filter;
