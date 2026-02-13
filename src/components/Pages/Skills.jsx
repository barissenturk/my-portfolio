import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { language } from "../../data/language";
import { useSelector } from "react-redux";

export default function Skills() {
  const { theme } = useTheme();

  const lang = useSelector((state) => state.language.lang);
  const t = language[lang];
  return (
    <section id="skills" className="mt-[124px] mb-[42px]">
      <h1
        className={`font-['Inter'] font-normal text-[48px] leading-[48px] font-semibold h-[64px] mb-[11px]  ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}
      >
        {t.navigation.skills}
      </h1>
      <div className="flex">
        <div className="flex flex-col max-w-[300px]">
          <h2
            className={`font-['Inter'] font-normal text-[30px] leading-[28px] font-medium mb-[28px] ${theme === "light" ? "text-[#4338CA]" : "text-[#B7AAFF]"}`}
          >
            Java Script
          </h2>
          <p
            className={`font-['Inter'] font-normal text-[12px] leading-[16px]  font-normal ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}
          >
            {t.skills.js}
          </p>
        </div>
        <div className="flex flex-col max-w-[300px] mx-[120px]">
          <h2
            className={`font-['Inter'] font-normal text-[30px] leading-[28px] font-medium mb-[28px] ${theme === "light" ? "text-[#4338CA]" : "text-[#B7AAFF]"}`}
          >
            React.Js
          </h2>
          <p
            className={`font-['Inter'] font-normal text-[12px] leading-[16px]  font-normal ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}
          >
            {t.skills.react}
          </p>
        </div>
        <div className="flex flex-col max-w-[300px]">
          <h2
            className={`font-['Inter'] font-normal text-[30px] leading-[28px] font-medium mb-[28px] ${theme === "light" ? "text-[#4338CA]" : "text-[#B7AAFF]"}`}
          >
            Node.Js
          </h2>
          <p
            className={`font-['Inter'] font-normal text-[12px] leading-[16px]  font-normal ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}
          >
            {t.skills.nodeJs}
          </p>
        </div>
      </div>
    </section>
  );
}
