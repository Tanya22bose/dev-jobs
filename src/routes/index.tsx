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
  const [visibleCount, setVisibleCount] = useState(6); // Show initial 6 jobs

  const handleSearch = () => {
    const filtered = allJobs.filter((job) =>
      filterMatchingJobs(job, searchText, location, fullTimeOnly)
    );
    setJobs(filtered);
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleJobs = jobs.slice(0, visibleCount);

  return (
    <div className="flex flex-col w-full h-full">
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
        {visibleJobs.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>

      {visibleCount < jobs.length && (
        <div className="flex justify-center mb-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-[#5964E0] text-white rounded hover:bg-[#4953c7] transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
