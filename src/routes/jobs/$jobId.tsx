import { JobDetails } from "@/components/job-details";
import { data } from "@/mock-data/jobs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/jobs/$jobId")({
  component: RouteComponent,
  loader: ({ params: { jobId } }) => {
    return data.find((item) => item.id === jobId);
  },
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return <JobDetails data={data} />;
}
