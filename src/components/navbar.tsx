import { Link, type ReactNode } from "@tanstack/react-router";
import { ToggleTheme } from "./toggle-theme";

export const Navbar = ({ children }: ReactNode) => {
  return (
    <div className="md:rounded-bl-[6rem] bg-[#5a65e0] text-white h-[10rem] w-full justify-center items-center pt-10 px-8 xl:px-[10rem] -z-[-1]">
      <div className="flex justify-between w-full">
        <Link to={"/"} className="font-bold text-3xl">
          devjobs
        </Link>
        <ToggleTheme />
      </div>
      {children}
    </div>
  );
};
