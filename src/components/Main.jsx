import React from "react";
import ModeSwitcher from "./modeSwitcher/ModeSwitcher";
import { useTheme } from "../context/ThemeContext";
import Navigation from "./navigation/Navigation";
import HireMe from "./Pages/HireMe";
import Skills from "./Pages/Skills";
import Profile from "./Pages/Profile";
function Main() {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen min-w-screen transition-colors duration-300 px-[175px] flex justify-center
        ${theme === "dark" ? "bg-[#252128]" : "bg-[#FFFFFF]"}`}
    >
      <div className="max-w-[1140px]">
        <ModeSwitcher />
        <Navigation />
        <HireMe />
        <Skills />
        <Profile />
      </div>
    </div>
  );
}

export default Main;
