import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const filterMatchingJobs = (
  job: {
    position: string;
    company: string;
    location: string;
    contract: string;
  },
  searchText: string,
  location: string,
  fullTimeOnly: boolean
) => {
  const matchText =
    job.position.toLowerCase().includes(searchText.toLowerCase()) ||
    job.company.toLowerCase().includes(searchText.toLowerCase());

  const matchLocation = job.location
    .toLowerCase()
    .includes(location.toLowerCase());

  const matchFullTime = fullTimeOnly ? job.contract === "Full Time" : true;

  return matchText && matchLocation && matchFullTime;
};

export function debounce(func: Function, timeout = 300) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
