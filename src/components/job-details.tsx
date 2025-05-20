import { Navbar } from "./navbar";
import { CompanyHeader } from "./company-header";
import { CompanyDetails } from "./company-details";
import { CompanyFooter } from "./company-footer";

interface JobDetailsProps {
  data: any;
}

export const JobDetails = ({ data }: JobDetailsProps) => {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center">
      <Navbar>
        <div className="flex flex-grow w-full h-full flex-1 justify-center">
          <CompanyHeader {...data} />
        </div>
      </Navbar>
      <main className="flex-grow flex mt-0 flex-2 mb-7 2xl:mb-20 px-5 w-full h-full justify-center">
        <CompanyDetails {...data} />
      </main>
      <footer className="flex justify-center bg-white dark:bg-card">
        <CompanyFooter {...data} />
      </footer>
    </div>
  );
};
