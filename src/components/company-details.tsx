import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

export const CompanyDetails = ({
  postedAt,
  contract,
  position,
  location,
  apply,
  description,
  requirements,
  role,
}: any) => {
  return (
    <div className="w-1/2 h-full z-0 items-center flex-row mt-32 p-4 px-5 rounded bg-white dark:bg-card">
      <Card className="w-full flex flex-col bg-inherit items-center justify-between">
        <CardHeader className="flex w-full flex-row items-center gap-0 justify-between">
          <div className="flex flex-1 flex-col gap-2">
            <CardDescription className="text-base flex items-center">
              {postedAt} &nbsp;
              <div className="text-xl w-1 h-1 rounded bg-muted-foreground dark:bg-muted-foreground"></div>
              &nbsp; {contract}
            </CardDescription>
            <CardTitle className="m-0 text-3xl font-bold">{position}</CardTitle>
            <CardDescription className="mt-0 text-sm font-bold text-[#5a65e0]">
              {location}
            </CardDescription>
          </div>
          <CardDescription className="">
            <Button className="">
              <Link to={apply} target="_blank">
                Apply Now
              </Link>
            </Button>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 mt-5">
          <CardDescription>
            <div className="text-base">{description}</div>
          </CardDescription>
          <CardTitle className="text-xl capitalize mt-6 mb-2 font-bold">
            requirements
          </CardTitle>
          <CardDescription>
            <div className="text-base">{requirements.content}</div>
            <ul
              role="list"
              className="list-disc text-base marker:text-[#5964E0] ml-4 mt-4"
            >
              {requirements.items.map((item: any, idx: number) => (
                <li className="pl-5 py-1" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          </CardDescription>
          <CardTitle className="text-xl capitalize mt-6 mb-2 font-bold">
            What you will do
          </CardTitle>
          <CardDescription>
            <div className="text-base">{role.content}</div>
            <ol
              role="list"
              className="list-decimal text-base marker:text-[#5964E0] ml-4 mt-4"
            >
              {role.items.map((item: any, idx: number) => (
                <li className="pl-5 py-1" key={idx}>
                  {item}
                </li>
              ))}
            </ol>
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};
