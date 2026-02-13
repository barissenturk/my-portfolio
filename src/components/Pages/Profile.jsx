import React from "react";

import { useTheme } from "../../context/ThemeContext";
import { language } from "../../data/language";
import { useSelector } from "react-redux";

export default function Profile() {
  const { theme } = useTheme();

  const lang = useSelector((state) => state.language.lang);
  const t = language[lang];

  const aboutMeTitle = `w-[155px] font-['Inter'] font-semibold text-[14px] md:text-[18px] leading-[200%] tracking-[0.01em] ${theme === "light" ? "text-[#000000]" : "text-[#FFFFFF]"}`;

  const aboutMe = `ml-[24px] w-[232px] font-['Inter'] font-[300] text-[14px] md:text-[18px] leading-[200%] tracking-[0.01em] ${theme === "light" ? "text-[#000000]" : "text-[#FFFFFF]"}`;
  return (
    <section id="profile" className="border-y border-[#BAB2E7] ">
      <h1
        className={`font-['Inter'] font-semibold  text-[28px] md:text-[48px] leading-[48px] font-semibold  md:py-[39px] py-5   ${theme === "light" ? "text-[#1F2937]" : "text-[#AEBCCF]"}`}
      >
        Profile
      </h1>
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col max-w-[412px] mb-5 md:mb-[42px]">
          <h2
            className={`font-['Inter'] font-medium text-[22px] md:text-[30px] leading-[28px] font-medium mb-3 md:mb-[28px] ${theme === "light" ? "text-[#4338CA]" : "text-[#B7AAFF]"}`}
          >
            Profile
          </h2>
          <div className="flex flex-col ">
            {t.personal.map((item) => {
              return (
                <div className="flex items-start" key={item.id}>
                  <span
                    className={`
        ${aboutMeTitle}`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`
        ${aboutMe}`}
                  >
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex md:max-w-[576px] md:ml-[57px] flex-col mb-6 ">
          <h2
            className={`font-['Inter'] text-[22px] md:text-[30px] font-medium  mb-1  ${theme === "light" ? "text-[#4338CA]" : "text-[#B7AAFF]"}`}
          >
            About Me
          </h2>

          <p
            className={`font-['Inter'] font-normal text-[12px] md:text-[18px] text-[#6B7280] ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}
          >
            {t.aboutMe.firstParagraph}
          </p>

          <p
            className={`font-['Inter'] font-normal  text-[12px] md:text-[18px] text-[#6B7280] md:mt-4 ${theme === "light" ? "text-[#6B7280]" : "text-[#FFFFFF]"}`}
          >
            {t.aboutMe.secondParagraph}
          </p>
        </div>
      </div>
    </section>
  );
}
