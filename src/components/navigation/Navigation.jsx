import React, { useState } from "react";

import { useTheme } from "../../context/ThemeContext";
import { language } from "../../data/language";
import { useSelector } from "react-redux";
function Navigation() {
  const { theme } = useTheme();
  const [active, setActive] = useState("");

  const baseClass =
    "px-3 md:px-6 py-2 font-inter font-medium text-[12px] md:text-[18px] text-[#9CA3AF]";

  const activeClass =
    "rounded-md border border-[#3730A3] text-[#3730A3] bg-[#FFFFFF]";

  const badgeStyle =
    theme === "light"
      ? "bg-[#EEEBFF] text-[#7B61FF]"
      : "bg-[#4731D3] text-[#8F88FF]";

  const lang = useSelector((state) => state.language.lang);
  const t = language[lang];

  return (
    <header className="w-full">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center ">
          <div
            className={` w-12 h-12 md:w-[62px] md:h-[62px] rounded-full flex items-center justify-center
        font-['Inter'] font-semibold text-[20px] md:text-[24px] tracking-normal
         rotate-[30deg]
        ${badgeStyle}`}
          >
            B
          </div>
        </div>
        <nav className="flex items-center  gap-4  md:gap-12">
          {Object.keys(t.navigation).map((key) => {
            return (
              <a
                key={key}
                onClick={() => setActive(key)}
                href={`#${key}`}
                className={`${baseClass} ${active === key ? activeClass : null} `}
              >
                {t.navigation[key]}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
