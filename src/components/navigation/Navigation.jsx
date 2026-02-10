import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const badgeStyle =
    theme === "light"
      ? "bg-[#EEEBFF] text-[#7B61FF]"
      : "bg-[#4731D3] text-[#8F88FF]";

  return (
    <header className="w-full">
      <div className="min-h-[62px]  mx-auto flex items-center justify-between ">
        <div className="flex items-center ">
          <div
            className={`w-[62px] h-[62px] rounded-full flex items-center justify-center
        font-['Inter'] font-semibold text-[24px] leading-[32px] tracking-normal
         rotate-[30deg]
        ${badgeStyle}`}
          >
            B
          </div>
        </div>
        <nav className="flex items-center gap-10">
          <NavLink
            exact
            to="/"
            activeClassName=" rounded-[6px] border border-[#3730A3]
                     text-[#3730A3] bg-[#FFFFFF] "
            className="px-5 py-2 font-['Inter'] font-medium text-[18px] leading-[28px] tracking-normal text-[#9CA3AF]"
          >
            Skills
          </NavLink>

          <NavLink
            to="/projects"
            activeClassName=" rounded-[6px] border border-[#3730A3]
                     text-[#3730A3]  bg-[#FFFFFF]"
            className="px-5 py-2 font-['Inter'] font-medium text-[18px] leading-[28px] tracking-normal text-[#9CA3AF]"
          >
            Projects
          </NavLink>
          <NavLink
            to="/hire-me"
            activeClassName=" rounded-[6px] border border-[#3730A3]
                     text-[#3730A3]  bg-[#FFFFFF]"
            className=" px-5 py-2 font-['Inter'] font-medium text-[18px] leading-[28px] tracking-normal text-[#9CA3AF]
                     "
          >
            Hire me
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
