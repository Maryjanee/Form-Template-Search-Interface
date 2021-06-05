import SearchBar from "./components/SearchBar";
import SortBy from "./components/SortBy";
import Templates from "./container/Templates";
import "../src/styles/App.scss";
import important from "../src/assets/important.svg";


const App = () => {
  return (
    <div className="container">
      <header className="d-flex">
        <SearchBar />
        <SortBy />
      </header>
      <div className="alert d-flex">
        <div className="icon-container">
          <img className="icon" src={important} alt="important-icon" />
        </div>
        <p>
          Tada! Get started with a free template. Can't find what you were
          looking for?Search from 1000+ available templates
        </p>
      </div>

      <Templates />
    </div>
  );
};

export default App;
