import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { JobCard } from "@/components/job-card";
import { Filters } from "@/components/filters";
import { useState } from "react";
import { data as allJobs } from "@/mock-data/jobs";
import { filterMatchingJobs } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [jobs, setJobs] = useState(allJobs);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);

  const handleSearch = () => {
    const filtered = allJobs.filter((job) => {
      return filterMatchingJobs(job, searchText, location, fullTimeOnly);
    });

    setJobs(filtered);
  };

  return (
    <div className="flex flex-col w-full h-full ">
      <Navbar>
        <Filters
          searchText={searchText}
          setSearchText={setSearchText}
          location={location}
          setLocation={setLocation}
          fullTimeOnly={fullTimeOnly}
          setFullTimeOnly={setFullTimeOnly}
          onSearch={handleSearch}
        />
      </Navbar>

      <div className="flex flex-wrap gap-8 px-5 mt-25 justify-center mb-5">
        {jobs.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>
    </div>
  );
}
