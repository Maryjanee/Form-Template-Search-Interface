import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../assets/loading.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplates } from "../actions";
import "../styles/Templates.scss";
import Paginate from "../components/Paginate";

const Templates = () => {
  const dispatch = useDispatch();
  const [templatesData, setTemplatesData] = useState([]);
  const [dataFromPaginate, setDataFromPaginate] = useState(null);
  const [templatesPerPage] = useState(30);
  const { templates, pending, error } = useSelector(
    (state) => state.templatesReducer
  );

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [dispatch]);

  useEffect(() => {
    if (templates.length > 0) {
      setTemplatesData(templates);
    }
  }, [templates]);

  console.log(templatesData);

  const updateDataFromPaginate = (data) => setDataFromPaginate(data);

  return (
    <>
      {pending && <img className="center" src={Loader} alt="loader" />}

      <main>
        <section id="templates-container">
          <div className="templates-header d-flex">
            <p>All Templates</p>
            <p>2000 Templates</p>
          </div>
          <div className="all-templates-container d-grid">
            {!pending &&
              (dataFromPaginate || templatesData).map((template, index) => (
                <div
                  className="template-card"
                  key={template.name + (Math.random() * index)}
                >
                  <h3>{template.name}</h3>
                  <p>{template.description}</p>
                  <Link to="/">{template.link}</Link>
                </div>
              ))}
             {!pending && dataFromPaginate
              ? dataFromPaginate.map((template, index) => (
                  <div
                    className="template-card"
                    key={template.created_at + index}
                  >
                    <h3>{template.name}</h3>
                    <p>{template.description}</p>
                    <Link to="/">{template.link}</Link>
                  </div>
                ))
              : !pending &&
                templatesData.map((template, index) => (
                  <div
                    className="template-card"
                    key={template.created_at + index}
                  >
                    <h3>{template.name}</h3>
                    <p>{template.description}</p>
                    <Link to="/">{template.link}</Link>
                  </div>
                ))} 
          </div>
        </section>
        <Paginate
          data={templatesData}
          setData={updateDataFromPaginate}
          itemsPerPage={templatesPerPage}
        />
      </main>
    </>
  );
};

export default Templates;
