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
    <div className="pt-[25px] pb-[25px] flex items-center justify-end  ">
      <div className=" min-h-[38px] flex items-center justify-end">
        <button
          type="button"
          onClick={toggleTheme}
          className={`relative inline-flex items-center rounded-full
          w-[55px] h-[24px] p-[2px]
          transition-colors duration-300
          ${isDark ? "bg-[#4731D3]" : "bg-[#3A3A3A]"}`}
        >
          {/* KNOB */}
          <span
            className={`relative rounded-full
            w-[16px] h-[16px]
            transition-transform duration-300
            ${isDark ? "translate-x-[30px]" : "translate-x-[5px]"}
            bg-[#FFE86E]`}
          >
            {/* OFF → kalın hilal */}
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
          className={`ml-[9px] font-['Inter'] font-bold text-[15px] leading-[1] tracking-[0.1em]
    ${!isDark ? "text-[#D9D9D9]" : "text-[#777777]"}`}
        >
          {isDark ? t.modeSwitcher.darkMode : t.modeSwitcher.lightMode}
        </p>
        <div className="ml-[14px] font-['Inter'] font-bold text-[15px] leading-[1] tracking-[0.1em]  text-[#777777]">
          |
        </div>
        <div className="flex items-center text-center ml-[24px]">
          {lang === "en" ? (
            <>
              {/* MAVİ & CLICKABLE */}
              <button
                onClick={() => dispatch(setLanguage("tr"))}
                className="font-['Inter'] font-bold text-[15px] tracking-[0.1em]
                     text-[#4731D3] cursor-pointer hover:opacity-80"
              >
                {t.modeSwitcher.turkish}
              </button>

              {/* GRİ & CLICK YOK */}
              <span className="font-['Inter'] font-bold text-[15px] tracking-[0.1em] text-[#777777]">
                {t.modeSwitcher.switchTo}
              </span>
            </>
          ) : (
            <>
              {/* GRİ & CLICK YOK */}
              <span className="font-['Inter'] font-bold text-[15px] tracking-[0.1em] text-[#777777]">
                {t.modeSwitcher.switchTo}
              </span>

              {/* MAVİ & CLICKABLE */}
              <button
                onClick={() => dispatch(setLanguage("en"))}
                className="font-['Inter'] font-bold text-[15px] tracking-[0.1em] ml-[6px]
                     text-[#4731D3] cursor-pointer hover:opacity-80"
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
