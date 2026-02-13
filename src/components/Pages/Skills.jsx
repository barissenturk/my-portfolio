import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { language } from "../../data/language";
import { useSelector } from "react-redux";

export default function Skills() {
  const { theme } = useTheme();

  const lang = useSelector((state) => state.language.lang);
  const t = language[lang];
  return (
    <section id="skills" className="md:mt-[124px] md:mb-[42px] mt-4 mb-8">
      <h1
        className={`font-['Inter'] font-semibold  text-[28px] md:text-[48px] leading-[48px]  md:h-[64px] mb-2 md:mb-[11px]  ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}
      >
        {t.navigation.skills}
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-30 ">
        {t.skills.map((skill) => {
          return (
            <div className="flex flex-col max-w-[300px]" key={skill.id}>
              <h2
                className={`font-['Inter'] font-medium text-[22px] md:text-[26px] lg:text-[30px] leading-[28px]  mb-2 md:mb-[28px] ${theme === "light" ? "text-[#4338CA]" : "text-[#B7AAFF]"}`}
              >
                {skill.title}
              </h2>
              <p
                className={`font-['Inter'] font-normal text-[10px] md:text-[12px] leading-[16px]   ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}
              >
                {skill.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
