import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaMapPin } from "react-icons/fa";
import Loading from "./Loading";
import Job from "./Job";
import Companies from "./Companies";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(url);
      setJobs(response.data);
      setIsLoading(false);

      // const allCompanies = [...new Set(jobs.map((job) => job.company))];
      // console.log(allCompanies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filterCompanies = (index) => {
    setValue(index);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <section className="section">
        <section className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </section>

        <div className="jobs-center">
          <Companies
            jobs={jobs}
            value={value}
            filterCompanies={filterCompanies}
          />
          <Job {...jobs[value]} key={jobs.id} />
        </div>

        <button className="btn">More Info</button>
      </section>
    </main>
  );
}

export default App;
