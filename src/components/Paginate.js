import { useState, useEffect } from "react";

const Paginate = ({ data, setData, itemsPerPage }) => {
  const [state, setState] = useState({
    totalPages: null,
    dataStartingIndex: null,
    dataLastIndex: 0,
    currentClickedNumber: 1,
    pageData: null,
  });

  const determineNumberOfPages = () => {
    let paginatedDataObject = {};

    let index = 0;
    let dataLength = data.length;
    let chunkArray = [];

    for (index = 0; index < dataLength; index += itemsPerPage) {
      let newChunk = data.slice(index, index + itemsPerPage);
      chunkArray.push(newChunk);
    }

    chunkArray.forEach((chunk, i) => {
      paginatedDataObject[i + 1] = chunk;
    });

    setState((prevState) => ({
      ...prevState,
      totalPages: chunkArray.length,
      dataStartingIndex: itemsPerPage,
      pageData: paginatedDataObject,
      clickedOnNumber: 1,
    }));
  };

  const moveToLastPage = () => {
    setState((prevState) => ({
      ...prevState,
      currentClickedNumber: state.totalPages,
      currentClickedPage: state.totalPages,
    }));
  };

  const previousPage = () => {
    setState((prevState) => ({
      ...prevState,
      currentClickedNumber:
        state.currentClickedNumber - 1 < 1 ? 1 : state.currentClickedNumber - 1,
    }));
  };

  const nextPage = () => {
    const { dataStartingIndex, totalPages } = state;

    if (dataStartingIndex) {
      setState((prevState) => ({
        ...prevState,
        dataStartingIndex: null,
        currentClickedNumber: 2,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        currentClickedNumber:
          state.currentClickedNumber + 1 > totalPages
            ? totalPages
            : state.currentClickedNumber + 1,
      }));
    }
  };

  useEffect(() => {
    determineNumberOfPages();
    const { currentClickedNumber, pageData } = state;

    if (data !== state.data) {
      determineNumberOfPages();
    }

    if (currentClickedNumber !== state.currentClickedNumber) {
      setData(pageData[currentClickedNumber]);
    }
  }, []);

  return (
    <div>
      <button onClick={previousPage}>Prev</button>
      <p>{state.currentClickedNumber}</p>

      <button onClick={moveToLastPage}>Prev</button>
      <button onClick={nextPage}>Prev</button>
    </div>
  );
};

export default Paginate;
