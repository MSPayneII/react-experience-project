import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Job = ({ id, order, title, dates, duties, company }) => {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date">{dates}</p>

      {duties.map((duty, index) => {
        return (
          <div className="job-desc" key={index}>
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Job;
