import React, { useState } from "react";

import { useTheme } from "../../context/ThemeContext";
import { language } from "../../data/language";
import { useSelector } from "react-redux";
function Navigation() {
  const { theme } = useTheme();
  const [active, setActive] = useState("");

  const baseClass =
    "px-5 py-2 font-['Inter'] font-medium text-[18px] leading-[28px] tracking-normal text-[#9CA3AF]";

  const activeClass =
    "rounded-[6px] border border-[#3730A3] text-[#3730A3] bg-[#FFFFFF]";

  const badgeStyle =
    theme === "light"
      ? "bg-[#EEEBFF] text-[#7B61FF]"
      : "bg-[#4731D3] text-[#8F88FF]";

  const lang = useSelector((state) => state.language.lang);
  const t = language[lang];

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
          <a
            onClick={() => setActive("skills")}
            href="#skills"
            className={`${baseClass} ${
              active === "skills" ? activeClass : null
            } `}
          >
            {t.navigation.skills}
          </a>

          <a
            onClick={() => setActive("projects")}
            href="#projects"
            className={`${baseClass} ${
              active === "projects" ? activeClass : null
            } `}
          >
            {t.navigation.projects}
          </a>
          <a
            onClick={() => setActive("hire-me")}
            href="#hire-me"
            className={`${baseClass} ${
              active === "hire-me" ? activeClass : null
            } `}
          >
            {t.navigation.hireMe}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
