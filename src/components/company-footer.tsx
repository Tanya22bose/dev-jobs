import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";

export const CompanyFooter = ({ position, company, apply }: any) => {
  return (
    <Card className="w-[90%] xl:w-[58%] h-[6rem] z-0 md:flex-row sm:flex-col justify-between ">
      <div className="md:flex flex-col mt-0 hidden">
        <CardTitle className="m-0 text-xl font-bold">{position}</CardTitle>
        <CardDescription className="mt-0 text-base">{company}</CardDescription>
      </div>
      <Button className="sm:w-full md:w-auto">
        <Link to={apply} target="_blank">
          Apply Now
        </Link>
      </Button>
    </Card>
  );
};
