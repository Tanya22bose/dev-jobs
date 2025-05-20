import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

export const fallbackUrl =
  "https://i0.wp.com/innovationyourself.com/wp-content/uploads/2020/08/simplifying-controllers-action-fallback.png?fit=700%2C400&ssl=1";

export function JobCard({ job }: any) {
  return (
    <Card className="w-[22rem] h-[14.5rem] relative z-0 gap-4 px-3 rounded">
      <CardHeader>
        <img
          src={job.logo}
          loading="lazy"
          alt={`${job.company} logo`}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = fallbackUrl;
          }}
          className="w-12 h-12 z-2 absolute -top-4 left-8 cursor-pointer object-cover bg-red rounded-xl"
        />
        <CardDescription className="mt-6 text-base flex items-center">
          {job.postedAt} &nbsp;
          <div className="text-xl w-1 h-1 bg-gray-400 rounded"></div>
          &nbsp; {job.contract}
        </CardDescription>

        <CardTitle className="m-0 text-xl font-bold">
          <Link
            to="/jobs/$jobId"
            className="cursor-pointer hover:text-[#6E8098]"
            params={{ jobId: job.id }}
          >
            {job.position}
          </Link>
        </CardTitle>

        <CardDescription className="mt-0 text-base">
          {job.company}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-4 text-sm font-bold text-[#5964E0]">
        {job.location}
      </CardFooter>
    </Card>
  );
}
