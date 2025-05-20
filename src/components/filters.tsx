import { useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { SearchIcon, MapPin, Funnel } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Separator } from "./ui/separator";

export const Filters = ({
  searchText,
  setSearchText,
  location,
  setLocation,
  fullTimeOnly,
  setFullTimeOnly,
  onSearch,
}: {
  searchText: string;
  setSearchText: (val: string) => void;
  location: string;
  setLocation: (val: string) => void;
  fullTimeOnly: boolean;
  setFullTimeOnly: (val: boolean) => void;
  onSearch: () => void;
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const MobileFilters = (
    <div className="flex md:hidden w-full mt-10 px-0 relative">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Filter by title..."
          className="pl-5 h-18 rounded-md dark:bg-[#19202D]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Filter Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-12 h-12 top-4 right-15 shadow-none absolute bg-transparent border-none dark:bg-transparent dark:border-none"
          >
            <Funnel fill="#6E8098" className="h-13 w-13" />
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-white dark:bg-card w-full">
          <div className="flex flex-col gap-5">
            <div className="relative">
              <MapPin
                className="h-7 w-7 absolute left-1 top-1"
                fill="#5a65e0"
                color="white"
              />
              <Input
                type="text"
                placeholder="Filter by location..."
                className="pl-10 h-7 dark:bg-[#19202D] shadow-none"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Separator className="w-full" />
            <div className="flex items-center gap-3">
              <Checkbox
                id="fulltime-mobile border-none"
                checked={fullTimeOnly}
                onCheckedChange={(val) => setFullTimeOnly(Boolean(val))}
                className="w-5 h-5 cursor-pointer bg-[#e7e8e9] dark:bg-[#313743] border-none"
              />
              <label
                htmlFor="fulltime-mobile"
                className="text-sm font-medium text-black dark:text-white"
              >
                Full Time Only
              </label>
            </div>

            <Button
              onClick={() => {
                onSearch();
                setDialogOpen(false);
              }}
            >
              Search
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="w-11 h-11 bg-[#5a65e0] top-4 right-4 rounded flex items-center justify-center absolute">
        <SearchIcon
          className="h-full w-4"
          color="#fff"
          strokeWidth={2}
          fill="#5a65e0"
          onClick={onSearch}
        />
      </div>
    </div>
  );

  return (
    <div>
      <div className="hidden z-1 mt-11 md:flex w-full">
        <div className="flex xl:flex-none md:flex-1 md:flex-shrink xl:flex-shrink-none xl:w-[30rem] rounded-l-lg relative items-center gap-5 border-r border-gray-200 dark:border-[#6E8098]">
          <SearchIcon
            className="h-6 w-7 absolute left-5"
            color="#5a65e0"
            strokeWidth={3}
          />
          <Input
            type="text"
            placeholder="Filter by title, companies, expertise…"
            className="h-20 px-15 rounded-none rounded-l-lg dark:bg-[#19202D]"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="flex flex-1 relative items-center md:flex-shrink xl:flex-shrink-none gap-5 border-r border-gray-200 dark:border-[#6E8098]">
          <MapPin className="h-7 w-7 absolute left-5" fill="#5a65e0" />
          <Input
            type="text"
            placeholder="Filter by location..."
            className="h-20 px-15 rounded-none dark:bg-[#19202D]"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="flex flex-1 relative items-center min-w-xs justify-around bg-white dark:bg-[#19202D] px-4 rounded-r-lg">
          <Checkbox
            id="fulltime"
            checked={fullTimeOnly}
            onCheckedChange={(val) => setFullTimeOnly(Boolean(val))}
            className="w-6 h-6 cursor-pointer bg-[#e7e8e9] dark:bg-[#313743] border-none"
          />
          <label
            htmlFor="fulltime"
            className="text-base font-bold text-black dark:text-white"
          >
            Full Time Only
          </label>
          <Button className="cursor-pointer" onClick={onSearch}>
            Search
          </Button>
        </div>
      </div>

      {/* Mobile View */}
      {MobileFilters}
    </div>
  );
};
