import React from "react";
import ModeSwitcher from "./modeSwitcher/ModeSwitcher";
import { useTheme } from "../context/ThemeContext";
import Navigation from "./navigation/Navigation";
import HireMe from "./Pages/HireMe";
import Skills from "./Pages/Skills";
import Profile from "./Pages/Profile";
import Projects from "./Pages/Projects";
function Main() {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 
        ${theme === "dark" ? "bg-[#252128]" : "bg-[#FFFFFF]"}`}
    >
      <div
        className=" mx-auto
          w-full
          max-w-[1140px]
          px-6
          md:px-10
          lg:px-0"
      >
        <ModeSwitcher />
        <Navigation />
        <HireMe />
        <Skills />
        <Profile />
        <Projects />
      </div>
    </div>
  );
}

export default Main;
