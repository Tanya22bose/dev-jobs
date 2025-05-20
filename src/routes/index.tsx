import { useCallback, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/navbar";
import { JobCard } from "@/components/job-card";
import { Filters } from "@/components/filters";
import { data as allJobs } from "@/mock-data/jobs";
import { debounce, filterMatchingJobs } from "@/lib/utils";

export const Route = createFileRoute("/")({
  component: App,
});

const LoadMore = ({ handleLoadMore }: any) => (
  <div className="flex justify-center mb-8">
    <button
      onClick={handleLoadMore}
      className="px-6 py-2 bg-[#5964E0] text-white rounded hover:bg-[#4953c7] transition"
    >
      Load More
    </button>
  </div>
);

function App() {
  const [jobs, setJobs] = useState(allJobs);
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [fullTimeOnly, setFullTimeOnly] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSearch = useCallback(() => {
    const filtered = allJobs.filter((job) =>
      filterMatchingJobs(job, searchText, location, fullTimeOnly)
    );
    setJobs(filtered);
    setVisibleCount(6);
  }, [searchText, location, fullTimeOnly]);

  // Stable debounced version
  const debouncedSearch = useMemo(
    () => debounce(handleSearch, 300),
    [handleSearch]
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const visibleJobs = jobs.slice(0, visibleCount);

  return (
    <div className="flex flex-col w-full h-full">
      <Navbar>
        <Filters
          searchText={searchText}
          setSearchText={(val) => setSearchText(val)}
          location={location}
          setLocation={(val) => setLocation(val)}
          fullTimeOnly={fullTimeOnly}
          setFullTimeOnly={(val) => setFullTimeOnly(val)}
          onSearch={() => debouncedSearch()}
        />
      </Navbar>

      <div className="flex flex-wrap gap-8 px-5 mt-25 justify-center mb-5">
        {visibleJobs.map((job, i) => (
          <JobCard key={i} job={job} />
        ))}
      </div>

      {visibleCount < jobs.length && (
        <LoadMore handleLoadMore={handleLoadMore} />
      )}
    </div>
  );
}
