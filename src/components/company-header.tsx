import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Link } from "@tanstack/react-router";
import { fallbackUrl } from "./job-card";

export const CompanyHeader = ({ logo, company, website }: any) => {
  const MobileView = (
    <Card className="md:hidden sm:flex mt-16 mb-[20rem] items-center z-0 justify-start w-full h-[14.5rem] flex-col relative rounded">
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-14 h-14 object-cover rounded-xl"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = fallbackUrl;
          }}
        />
      </div>

      <CardContent className="w-full pb-2 mt-10 flex flex-col items-center">
        <CardTitle className="m-0 text-2xl font-bold text-center">
          {company}
        </CardTitle>
        <CardDescription className="mt-2 text-base text-center">
          {website.split("://")[1]}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex-1 flex-col text-sm font-bold flex items-center justify-center">
        <Button className="text-[#5964E0] bg-[#eeeffb] hover:bg-[#c5c9f4] dark:hover:bg-[#525861] dark:bg-[#303642] dark:text-white w-38 shadow-none rounded">
          <Link to={website} target="_blank">
            Company Site
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <>
      <Card className="hidden md:flex w-full sm:w-[50rem] h-[9rem] z-0 gap-4 py-0 px-0 mt-10 rounded flex-row items-center justify-center">
        <CardHeader className="w-full flex-1 px-0">
          <img
            src={logo}
            alt="company-logo"
            className="w-36 h-36 px-0 mt-2 cursor-pointer"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = fallbackUrl;
            }}
          />
        </CardHeader>
        <CardContent className="w-full flex-2 pb-2">
          <CardTitle className="m-0 text-2xl font-bold ">{company}</CardTitle>
          <CardDescription className="mt-2 text-base">
            {website.split("://")[1]}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-1 text-sm font-bold mr-4 mb-2">
          <Button className="text-[#5964E0] bg-[#eeeffb] hover:bg-[#c5c9f4] dark:hover:bg-[#525861] dark:bg-[#303642] dark:text-white w-38 shadow-none rounded ">
            <Link to={website} target="_blank">
              Company Site
            </Link>
          </Button>
        </CardFooter>
      </Card>
      {/* Mobile View */}
      {MobileView}
    </>
  );
};
