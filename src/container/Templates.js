import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplates } from "../actions";
import "../styles/Templates.scss";

const Templates = () => {
  const dispatch = useDispatch();
  const { templates, pending, error } = useSelector(
    (state) => state.templatesReducer
  );

  // useEffect(() => {
  //   dispatch(fetchTemplates());
  // }, [dispatch]);
  // console.log(templates);

  return (
    <main>
      <section id="templates-container">
        <div className="templates-header d-flex">
          <p>All Templates</p>
          <p>2000 Templates</p>
        </div>
        <div className="all-templates-container d-grid">
          <div className="template-card">
            <h3>Alumni Membership Form Template</h3>
            <p>
              Engage your alumni network better with this alumni registration
              form template. Embed this in your website ...
            </p>
            <Link to="/">
            Use Template
            </Link>

          </div>
          <div className="template-card">
            <h3>Alumni Membership Form Template</h3>
            <p>
              Engage your alumni network better with this alumni registration
              form template. Embed this in your website ...
            </p>
            <Link to="/">
            Use Template
            </Link>

          </div>
          <div className="template-card">
            <h3>Alumni Membership Form Template</h3>
            <p>
              Engage your alumni network better with this alumni registration
              form template. Embed this in your website ...
            </p>
            <Link to="/">
            Use Template
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Templates;
