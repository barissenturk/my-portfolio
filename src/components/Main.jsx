import React from "react";
import ModeSwitcher from "./modeSwitcher/ModeSwitcher";
import { useTheme } from "../context/ThemeContext";
import Navigation from "./navigation/Navigation";
import { Switch, Route } from "react-router-dom";
function Main() {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen min-w-screen transition-colors duration-300 px-[175px] 
        ${theme === "dark" ? "bg-[#252128]" : "bg-[#FFFFFF]"}`}
    >
      <ModeSwitcher />
      <Navigation />
      <Switch>
        <Route exact path="/" />
        <Route path="/projects" />
        <Route path="/hire-me" />
      </Switch>
    </div>
  );
}

export default Main;
