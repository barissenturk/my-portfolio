import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../store/language/languageSlice";
import { language } from "../../data/language";
import { useTheme } from "../../context/ThemeContext";
function ModeSwitcher() {
  //const [lang, setLang] = useState("en");
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "light";

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.language.lang);

  const t = language[lang];

  return (
    <div className="py-6 flex  justify-end  ">
      <div className="  flex items-center justify-end">
        <button
          type="button"
          onClick={toggleTheme}
          className={`relative inline-flex items-center rounded-full
          w-14 h-6 p-1
          transition-colors duration-300
          ${isDark ? "bg-[#4731D3]" : "bg-[#3A3A3A]"}`}
        >
          <span
            className={` rounded-full
             w-4 h-4
            transition-transform duration-300
            ${isDark ? "translate-x-8" : "translate-x-1"}
            bg-[#FFE86E]`}
          >
            {!isDark && (
              <span
                className="absolute inset-0 rounded-full
                         bg-[#3A3A3A]
                         translate-x-[5px]"
              />
            )}
          </span>
        </button>
        <p
          className={`ml-[9px] font-['Inter'] font-bold text-[10px] md:text-[15px] leading-[1] tracking-[0.1em]
    ${!isDark ? "text-[#D9D9D9]" : "text-[#777777]"}`}
        >
          {isDark ? t.modeSwitcher.darkMode : t.modeSwitcher.lightMode}
        </p>
        <span className="ml-3 font-['Inter'] font-bold text-[10px] md:text-[15px] leading-[1] tracking-[0.1em]  text-[#777777]">
          |
        </span>
        <div className="flex items-center font-['Inter'] font-bold text-[10px] md:text-[15px] tracking-[0.1em] ml-3  md:ml-6">
          {lang === "en" ? (
            <>
              <button
                onClick={() => dispatch(setLanguage("tr"))}
                className={`
                     cursor-pointer hover:opacity-80 ${isDark ? " text-[#4731D3]" : " text-[#B7AAFF]"}`}
              >
                {t.modeSwitcher.turkish}
              </button>

              <span className=" text-[#777777]">{t.modeSwitcher.switchTo}</span>
            </>
          ) : (
            <>
              <span className=" text-[#777777]">{t.modeSwitcher.switchTo}</span>

              <button
                onClick={() => dispatch(setLanguage("en"))}
                className={` ml-[6px]
                     cursor-pointer hover:opacity-80 ${isDark ? " text-[#4731D3]" : " text-[#B7AAFF]"}`}
              >
                {t.modeSwitcher.english}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModeSwitcher;
