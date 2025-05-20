import { Link, type ReactNode } from "@tanstack/react-router";
import { ToggleTheme } from "./toggle-theme";

export const Navbar = ({ children }: ReactNode) => {
  return (
    <div className="rounded-bl-[6rem] bg-[#5a65e0] text-white h-[10rem] w-[100vw] lg:items-start xl:items-center justify-center pt-10 px-[10rem] -z-[-1]">
      <div className="flex justify-between">
        <Link to={"/"} className="font-bold text-3xl">
          devjobs
        </Link>
        <ToggleTheme />
      </div>
      {children}
    </div>
  );
};
