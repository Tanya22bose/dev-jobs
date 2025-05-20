import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { SearchIcon, MapPin } from "lucide-react";

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
  return (
    <div className="z-1 mt-11 flex xl:w-full">
      <div className="flex w-[15rem] xl:flex-1 rounded-l-lg relative items-center gap-5 border-r border-gray-200 dark:border-[#6E8098]">
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

      <div className="flex flex-1 relative items-center gap-5 border-r border-gray-200 dark:border-[#6E8098]">
        <MapPin className="h-7 w-7 absolute left-5" fill="#5a65e0" />
        <Input
          type="text"
          placeholder="Filter by location..."
          className="h-20 px-15 rounded-none dark:bg-[#19202D]"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="flex flex-1 relative items-center justify-around bg-white dark:bg-[#19202D] px-4 rounded-r-lg">
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
  );
};
