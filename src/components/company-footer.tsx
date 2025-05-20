import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

export const CompanyFooter = ({ position, company, apply }: any) => {
  return (
    <Card className="w-1/2 h-[6rem] z-0 flex-row justify-between ">
      <div className="flex flex-col mt-0">
        <CardTitle className="m-0 text-xl font-bold">{position}</CardTitle>
        <CardDescription className="mt-0 text-base">{company}</CardDescription>
      </div>
      <Button className="">
        <Link to={apply} target="_blank">
          Apply Now
        </Link>
      </Button>
    </Card>
  );
};
