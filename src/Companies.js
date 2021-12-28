import React from "react";

const Companies = ({ value, jobs, filterCompanies }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            className={`job-btn ${index === value && "active-btn"} `}
            key={index}
            onClick={() => filterCompanies(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default Companies;
